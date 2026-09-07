// React
import React from "react";

// Librairies externes
import { Box, Typography } from "@mui/material";

// Assets locaux
import heroBackground from "../assets/images/hero-background.webp";

function Hero() {
  return (
    <Box
      id="accueil"
      component="section"
      aria-labelledby="hero-heading"
      sx={{
        position: "relative",
        height: { xs: 400, md: 624 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={heroBackground}
        alt=""
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Typography id="hero-heading" component="h1" sx={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
        Portfolio 2026, Product Designer
      </Typography>
    </Box>
  );
}

export default Hero;
