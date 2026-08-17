// React
import React from "react";

// Librairies externes
import { Box, Stack, Typography } from "@mui/material";

// Thème
import { radius } from "../theme";

function ColorPalette({ colors }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        flex: 1,
        alignContent: "stretch",
        borderRadius: radius.sm,
        overflow: "hidden",
      }}
    >
      {colors.map((color) => (
        <Stack
          key={color.hex}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5,
            backgroundColor: color.hex,
            color: color.text,
            px: 1.5,
            py: 3,
          }}
        >
          <Typography sx={{ fontSize: "0.875rem" }}>{color.hex}</Typography>
          <Typography sx={{ fontSize: "0.75rem", textAlign: "center" }}>{color.label}</Typography>
        </Stack>
      ))}
    </Box>
  );
}

export default ColorPalette;
