import React from "react";
import "./App.css";
import Form from "./components/Form";
import Iframe from "./components/Iframe";
import Playerdata from "./components/data/Playerdata";
import { parse } from "node-html-parser";

class App extends React.Component {
  state = {
    gameNumber: "",
    haveGameNumber: false,
    gameConfirmed: false,
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
    console.log("extracting game data");
    const root = parse(Playerdata);
    console.log(root.toString());
  };

  render() {
    return (
      <div className="App">
        {!this.gameConfirmed && (
          <Form
            passGameNumber={this.passGameNumber}
            extractGameData={this.extractGameData}
          />
        )}
        {this.state.haveGameNumber && !this.gameConfirmed && (
          <Iframe gameNumber={this.state.gameNumber} />
        )}
      </div>
    );
  }
}

export default App;
