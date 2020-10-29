import React from "react";
import { connect } from "react-redux";
import Gamescreen from "../Gamescreen";
import Sidebar from "../Sidebar";

class GameContainer extends React.Component {
  componentDidMount() {
    // console.log(this.props.history[3]);
  }

  render() {
    const {
      map,
      territories,
      players,
      roundCounter,
      playerToGo,
      msg,
      playNextInLog,
      handleReset,
      logCounter,
      logLength,
    } = this.props;
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
          territories={this.props.history[0].territories}
          players={players}
        />
        <Sidebar
          roundCounter={roundCounter}
          playerToGo={playerToGo}
          msg={msg}
          playNextInLog={playNextInLog}
          handleReset={handleReset}
          logCounter={logCounter}
          logLength={logLength}
          players={players}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({ history: state.board }),
  null
)(GameContainer);
