import React from "react";
import { Modal, CircularProgress } from "@material-ui/core";
import Gamescreen from "../components/Gamescreen";
import Sidebar from "../components/Sidebar";

function Game({
  requestingData,
  gameConfirmed,
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
}) {
  return (
    <>
      <Modal
        open={requestingData}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size="100px" style={{ outline: "none" }} />
      </Modal>
      {gameConfirmed && (
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

export default Game;
