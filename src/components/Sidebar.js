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
  handleReset,
  logCounter,
  logLength,
  players,
}) {
  return (
    <Card className="sidebar">
      <Roundtracker roundCounter={roundCounter} playerToGo={playerToGo} />
      <Logger msg={msg} />
      <Controller
        playNextInLog={playNextInLog}
        handleReset={handleReset}
        logCounter={logCounter}
        logLength={logLength}
      />
      <StatTracker players={players} playerToGo={playerToGo} />
    </Card>
  );
}

export default Sidebar;
