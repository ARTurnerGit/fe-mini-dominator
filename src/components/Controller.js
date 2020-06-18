import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

class Controller extends React.Component {
  state = { intervalID: null };

  handlePlay = () => {
    let { playNextInLog } = this.props;
    let intervalID = setInterval(playNextInLog, 1000);
    this.setState({ intervalID });
  };

  handlePause = () => {
    let { intervalID } = this.state;
    clearInterval(intervalID);
  };

  render() {
    return (
      <>
        <button onClick={this.handlePlay}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button onClick={this.handlePause}>
          <FontAwesomeIcon icon={faPause} />
        </button>
      </>
    );
  }
}

export default Controller;
