import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Box, Grid, Button, Typography } from "@material-ui/core";

function Roundtracker({ roundCounter, playerToGo }) {
  return (
    <Box className="roundTracker">
      <Grid container spacing={0} justify="center" align="baseline">
        <Grid item xs={3}>
          <Typography variant="body1" align="left">
            Round:
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" size="small" fullWidth={true}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body1" align="center">
            {roundCounter}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" size="small" fullWidth={true}>
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={0} justify="space-between" align="baseline">
        <Grid item xs={3}>
          <Typography variant="body1" align="left">
            Player:
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" size="small" fullWidth={true}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body1" align="center">
            {playerToGo}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" size="small" fullWidth={true}>
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Roundtracker;
