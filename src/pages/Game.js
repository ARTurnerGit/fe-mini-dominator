import React from "react";
import he from "he";
import { Modal, CircularProgress } from "@material-ui/core";
import GameContainer from "../components/containers/GameContainer";
import { connect } from "react-redux";
import {
  initialise,
  incrementRound,
  changePlayerToGo,
  changeTerritoryTroops,
  attackTerritory,
  moveTroops,
  changePlayerCards,
  playerDefeated,
  updateString,
} from "../reducers/boardReducer";

class Game extends React.Component {
  state = {
    requestingGameData: false,
    haveGameData: false,
    readyToInitialiseStore: false,
    storeIsReady: false,
    map: {},
    territories: {},
    players: {},
    gamelog: [],
    logCounter: null,
    roundCounter: 1,
    playerToGo: "",
  };

  componentDidMount() {
    const { game_number } = this.props;
    this.extractGameData(game_number);
  }

  extractGameData = (gameNumber) => {
    this.setState({ requestingGameData: true });
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
        haveGameData: true,
        ...territories,
        ...players,
        ...map,
        ...gamelog,
        requestingGameData: false,
      });
    });
  };

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
      return { territories: copyOfTerritories, readyToInitialiseStore: true };
    });
  };

  initialiseStore = () => {
    const { gamelog, territories, players } = this.state;

    const initialBoardState = {
      currentString: gamelog[0],
      roundCounter: null,
      playerToGo: null,
      highlighted: [],
      territories: { ...territories },
      cards: {},
    };

    Object.keys(players).forEach((playerName) => {
      initialBoardState.cards[playerName] = 0;
    });

    this.props.initialise(initialBoardState);
  };

  storeWizard = () => {
    const { gamelog } = this.state;
    for (let i = 1; i < gamelog.length; i++) {
      let currentString = gamelog[i];
      if (/[^A-Za-z0-9\s,.\\(\\)]/.test(currentString)) {
        currentString = he.encode(currentString, { decimal: true });
      }

      if (/Round \d /.test(currentString)) {
        this.props.incrementRound({ currentString });
      } else if (
        / joined the game./.test(currentString) ||
        / started the turn./.test(currentString)
      ) {
        const playerToGo = currentString.split(" ")[0];
        this.props.changePlayerToGo({ currentString, playerToGo });
      } else if (/ troops on /.test(currentString)) {
        const troopsReceived = parseInt(currentString.split(" received ")[1]);
        const territoryReceiving = currentString.split(" on ")[1];

        const highlighted = [territoryReceiving];
        this.props.changeTerritoryTroops({
          currentString,
          highlighted,
          territoryReceiving,
          troopsReceived,
        });
      } else if (/ turning in /.test(currentString)) {
        let currentPlayer = currentString.split(" ")[0];
        this.props.changePlayerCards({
          currentString,
          playerReceiving: currentPlayer,
          cardsReceived: -3,
        });
      } else if (/ reinforced /.test(currentString)) {
        const troopsReceived = parseInt(currentString.split(" with ")[1]);
        const territoryReceiving = currentString.slice(
          0,
          currentString.lastIndexOf("(") - 1
        );
        const highlighted = [territoryReceiving];
        this.props.changeTerritoryTroops({
          currentString,
          highlighted,
          territoryReceiving,
          troopsReceived,
        });
      } else if (/ attacked /.test(currentString)) {
        // two cases here, could be just attacked or attacked and conquered
        const [attString, defString] = currentString.split(" attacked ");
        const attacker = attString.slice(attString.lastIndexOf("(") + 1, -1);
        const attTerritory = attString.slice(0, attString.lastIndexOf("(") - 1);
        const defTerritory = defString.slice(0, defString.lastIndexOf("(") - 1);

        const [defLosses, attLosses] = currentString
          .split(" killing ")[1]
          .match(/\d+/g);

        const highlighted = [attTerritory, defTerritory];

        this.props.attackTerritory({
          currentString,
          highlighted,
          attacker,
          attTerritory,
          defTerritory,
          attLosses,
          defLosses,
        });
      } else if (/ occupied /.test(currentString)) {
        const [depString, arrString] = currentString.split(" occupied ");
        const depTerritory = depString.slice(0, depString.lastIndexOf("(") - 1);
        const arrTerritory = arrString.split(" with ")[0];
        const troopMove = parseInt(
          currentString.split(" with ")[1].match(/\d+/)[0]
        );

        const highlighted = [arrTerritory, depTerritory];

        this.props.moveTroops({
          currentString,
          highlighted,
          arrTerritory,
          depTerritory,
          troopMove,
        });
      } else if (/ fortified /.test(currentString)) {
        const [arrString, depString] = currentString.split(
          " was fortified from "
        );
        const arrTerritory = arrString.slice(0, arrString.lastIndexOf("(") - 1);
        const depTerritory = depString.slice(0, depString.lastIndexOf("(") - 1);
        const troopMove = parseInt(
          currentString.split(" with ")[1].match(/\d+/)[0]
        );

        const highlighted = [arrTerritory, depTerritory];

        this.props.moveTroops({
          currentString,
          highlighted,
          arrTerritory,
          depTerritory,
          troopMove,
        });
      } else if (/ received a card./.test(currentString)) {
        let currentPlayer = currentString.split(" ")[0];
        this.props.changePlayerCards({
          currentString,
          playerReceiving: currentPlayer,
          cardsReceived: 1,
        });
      } else if (/ was defeated by /.test(currentString)) {
        let [loserName, winnerName] = currentString
          .slice(0, -1)
          .split(" was defeated by ");

        this.props.playerDefeated({ currentString, loserName, winnerName });
      } else {
        this.props.updateString({ currentString });
      }
    }
    this.setState({ storeIsReady: true });
  };

  // countTerritoriesAndTroops = () => {
  //   this.setState((curr) => {
  //     let playersCopy = JSON.parse(JSON.stringify(curr.players));

  //     Object.entries(playersCopy).forEach(([playerName, playerObj]) => {
  //       playerObj.territories = 0;
  //       playerObj.troops = 0;
  //       Object.values(curr.territories).forEach((terrObj) => {
  //         if (terrObj.owner === playerName) {
  //           playerObj.territories += 1;
  //           playerObj.troops += terrObj.troops;
  //         }
  //       });
  //     });

  //     return { players: playersCopy };
  //   });
  // };

  playNextInLog = () => {
    this.setState((curr) => {
      if (curr.logCounter === null) return { logCounter: 0 };
      else if (curr.logCounter < curr.gamelog.length)
        return { logCounter: curr.logCounter + 1 };
    });
  };
  handleReset = () => {
    // this.setState((curr) => {
    //   let territoriesCopy = JSON.parse(JSON.stringify(curr.territories));
    //   let playersCopy = JSON.parse(JSON.stringify(curr.players));

    //   for (let territory in territoriesCopy) {
    //     territoriesCopy[territory].troops = 3;
    //   }

    //   for (let player in playersCopy) {
    //     playersCopy[player].cards = 0;
    //   }

    //   return {
    //     players: playersCopy,
    //     territories: territoriesCopy,
    //     logCounter: 0,
    //     roundCounter: 1,
    //     playerToGo: "",
    //   };
    // });
    this.setState({ logCounter: 0 });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.requestingGameData !== this.state.requestingGameData &&
      this.state.haveGameData
    ) {
      this.checkForFirstMentions();
    }
    if (
      prevState.readyToInitialiseStore !== this.state.readyToInitialiseStore &&
      this.state.readyToInitialiseStore
    ) {
      this.initialiseStore();
      this.storeWizard();
    }
  }

  render() {
    const {
      storeIsReady,
      map,
      territories,
      players,
      roundCounter,
      playerToGo,
      gamelog,
      logCounter,
    } = this.state;
    return !storeIsReady ? (
      <Modal
        open={true}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size="100px" style={{ outline: "none" }} />
      </Modal>
    ) : (
      <GameContainer
        map={map}
        territories={territories}
        players={players}
        roundCounter={roundCounter}
        playerToGo={playerToGo}
        msg={gamelog[logCounter]}
        playNextInLog={this.playNextInLog}
        handleReset={this.handleReset}
        logCounter={logCounter}
        logLength={gamelog.length}
      />
    );
  }
}

export default connect(null, {
  initialise,
  incrementRound,
  changePlayerToGo,
  changeTerritoryTroops,
  attackTerritory,
  moveTroops,
  changePlayerCards,
  playerDefeated,
  updateString,
})(Game);
