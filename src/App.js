import React from "react";
import { Router, navigate } from "@reach/router";
import he from "he";
import "./App.css";
import Form from "./components/Form";
import Gamescreen from "./components/Gamescreen.js";
import Sidebar from "./components/Sidebar.js";
import { Modal, CircularProgress } from "@material-ui/core";
import Home from "./pages/Home";
import Game from "./pages/Game";

class App extends React.Component {
  state = {
    gameNumber: "",
    haveGameNumber: false,
    gameConfirmed: false,
    map: {},
    players: {},
    territories: {},
    gamelog: [],
    logCounter: null,
    roundCounter: 1,
    playerToGo: "",
    requestingData: false,
  };

  passGameNumber = (e, inputGameNumber) => {
    e.preventDefault();
    this.setState({
      gameNumber: inputGameNumber,
      haveGameNumber: true,
    });
  };

  extractGameData = (e) => {
    this.setState({ requestingData: true });
    e.preventDefault();
    let { gameNumber } = this.state;
    navigate(`/${gameNumber}`);
    let proxyAddress = "https://dominator-proxy-server.herokuapp.com/";
    let resourcesToRequest = ["/territories", "/map", "/players", "/gamelog"];
    let requests = resourcesToRequest.map((resource) => {
      return new Request(proxyAddress + gameNumber + resource);
    });
    let promises = requests.map((request) =>
      fetch(request).then((res) => res.json())
    );

    Promise.all(promises).then(([territories, map, players, gamelog]) => {
      this.setState({
        gameConfirmed: true,
        ...territories,
        ...players,
        ...map,
        ...gamelog,
        requestingData: false,
      });
    });
  };

  countTerritoriesAndTroops = () => {
    this.setState((curr) => {
      let playersCopy = JSON.parse(JSON.stringify(curr.players));

      Object.entries(playersCopy).forEach(([playerName, playerObj]) => {
        playerObj.territories = 0;
        playerObj.troops = 0;
        Object.values(curr.territories).forEach((terrObj) => {
          if (terrObj.owner === playerName) {
            playerObj.territories += 1;
            playerObj.troops += terrObj.troops;
          }
        });
      });

      return { players: playersCopy };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.logCounter !== this.state.logCounter) {
      if (this.state.logCounter === 0) {
        this.checkForFirstMentions();
      }
      this.logWizard();
      this.countTerritoriesAndTroops();
    }
  }

  checkForFirstMentions = () => {
    const { gamelog, territories } = this.state;
    const territoryNames = Object.keys(territories);
    const firstMentions = [];

    territoryNames.forEach((territory) => {
      territory = he.decode(territory);
      const escapedTerritory = territory
        .replace("(", "\\(")
        .replace(")", "\\)");
      const placeAndNameReg = new RegExp(`${escapedTerritory} \\(.*?\\)`);

      const firstMentionString = gamelog.find((logString) =>
        placeAndNameReg.test(logString)
      );

      if (firstMentionString !== undefined) {
        let placeAndOwner = firstMentionString.match(placeAndNameReg)[0];
        let place = placeAndOwner.slice(0, placeAndOwner.lastIndexOf("(") - 1);
        let owner = placeAndOwner.slice(placeAndOwner.lastIndexOf("(") + 1, -1);
        firstMentions.push([place, owner]);
      }
    });
    this.setState((curr) => {
      const copyOfTerritories = JSON.parse(JSON.stringify(curr.territories));
      firstMentions.forEach(([place, owner]) => {
        let encodedPlace = he.encode(place, { decimal: true });
        copyOfTerritories[encodedPlace].owner = owner;
      });
      return { territories: copyOfTerritories };
    });
  };

  playNextInLog = () => {
    this.setState((curr) => {
      if (curr.logCounter === null) return { logCounter: 0 };
      else if (curr.logCounter < curr.gamelog.length)
        return { logCounter: curr.logCounter + 1 };
    });
  };

  handleReset = () => {
    this.setState((curr) => {
      let territoriesCopy = JSON.parse(JSON.stringify(curr.territories));
      let playersCopy = JSON.parse(JSON.stringify(curr.players));

      for (let territory in territoriesCopy) {
        territoriesCopy[territory].troops = 3;
      }

      for (let player in playersCopy) {
        playersCopy[player].cards = 0;
      }

      return {
        players: playersCopy,
        territories: territoriesCopy,
        logCounter: 0,
        roundCounter: 1,
        playerToGo: "",
      };
    });
  };

  logWizard = () => {
    // turn off highlighting...
    this.setState((curr) => {
      let newTerritories = JSON.parse(JSON.stringify(curr.territories));

      Object.values(newTerritories).forEach(
        (territoryObj) => (territoryObj.highlighted = false)
      );
      return { territories: newTerritories };
    });

    // ...then check what happens in the log
    const { gamelog, logCounter } = this.state;
    let currentString = gamelog[logCounter];

    if (/[^A-Za-z0-9\s,.\\(\\)]/.test(currentString)) {
      currentString = he.encode(currentString, { decimal: true });
    }
    try {
      if (/Round \d /.test(currentString)) {
        this.setState((curr) => {
          return { roundCounter: curr.roundCounter + 1 };
        });
      }
      if (
        / joined the game./.test(currentString) ||
        / started the turn./.test(currentString)
      ) {
        this.setState({ playerToGo: currentString.split(" ")[0] });
      }
      if (/ troops on /.test(currentString)) {
        const troopsReceived = parseInt(currentString.split(" received ")[1]);
        const territoryReceiving = currentString.split(" on ")[1];

        this.setState((curr) => {
          let updatedTerritories = JSON.parse(JSON.stringify(curr.territories));

          updatedTerritories[territoryReceiving].troops =
            updatedTerritories[territoryReceiving].troops + troopsReceived;
          updatedTerritories[territoryReceiving].highlighted = true;

          return { territories: updatedTerritories };
        });
      }
      if (/ turning in /.test(currentString)) {
        let currentPlayer = currentString.split(" ")[0];
        this.setState((curr) => {
          let playersCopy = JSON.parse(JSON.stringify(curr.players));
          Object.entries(playersCopy).forEach(([playerName, playerObj]) => {
            if (playerName === currentPlayer) {
              playerObj.cards -= 3;
            }
          });
          return { players: playersCopy };
        });
      }
      if (/ reinforced /.test(currentString)) {
        const territory = currentString.slice(
          0,
          currentString.lastIndexOf("(") - 1
        );
        const troopIncrease = parseInt(
          currentString.split(" with ")[1].match(/\d+/)[0]
        );

        this.setState((curr) => {
          let updatedTerritories = JSON.parse(JSON.stringify(curr.territories));
          updatedTerritories[territory].troops =
            updatedTerritories[territory].troops + troopIncrease;
          updatedTerritories[territory].highlighted = true;
          return { territories: updatedTerritories };
        });
      }
      if (/ attacked /.test(currentString)) {
        const [attString, defString] = currentString.split(" attacked ");
        const attTerritory = attString.slice(0, attString.lastIndexOf("(") - 1);
        const defTerritory = defString.slice(0, defString.lastIndexOf("(") - 1);
        const [defLosses, attLosses] = currentString
          .split(" killing ")[1]
          .match(/\d+/g);

        this.setState((curr) => {
          let updatedTerritories = JSON.parse(JSON.stringify(curr.territories));

          updatedTerritories[attTerritory].troops =
            updatedTerritories[attTerritory].troops - attLosses;
          updatedTerritories[attTerritory].highlighted = true;

          updatedTerritories[defTerritory].troops =
            updatedTerritories[defTerritory].troops - defLosses;
          updatedTerritories[defTerritory].highlighted = true;

          if (
            updatedTerritories[attTerritory].troops === 2 &&
            / conquering /.test(currentString)
          ) {
            updatedTerritories[attTerritory].troops = 1;
            updatedTerritories[defTerritory].troops = 1;
          }

          return { territories: updatedTerritories };
        });
      }
      if (/ conquering /.test(currentString)) {
        const [newOwnerString, territoryString] = currentString.split(
          " attacked "
        );
        const newOwner = newOwnerString.slice(
          newOwnerString.lastIndexOf("(") + 1,
          -1
        );
        const territoryToChangeHands = territoryString.slice(
          0,
          territoryString.lastIndexOf("(") - 1
        );
        this.setState((curr) => {
          let updatedTerritories = JSON.parse(JSON.stringify(curr.territories));

          updatedTerritories[territoryToChangeHands].owner = newOwner;
          updatedTerritories[territoryToChangeHands].highlighted = true;
          return { territories: updatedTerritories };
        });
      }
      if (/ occupied /.test(currentString)) {
        const [depString, arrString] = currentString.split(" occupied ");
        const depTerritory = depString.slice(0, depString.lastIndexOf("(") - 1);
        const arrTerritory = arrString.split(" with ")[0];
        const troopMove = parseInt(
          currentString.split(" with ")[1].match(/\d+/)[0]
        );
        this.setState((curr) => {
          let updatedTerritories = JSON.parse(JSON.stringify(curr.territories));

          updatedTerritories[depTerritory].troops =
            updatedTerritories[depTerritory].troops - troopMove;
          updatedTerritories[depTerritory].highlighted = true;

          updatedTerritories[arrTerritory].troops =
            updatedTerritories[arrTerritory].troops + troopMove;
          updatedTerritories[arrTerritory].highlighted = true;

          return { territories: updatedTerritories };
        });
      }
      if (/ fortified /.test(currentString)) {
        const [arrString, depString] = currentString.split(
          " was fortified from "
        );
        const arrTerritory = arrString.slice(0, arrString.lastIndexOf("(") - 1);
        const depTerritory = depString.slice(0, depString.lastIndexOf("(") - 1);
        const troopMove = parseInt(
          currentString.split(" with ")[1].match(/\d+/)[0]
        );
        this.setState((curr) => {
          let updatedTerritories = JSON.parse(JSON.stringify(curr.territories));

          updatedTerritories[depTerritory].troops =
            updatedTerritories[depTerritory].troops - troopMove;
          updatedTerritories[depTerritory].highlighted = true;

          updatedTerritories[arrTerritory].troops =
            updatedTerritories[arrTerritory].troops + troopMove;
          updatedTerritories[arrTerritory].highlighted = true;

          return { territories: updatedTerritories };
        });
      }
      if (/ received a card./.test(currentString)) {
        let currentPlayer = currentString.split(" ")[0];

        this.setState((curr) => {
          let playersCopy = JSON.parse(JSON.stringify(curr.players));
          Object.entries(playersCopy).forEach(([playerName, playerObj]) => {
            if (playerName === currentPlayer) {
              playerObj.cards += 1;
            }
          });

          return { players: playersCopy };
        });
      }

      if (/ was defeated by /.test(currentString)) {
        let [loserName, winnerName] = currentString
          .slice(0, -1)
          .split(" was defeated by ");
        this.setState((curr) => {
          let playersCopy = JSON.parse(JSON.stringify(curr.players));

          let cardsToTransfer = playersCopy[loserName].cards;
          playersCopy[loserName].cards -= cardsToTransfer;
          playersCopy[winnerName].cards += cardsToTransfer;
          return { players: playersCopy };
        });
      }
    } catch (err) {
      console.log({ err, logCounter, currentString });
    }
  };

  render() {
    const {
      players,
      territories,
      haveGameNumber,
      gameConfirmed,
      roundCounter,
      playerToGo,
      gamelog,
      logCounter,
      map,
      requestingData,
    } = this.state;
    // return (
    //   <div className="App">
    //     <Modal
    //       open={requestingData}
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //       }}
    //     >
    //       <CircularProgress size="100px" style={{ outline: "none" }} />
    //     </Modal>

    //     {!gameConfirmed && (
    //       <Form
    //         passGameNumber={this.passGameNumber}
    //         extractGameData={this.extractGameData}
    //         haveGameNumber={haveGameNumber}
    //         gameConfirmed={gameConfirmed}
    //       />
    //     )}
    //     {gameConfirmed && (
    //       <div
    //         className="game-container"
    //         style={{
    //           display: "flex",
    //           justifyContent: "space-around",
    //           alignItems: "center",
    //           width: "100vw",
    //           height: "100vh",
    //         }}
    //       >
    //         <Gamescreen map={map} territories={territories} players={players} />
    //         <Sidebar
    //           roundCounter={roundCounter}
    //           playerToGo={playerToGo}
    //           msg={gamelog[logCounter]}
    //           playNextInLog={this.playNextInLog}
    //           handleReset={this.handleReset}
    //           logCounter={logCounter}
    //           logLength={gamelog.length}
    //           players={players}
    //         />
    //       </div>
    //     )}
    //   </div>
    // );
    return (
      <Router>
        <Home
          default
          passGameNumber={this.passGameNumber}
          extractGameData={this.extractGameData}
          haveGameNumber={haveGameNumber}
          gameConfirmed={gameConfirmed}
        />
        <Game path="/:game_number" requestingData={requestingData} />
      </Router>
    );
  }
}

export default App;
