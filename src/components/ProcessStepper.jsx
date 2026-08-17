// React
import React from "react";

// Librairies externes
import { Box, Stack, Typography } from "@mui/material";

const ICON_SIZE = 32;

function ProcessStepper({ steps }) {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 4, md: 0 }} sx={{ width: "100%", alignItems: "stretch" }}>
      {steps.map((step) => (
        <Box key={step.title} sx={{ flex: { xs: "none", md: 1 }, minWidth: 0, px: 2 }}>
          <Stack sx={{ height: "100%", justifyContent: "space-between", alignItems: "center", textAlign: "center" }}>
            <Stack spacing={1.5} sx={{ alignItems: "center" }}>
              <Box
                sx={{
                  position: "relative",
                  width: ICON_SIZE,
                  height: ICON_SIZE,
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
                {step.number}
              </Box>
              <Typography sx={{ fontFamily: "Gloock, serif", fontSize: "1rem" }}>{step.title}</Typography>
              {step.subtitle && (
                <Typography sx={{ fontFamily: "Gloock, serif", fontSize: "0.875rem" }}>
                  {step.subtitle}
                </Typography>
              )}
              <Typography sx={{ fontSize: "0.8125rem", color: "text.secondary" }}>
                {step.description}
              </Typography>
            </Stack>
            {step.icons && (
              <Stack direction="row" spacing={1} sx={{ justifyContent: "center", pt: 2 }}>
                {step.icons.map((icon, i) => (
                  <Box key={i} component="img" src={icon} alt="" sx={{ height: 32, width: "auto" }} />
                ))}
              </Stack>
            )}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}

export default ProcessStepper;
