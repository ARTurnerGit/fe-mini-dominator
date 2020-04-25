import React from "react";

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
