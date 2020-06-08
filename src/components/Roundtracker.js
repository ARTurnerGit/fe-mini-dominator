import React from "react";

function Roundtracker({ roundCounter, playerToGo }) {
  return (
    <div className="round-tracker">
      ROUND: {roundCounter} <br />
      TURN: {playerToGo}
    </div>
  );
}

export default Roundtracker;
