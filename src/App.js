import playerData from "./components/data/actualPlayerData.js";
import territoryData from "./components/data/actualTerritoryData.js";
import gameLogData from "./components/data/actualGameLogData.js";
import React from "react";
import "./App.css";
import Form from "./components/Form";
import Iframe from "./components/Iframe";
import Gamescreen from "./components/Gamescreen.js";
import Logger from "./components/Logger.js";
import Roundtracker from "./components/Roundtracker.js";

class App extends React.Component {
  state = {
    gameNumber: "",
    haveGameNumber: false,
    gameConfirmed: false,
    players: [],
    territories: {},
    gamelog: [],
    logCounter: 0,
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
    this.setState({
      gameConfirmed: true,
      players: playerData,
      territories: territoryData,
      gamelog: gameLogData,
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.players !== this.state.players) {
      this.checkForFirstMentions();
    }
    if (prevState.logCounter !== this.state.logCounter) {
      this.logWizard();
    }
  }

  checkForFirstMentions = () => {
    const territoryNames = Object.keys(territoryData);
    const firstMentions = [];

    territoryNames.forEach((territory) => {
      const placeAndNameReg = new RegExp(`${territory} \\(.*?\\)`);
      const firstMentionString = this.state.gamelog.find((logString) =>
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

    this.setState((currentState) => {
      const copyOfTerritories = { ...currentState.territories };
      firstMentions.forEach(([place, owner]) => {
        copyOfTerritories[place].owner = owner;
      });
      return { territories: copyOfTerritories };
    });
  };

  playNextInLog = () => {
    this.setState((currentState) => {
      return { logCounter: currentState.logCounter + 1 };
    });
  };

  logWizard = () => {
    // turn off highlighting...
    this.setState((currentState) => {
      const newTerritories = { ...currentState.territories };

      Object.values(newTerritories).forEach(
        (territoryObj) => (territoryObj.highlighted = false)
      );
      return { territories: newTerritories };
    });

    // ...then check what happens in the log
    let currentString = this.state.gamelog[this.state.logCounter];
    if (/Round \d/.test(currentString)) {
      this.setState((currentState) => {
        return { roundCounter: currentState.roundCounter + 1 };
      });
    }
    if (/reinforced/.test(currentString)) {
      let territory = currentString.split("(")[0].trim();
      let troopIncrease = parseInt(
        currentString.split("with")[1].match(/\d+/)[0]
      );

      this.setState((currentState) => {
        let updatedTerritories = { ...currentState.territories };
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

      this.setState((currentState) => {
        let updatedTerritories = { ...currentState.territories };

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
      this.setState((currentState) => {
        let updatedTerritories = { ...currentState.territories };

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
      this.setState((currentState) => {
        let updatedTerritories = { ...currentState.territories };

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
      this.setState((currentState) => {
        let updatedTerritories = { ...currentState.territories };
        updatedTerritories[territoryToChangeHands].owner = newOwner;
        updatedTerritories[territoryToChangeHands].highlighted = true;
        return { territories: updatedTerritories };
      });
    }
    if (/started the turn/.test(currentString)) {
      this.setState({ playerToGo: currentString.split(" ")[0] });
    }
    if (/troops on/.test(currentString)) {
      const troopsReceived = parseInt(currentString.split("received")[1]);
      const territoryReceiving = currentString.split("on")[1].trim();

      this.setState((currentState) => {
        const newTerritories = { ...currentState.territories };

        newTerritories[territoryReceiving].troops =
          newTerritories[territoryReceiving].troops + troopsReceived;
        newTerritories[territoryReceiving].highlighted = true;

        return { territories: newTerritories };
      });
    }
  };

  render() {
    return (
      <div className="App">
        {!this.state.gameConfirmed && (
          <Form
            passGameNumber={this.passGameNumber}
            extractGameData={this.extractGameData}
          />
        )}
        {this.state.haveGameNumber && !this.state.gameConfirmed && (
          <Iframe gameNumber={this.state.gameNumber} />
        )}
        {this.state.gameConfirmed && (
          <Gamescreen
            territories={this.state.territories}
            playNextInLog={this.playNextInLog}
          />
        )}
        {this.state.gameConfirmed && (
          <Logger msg={this.state.gamelog[this.state.logCounter]} />
        )}
        {this.state.gameConfirmed && (
          <Roundtracker
            roundCounter={this.state.roundCounter}
            playerToGo={this.state.playerToGo}
          />
        )}
      </div>
    );
  }
}

export default App;
