import React from "react";
import { Typography, Paper, Card, TextField, Button } from "@material-ui/core";
import Iframe from "./Iframe";
import { navigate } from "@reach/router";

class Form extends React.Component {
  state = {
    gameNumber: "",
    haveGameNumber: false,
  };

  render() {
    const { gameNumber, haveGameNumber } = this.state;
    return (
      <Paper className="form-container" elevation={3}>
        <Typography variant="h3" align="center">
          Dominating 12 Visualiser
        </Typography>
        <TextField
          error={/\D/.test(gameNumber)}
          label="Enter Game Number"
          helperText={/\D/.test(gameNumber) ? "Numbers only" : ""}
          variant="outlined"
          margin="normal"
          value={gameNumber}
          onChange={(e) => {
            this.setState({ gameNumber: e.target.value });
          }}
        />
        <Button
          disabled={/\D/.test(gameNumber) || gameNumber === ""}
          variant="contained"
          margin="normal"
          onClick={(e) => {
            this.setState({ haveGameNumber: true });
          }}
        >
          FIND GAME
        </Button>
        {haveGameNumber && (
          <>
            <Card raised={true} className="iframe-container">
              <Iframe gameNumber={gameNumber} />
            </Card>

            <Button
              variant="contained"
              onClick={() => navigate(`/${gameNumber}`)}
            >
              CONFIRM
            </Button>
          </>
        )}
      </Paper>
    );
  }
}

export default Form;
