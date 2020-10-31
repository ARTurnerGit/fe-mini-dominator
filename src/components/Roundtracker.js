import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Box, Typography, Button } from "@material-ui/core";

function Roundtracker({ roundCounter, playerToGo }) {
  return (
    <Box
      className="roundTracker"
      style={{
        height: "10vh",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Button variant="contained">
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <Typography variant="body1" align="left">
          ROUND: {roundCounter}
        </Typography>
        <Button variant="contained">
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
      <div>
        <Button variant="contained">
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <Typography variant="body1" align="left">
          {playerToGo}
        </Typography>
        <Button variant="contained">
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
    </Box>
  );
}

export default Roundtracker;
