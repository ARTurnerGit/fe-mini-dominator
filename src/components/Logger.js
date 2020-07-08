import React from "react";
import { Box, Typography } from "@material-ui/core";

function Logger({ msg }) {
  return (
    <Box style={{ height: "10vh" }}>
      <Typography variant="body1" align="right">
        {msg}
      </Typography>
    </Box>
  );
}

export default Logger;
