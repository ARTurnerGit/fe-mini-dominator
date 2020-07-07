import React from "react";
import { Typography } from "@material-ui/core";

function Logger({ msg }) {
  return (
    <Typography variant="body1" align="right">
      {msg}
    </Typography>
  );
}

export default Logger;
