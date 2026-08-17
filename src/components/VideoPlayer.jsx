// React
import React from "react";

// Librairies externes
import { Box } from "@mui/material";

// Thème
import { radius } from "../theme";

function VideoPlayer({ src, sx = {} }) {
  return (
    <Box
      component="video"
      src={src}
      controls
      preload="metadata"
      sx={{
        width: "100%",
        height: "auto",
        display: "block",
        borderRadius: radius.lg,
        backgroundColor: "common.black",
        ...sx,
      }}
    />
  );
}

export default VideoPlayer;
