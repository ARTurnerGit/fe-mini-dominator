import React from "react";
import { TextField } from "@material-ui/core";

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
      <form className="form-container">
        <TextField
          label="Enter Game Number"
          variant="outlined"
          onChange={this.updateLocalGameNumber}
          value={this.state.gameNumber}
        />
        <p className="form-header">ENTER GAME NUMBER:</p>
        <input
          className="form-input"
          type="text"
          onChange={this.updateLocalGameNumber}
          value={this.state.gameNumber}
        />
        <button
          className="form-button"
          onClick={(e) => {
            this.props.passGameNumber(e, this.state.gameNumber);
          }}
        >
          FIND GAME
        </button>
        <button className="form-button" onClick={this.props.extractGameData}>
          CONFIRM
        </button>
      </form>
    );
  }
}

export default Form;
