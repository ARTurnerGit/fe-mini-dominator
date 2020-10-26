import React from "react";
import { Modal, CircularProgress } from "@material-ui/core";

function Game({ requestingData }) {
  return (
    <Modal
      open={requestingData}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size="100px" style={{ outline: "none" }} />
    </Modal>
  );
}

export default Game;
