import React from "react";
import { Paper, TextField, Button } from "@material-ui/core";
import Iframe from "./Iframe";

class Form extends React.Component {
  state = {
    gameNumber: "",
  };

  updateLocalGameNumber = (event) => {
    const input = event.target.value;
    this.setState({ gameNumber: input });
  };

  render() {
    return (
      <Paper className="form-container">
        <TextField
          label="Enter Game Number"
          variant="outlined"
          value={this.state.gameNumber}
          onChange={this.updateLocalGameNumber}
        />
        <Button
          variant="contained"
          onClick={(e) => {
            this.props.passGameNumber(e, this.state.gameNumber);
          }}
        >
          FIND GAME
        </Button>
        <Button variant="contained" onClick={this.props.extractGameData}>
          CONFIRM
        </Button>
        {this.props.haveGameNumber && !this.props.gameConfirmed && (
          <Iframe gameNumber={this.state.gameNumber} />
        )}
      </Paper>
    );
  }
}

export default Form;
