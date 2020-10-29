import React from "react";
import { Modal, CircularProgress } from "@material-ui/core";
import Gamescreen from "../components/Gamescreen";
import Sidebar from "../components/Sidebar";
import GameContainer from "../components/containers/GameContainer";

class Game extends React.Component {
  componentDidMount() {
    const { extractGameData, game_number } = this.props;
    extractGameData(game_number);
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
      storeIsReady,
    } = this.props;
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
        msg={msg}
        playNextInLog={playNextInLog}
        handleReset={handleReset}
        logCounter={logCounter}
        logLength={logLength}
      />
    );
  }
}

export default Game;
