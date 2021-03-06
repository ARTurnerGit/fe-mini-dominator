import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faFastBackward,
  faStepForward,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Slider, Typography } from "@material-ui/core";

class Controller extends React.Component {
  state = { intervalID: null, sliderInterval: 1000, isPlaying: false };

  handlePlay = () => {
    let { sliderInterval, isPlaying } = this.state;

    if (isPlaying === false) {
      let { playNextInLog } = this.props;
      let intervalID = setInterval(playNextInLog, sliderInterval);
      this.setState({ intervalID, isPlaying: true });
    }
  };

  handlePause = () => {
    let { intervalID } = this.state;
    clearInterval(intervalID);
    this.setState({ intervalID: null, isPlaying: false });
  };

  handleSliderChange = (e, val) => {
    this.setState({ sliderInterval: val });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.logCounter !== this.props.logCounter &&
      this.props.logCounter === this.props.logLength - 1
    ) {
      this.handlePause();
    }
    if (prevState.sliderInterval !== this.state.sliderInterval) {
      let { intervalID, sliderInterval, isPlaying } = this.state;
      let { playNextInLog } = this.props;

      if (isPlaying) {
        clearInterval(intervalID);
        let newIntervalID = setInterval(playNextInLog, sliderInterval);
        this.setState({ intervalID: newIntervalID });
      }
    }
  }
  render() {
    const sliderMarks = [
      { value: 50, label: "0.05s" },
      { value: 500, label: "0.5s" },
      { value: 1000, label: "1s" },
      { value: 2000, label: "2s" },
    ];
    const {
      playNextInLog,
      playPreviousInLog,
      handleReset,
      logCounter,
      logLength,
    } = this.props;
    const { isPlaying } = this.state;
    return (
      <>
        <div className="controller">
          <Button
            variant="contained"
            disabled={logCounter === 0}
            onClick={() => {
              this.handlePause();
              handleReset();
            }}
          >
            <FontAwesomeIcon icon={faFastBackward} />
          </Button>
          <Button
            variant="contained"
            disabled={isPlaying || logCounter === 0}
            onClick={playPreviousInLog}
          >
            <FontAwesomeIcon icon={faStepBackward}></FontAwesomeIcon>
          </Button>
          <Button
            variant="contained"
            disabled={isPlaying}
            onClick={this.handlePlay}
          >
            <FontAwesomeIcon icon={faPlay} />
          </Button>
          <Button
            variant="contained"
            disabled={!isPlaying}
            onClick={this.handlePause}
          >
            <FontAwesomeIcon icon={faPause} />
          </Button>
          <Button
            variant="contained"
            disabled={isPlaying || logCounter === logLength - 1}
            onClick={playNextInLog}
          >
            <FontAwesomeIcon icon={faStepForward}></FontAwesomeIcon>
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body2">
            <em>Playback event duration</em>
          </Typography>
          <Slider
            value={this.state.sliderInterval}
            min={100}
            max={2000}
            marks={sliderMarks}
            onChangeCommitted={this.handleSliderChange}
            style={{ width: "80%" }}
          />
        </div>
      </>
    );
  }
}

export default Controller;
