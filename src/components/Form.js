import React from "react";
import { Typography, Paper, Card, TextField, Button } from "@material-ui/core";
import Iframe from "./Iframe";
import { navigate } from "@reach/router";

class Form extends React.Component {
  state = {
    gameNumber: "",
  };

  updateLocalGameNumber = (event) => {
    const input = event.target.value;
    this.setState({ gameNumber: input });
  };

  render() {
    const { gameNumber } = this.state;
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
          value={this.state.gameNumber}
          onChange={this.updateLocalGameNumber}
        />
        <Button
          disabled={/\D/.test(gameNumber) || gameNumber === ""}
          variant="contained"
          margin="normal"
          onClick={(e) => {
            this.props.passGameNumber(e, this.state.gameNumber);
          }}
        >
          FIND GAME
        </Button>
        {this.props.haveGameNumber && !this.props.gameConfirmed && (
          <>
            <Card raised={true} className="iframe-container">
              <Iframe gameNumber={this.state.gameNumber} />
            </Card>

            <Button
              variant="contained"
              onClick={() => navigate(`/${this.state.gameNumber}`)}
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
