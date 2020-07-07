import React from "react";
import { Paper, Card, TextField, Button } from "@material-ui/core";
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
      <Paper className="form-container" elevation={3}>
        <TextField
          label="Enter Game Number"
          variant="outlined"
          margin="normal"
          value={this.state.gameNumber}
          onChange={this.updateLocalGameNumber}
        />
        <Button
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
            <Card>
              <Iframe gameNumber={this.state.gameNumber} />
            </Card>

            <Button variant="contained" onClick={this.props.extractGameData}>
              CONFIRM
            </Button>
          </>
        )}
      </Paper>
    );
  }
}

export default Form;
