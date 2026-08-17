// React
import React from "react";

// Librairies externes
import { Stack, Typography, Divider } from "@mui/material";

function SpecList({ items, dividers = false }) {
  const content = (
    <Stack direction="row" spacing={4} useFlexGap sx={{ flexWrap: "wrap" }}>
      {items.map((item) => (
        <Stack key={item.label} spacing={1} sx={{ minWidth: 200, flex: "1 1 200px" }}>
          <Typography sx={{ fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem" }}>
            {item.label}
          </Typography>
          <Typography sx={{ fontSize: "0.875rem" }}>{item.value}</Typography>
        </Stack>
      ))}
    </Stack>
  );

  if (!dividers) return content;

  return (
    <Stack spacing={2}>
      <Divider sx={{ borderColor: "brand.pinkBorder" }} />
      {content}
      <Divider sx={{ borderColor: "brand.pinkBorder" }} />
    </Stack>
  );
}

export default SpecList;
