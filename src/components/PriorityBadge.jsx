// React
import React from "react";

// Librairies externes
import { Box } from "@mui/material";

function PriorityBadge({ rank }) {
  return (
    <Box
      sx={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: "0.875rem",
        flexShrink: 0,
      }}
    >
      {rank}
    </Box>
  );
}

export default PriorityBadge;
