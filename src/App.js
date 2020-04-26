import playerData from "./components/data/actualPlayerData.js";
import territoryData from "./components/data/actualTerritoryData.js";
import gameLogData from "./components/data/actualGameLogData.js";
import React from "react";
import "./App.css";
import Form from "./components/Form";
import Iframe from "./components/Iframe";
import Gamescreen from "./components/Gamescreen.js";
import Logger from "./components/Logger.js";

class App extends React.Component {
  state = {
    gameNumber: "",
    haveGameNumber: false,
    gameConfirmed: false,
    players: [],
    territories: {},
    gamelog: [],
    logCounter: 0,
  };

  passGameNumber = (e, inputGameNumber) => {
    e.preventDefault();
    this.setState({
      gameNumber: inputGameNumber,
      haveGameNumber: !this.state.haveGameNumber,
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
        <Logger msg={this.state.gamelog[this.state.logCounter]} />
      </div>
    );
  }
}

export default App;
