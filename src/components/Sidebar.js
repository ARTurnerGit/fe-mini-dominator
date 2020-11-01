import React from "react";
import Roundtracker from "./Roundtracker";
import { Card } from "@material-ui/core";
import Logger from "./Logger";
import Controller from "./Controller";
import StatTracker from "./StatTracker";

function Sidebar({
  roundCounter,
  playerToGo,
  msg,
  playNextInLog,
  playPreviousInLog,
  handleReset,
  goNextRound,
  goPrevRound,
  goNextPlayer,
  goPrevPlayer,
  logCounter,
  logLength,
  players,
}) {
  return (
    <Card raised={true} className="sidebar">
      <Roundtracker
        roundCounter={roundCounter}
        playerToGo={playerToGo}
        goNextRound={goNextRound}
        goPrevRound={goPrevRound}
        goNextPlayer={goNextPlayer}
        goPrevPlayer={goPrevPlayer}
      />
      <Logger msg={msg} />
      <Controller
        playNextInLog={playNextInLog}
        playPreviousInLog={playPreviousInLog}
        handleReset={handleReset}
        logCounter={logCounter}
        logLength={logLength}
      />
      <StatTracker players={players} playerToGo={playerToGo} />
    </Card>
  );
}

export default Sidebar;
