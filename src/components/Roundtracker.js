import React from "react";
import { Typography } from "@material-ui/core";

function Roundtracker({ roundCounter, playerToGo }) {
  return (
    <Typography variant="body1" align="left">
      ROUND: {roundCounter} <br /> {playerToGo}
    </Typography>
  );
}

export default Roundtracker;
