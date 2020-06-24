// import playerData from "./components/data/actualPlayerData.js";
// import territoryData from "./components/data/actualTerritoryData.js";
// import gameLogData from "./components/data/actualGameLogData.js";
import React from "react";
import "./App.css";
import Form from "./components/Form";
import Iframe from "./components/Iframe";
import Gamescreen from "./components/Gamescreen.js";
import Logger from "./components/Logger.js";
import Roundtracker from "./components/Roundtracker.js";
import StatTracker from "./components/StatTracker.js";
import Controller from "./components/Controller.js";

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
  };

  passGameNumber = (e, inputGameNumber) => {
    e.preventDefault();
    this.setState({
      gameNumber: inputGameNumber,
      haveGameNumber: true,
    });
  };

  extractGameData = (e) => {
    e.preventDefault();
    let { gameNumber } = this.state;
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
      const placeAndNameReg = new RegExp(`${territory} \\(.*?\\)`);
      const firstMentionString = gamelog.find((logString) =>
        placeAndNameReg.test(logString)
      );

      if (firstMentionString !== undefined) {
        let [place, owner] = firstMentionString
          .match(placeAndNameReg)[0]
          .split("(");
        place = place.trim();
        owner = owner.slice(0, -1);

        firstMentions.push([place, owner]);
      }
    });

    this.setState((curr) => {
      const copyOfTerritories = JSON.parse(JSON.stringify(curr.territories));
      firstMentions.forEach(([place, owner]) => {
        copyOfTerritories[place].owner = owner;
      });
      return { territories: copyOfTerritories };
    });
  };

  playNextInLog = () => {
    console.log({
      [this.state.logCounter]: this.state.gamelog[this.state.logCounter],
    });
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
    try {
      if (/Round \d/.test(currentString)) {
        this.setState((curr) => {
          return { roundCounter: curr.roundCounter + 1 };
        });
      }
      if (/reinforced/.test(currentString)) {
        let territory = currentString.split("(")[0].trim();
        let troopIncrease = parseInt(
          currentString.split("with")[1].match(/\d+/)[0]
        );

        this.setState((curr) => {
          let updatedTerritories = JSON.parse(JSON.stringify(curr.territories));
          updatedTerritories[territory].troops =
            updatedTerritories[territory].troops + troopIncrease;
          updatedTerritories[territory].highlighted = true;
          return { territories: updatedTerritories };
        });
      }
      if (/attacked/.test(currentString)) {
        const attTerritory = currentString
          .split("attacked")[0]
          .split("(")[0]
          .trim();
        const defTerritory = currentString
          .split("attacked")[1]
          .split("(")[0]
          .trim();
        const [defLosses, attLosses] = currentString
          .split("killing")[1]
          .match(/\d+/g);

        this.setState((curr) => {
          let updatedTerritories = JSON.parse(JSON.stringify(curr.territories));

          updatedTerritories[attTerritory].troops =
            updatedTerritories[attTerritory].troops - attLosses;
          updatedTerritories[attTerritory].highlighted = true;

          updatedTerritories[defTerritory].troops =
            updatedTerritories[defTerritory].troops - defLosses;
          updatedTerritories[defTerritory].highlighted = true;

          return { territories: updatedTerritories };
        });
      }
      if (/occupied/.test(currentString)) {
        const depTerritory = currentString
          .split("occupied")[0]
          .split("(")[0]
          .trim();
        const arrTerritory = currentString
          .split("occupied")[1]
          .split("with")[0]
          .trim();
        const troopMove = parseInt(
          currentString.split("with")[1].match(/\d+/)[0]
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
      if (/fortified/.test(currentString)) {
        const arrTerritory = currentString
          .split("fortified from")[0]
          .split("(")[0]
          .trim();
        const depTerritory = currentString
          .split("fortified from")[1]
          .split("(")[0]
          .trim();
        const troopMove = parseInt(
          currentString.split("with")[1].match(/\d+/)[0]
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
      if (/conquering/.test(currentString)) {
        const newOwner = currentString
          .split("attacked")[0]
          .match(/\(.+?\)/)[0]
          .slice(1, -1);
        const territoryToChangeHands = currentString
          .split("attacked")[1]
          .split("(")[0]
          .trim();
        this.setState((curr) => {
          let updatedTerritories = JSON.parse(JSON.stringify(curr.territories));

          updatedTerritories[territoryToChangeHands].owner = newOwner;
          updatedTerritories[territoryToChangeHands].highlighted = true;
          return { territories: updatedTerritories };
        });
      }
      if (
        /joined the game/.test(currentString) ||
        /started the turn/.test(currentString)
      ) {
        this.setState({ playerToGo: currentString.split(" ")[0] });
      }
      if (/troops on/.test(currentString)) {
        const troopsReceived = parseInt(currentString.split("received")[1]);
        const territoryReceiving = currentString.split("on")[1].trim();

        this.setState((curr) => {
          let updatedTerritories = JSON.parse(JSON.stringify(curr.territories));

          updatedTerritories[territoryReceiving].troops =
            updatedTerritories[territoryReceiving].troops + troopsReceived;
          updatedTerritories[territoryReceiving].highlighted = true;

          return { territories: updatedTerritories };
        });
      }
      if (/received a card/.test(currentString)) {
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
      if (/turning in/.test(currentString)) {
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
      if (/was defeated by/.test(currentString)) {
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
      gameNumber,
      roundCounter,
      playerToGo,
      gamelog,
      logCounter,
      map,
    } = this.state;
    return (
      <div className="App">
        {!gameConfirmed && (
          <Form
            passGameNumber={this.passGameNumber}
            extractGameData={this.extractGameData}
          />
        )}
        {haveGameNumber && !gameConfirmed && <Iframe gameNumber={gameNumber} />}
        {gameConfirmed && (
          <>
            <Gamescreen map={map} territories={territories} players={players} />
            <div className="sidebar">
              <Roundtracker
                roundCounter={roundCounter}
                playerToGo={playerToGo}
              />
              <Logger msg={gamelog[logCounter]} />
              <Controller
                playNextInLog={this.playNextInLog}
                handleReset={this.handleReset}
              />
              <StatTracker players={players} playerToGo={playerToGo} />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
