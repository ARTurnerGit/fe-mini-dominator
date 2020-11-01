import React from "react";
import { connect } from "react-redux";
import Gamescreen from "../Gamescreen";
import Sidebar from "../Sidebar";

class GameContainer extends React.Component {
  state = {
    logCounter: 0,
    currentPlayers: {},
  };
  componentDidMount() {
    this.countTerritoriesAndTroopsAndCards();
  }

  countTerritoriesAndTroopsAndCards = () => {
    const { players, history } = this.props;
    const { logCounter } = this.state;

    this.setState((curr) => {
      let playersCopy = JSON.parse(JSON.stringify(players));

      // Zero the territories and troops, set the cards to reflect the history
      Object.keys(playersCopy).forEach((key) => {
        playersCopy[key].territories = 0;
        playersCopy[key].troops = 0;
        playersCopy[key].cards = history[logCounter].cards[key];
      });

      // Loop through the history, increment the territories and add the troops
      Object.values(history[logCounter].territories).forEach((terrObj) => {
        if (terrObj.owner !== "") {
          playersCopy[terrObj.owner].territories += 1;
          playersCopy[terrObj.owner].troops += terrObj.troops;
        }
      });

      return { currentPlayers: playersCopy };
    });
  };
  playNextInLog = () => {
    const { history } = this.props;
    const { logCounter } = this.state;
    if (logCounter < history.length) {
      this.setState({ logCounter: logCounter + 1 });
    }
  };
  playPreviousInLog = () => {
    const { logCounter } = this.state;
    if (logCounter > 0) {
      this.setState({ logCounter: logCounter - 1 });
    }
  };
  handleReset = () => {
    this.setState({ logCounter: 0 });
  };
  // may need to refactor these two to use while loops - it's clumsy to search through the history from the beginning the whole time.
  goNextRound = () => {
    const { history } = this.props;
    const { logCounter } = this.state;

    const { playerToGo, roundCounter } = history[logCounter];

    let nextLogCounter = history.findIndex(
      (element) =>
        element.playerToGo === playerToGo &&
        element.roundCounter === roundCounter + 1
    );

    if (nextLogCounter !== -1) {
      this.setState({ logCounter: nextLogCounter });
    }
  };
  goPrevRound = () => {
    const { history } = this.props;
    const { logCounter } = this.state;

    const { playerToGo, roundCounter } = history[logCounter];

    let nextLogCounter = history.findIndex(
      (element) =>
        element.playerToGo === playerToGo &&
        element.roundCounter === roundCounter - 1
    );

    if (nextLogCounter !== -1) {
      this.setState({ logCounter: nextLogCounter });
    }
  };
  goNextPlayer = () => {
    const { history } = this.props;
    const { logCounter } = this.state;

    let nextLogCounter = logCounter + 1;

    const reg = / started the turn./;

    while (
      nextLogCounter < history.length &&
      !reg.test(history[nextLogCounter].currentString)
    ) {
      nextLogCounter++;
    }

    if (nextLogCounter !== history.length) {
      this.setState({ logCounter: nextLogCounter });
    }
  };
  goPrevPlayer = () => {
    const { history } = this.props;
    const { logCounter } = this.state;

    let nextLogCounter = logCounter - 1;

    const reg = / started the turn./;

    while (
      nextLogCounter > 0 &&
      !reg.test(history[nextLogCounter].currentString)
    ) {
      nextLogCounter--;
    }

    if (nextLogCounter !== 0) {
      this.setState({ logCounter: nextLogCounter });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.logCounter !== this.state.logCounter) {
      this.countTerritoriesAndTroopsAndCards();
    }
  }

  render() {
    const { map, history } = this.props;
    const { logCounter, currentPlayers } = this.state;
    return (
      <div
        className="game-container"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Gamescreen
          map={map}
          territories={history[logCounter].territories}
          highlighted={history[logCounter].highlighted}
          players={currentPlayers}
        />
        <Sidebar
          roundCounter={history[logCounter].roundCounter}
          playerToGo={history[logCounter].playerToGo}
          msg={history[logCounter].currentString}
          playNextInLog={this.playNextInLog}
          playPreviousInLog={this.playPreviousInLog}
          handleReset={this.handleReset}
          goNextRound={this.goNextRound}
          goPrevRound={this.goPrevRound}
          goNextPlayer={this.goNextPlayer}
          goPrevPlayer={this.goPrevPlayer}
          logCounter={logCounter}
          logLength={history.length}
          players={currentPlayers}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({ history: state.board }),
  null
)(GameContainer);
