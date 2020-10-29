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

      // this seems far too convoluted... surely can be done with fewer Object. methods?
      Object.entries(playersCopy).forEach(([playerName, playerObj]) => {
        playerObj.territories = 0;
        playerObj.troops = 0;
        playerObj.cards = history[logCounter].cards[playerName];
        Object.values(history[logCounter].territories).forEach((terrObj) => {
          if (terrObj.owner === playerName) {
            playerObj.territories += 1;
            playerObj.troops += terrObj.troops;
          }
        });
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
