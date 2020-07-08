import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faFastBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";

class Controller extends React.Component {
  state = { intervalID: null };

  handlePlay = () => {
    if (this.state.intervalID === null) {
      let { playNextInLog } = this.props;
      let intervalID = setInterval(playNextInLog, 100);
      this.setState({ intervalID });
    }
  };

  handlePause = () => {
    let { intervalID } = this.state;
    clearInterval(intervalID);
    this.setState({ intervalID: null });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.logCounter !== this.props.logCounter &&
      this.props.logCounter === this.props.logLength - 1
    ) {
      this.handlePause();
    }
  }
  render() {
    return (
      <div className="controller">
        <Button variant="contained" onClick={this.props.handleReset}>
          <FontAwesomeIcon icon={faFastBackward} />
        </Button>
        <Button variant="contained" onClick={this.handlePlay}>
          <FontAwesomeIcon icon={faPlay} />
        </Button>
        <Button variant="contained" onClick={this.handlePause}>
          <FontAwesomeIcon icon={faPause} />
        </Button>
        <Button variant="contained" onClick={this.props.playNextInLog}>
          <FontAwesomeIcon icon={faStepForward}></FontAwesomeIcon>
        </Button>
      </div>
    );
  }
}

export default Controller;
