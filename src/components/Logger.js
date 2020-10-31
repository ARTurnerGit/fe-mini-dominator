import React from "react";
import { Box, Typography } from "@material-ui/core";

function Logger({ msg }) {
  return (
    <Box style={{ height: "10vh", marginTop: "2vh" }}>
      <Typography variant="body1" align="left">
        {msg}
      </Typography>
    </Box>
  );
}

export default Logger;
