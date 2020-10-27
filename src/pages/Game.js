import React from "react";
import { Modal, CircularProgress } from "@material-ui/core";
import Gamescreen from "../components/Gamescreen";
import Sidebar from "../components/Sidebar";

class Game extends React.Component {
  componentDidMount() {
    const { extractGameData, game_number } = this.props;
    extractGameData(game_number);
  }
  render() {
    const {
      requestingGameData,
      haveGameData,
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
      <>
        <Modal
          open={requestingGameData}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size="100px" style={{ outline: "none" }} />
        </Modal>
        {haveGameData && (
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
            <Gamescreen map={map} territories={territories} players={players} />
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
        )}
      </>
    );
  }
}

export default Game;
