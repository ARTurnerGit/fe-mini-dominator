import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";

class Controller extends React.Component {
  state = { intervalID: null };

  handlePlay = () => {
    if (this.state.intervalID === null) {
      let { playNextInLog } = this.props;
      let intervalID = setInterval(playNextInLog, 1000);
      this.setState({ intervalID });
    }
  };

  handlePause = () => {
    let { intervalID } = this.state;
    clearInterval(intervalID);
    this.setState({ intervalID: null });
  };

  render() {
    return (
      <div className="controller">
        <button onClick={this.props.handleReset}>
          <FontAwesomeIcon icon={faStepBackward} />
        </button>
        <button onClick={this.handlePlay}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button onClick={this.handlePause}>
          <FontAwesomeIcon icon={faPause} />
        </button>
      </div>
    );
  }
}

export default Controller;
