import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./pages/Home";
import Game from "./pages/Game";

class App extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <Home default />
        <Game path="/:game_number" />
      </Router>
    );
  }
}

export default App;
