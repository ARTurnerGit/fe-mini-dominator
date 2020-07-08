import React from "react";
import { Box, Typography } from "@material-ui/core";

function Roundtracker({ roundCounter, playerToGo }) {
  return (
    <Box style={{ height: "10vh" }}>
      <Typography variant="body1" align="left">
        ROUND: {roundCounter} <br /> {playerToGo}
      </Typography>
    </Box>
  );
}

export default Roundtracker;
