// React
import React from "react";

// Librairies externes
import { Box, Typography } from "@mui/material";

// Assets locaux
import heroBackground from "../assets/images/Design sans titre 2.webp";

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
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(21,32,18,0.6) 0%, rgba(21,32,18,0.55) 50%, rgba(21,32,18,0.65) 100%)",
        }}
      />
      <Box sx={{ position: "relative", color: "common.white", textAlign: "left" }}>
        <Typography
          component="p"
          sx={{
            fontFamily: "Gloock, serif",
            fontSize: { xs: "1.5rem", md: "2.5rem" },
            textShadow: "0px 2px 12px rgba(21,32,18,0.6)",
          }}
        >
          Product Designer
        </Typography>
        <Typography
          id="hero-heading"
          variant="h1"
          sx={{
            fontSize: { xs: "4rem", md: "12rem" },
            lineHeight: 1,
            textShadow: "0px 4px 24px rgba(21,32,18,0.6)",
          }}
        >
          Portfolio
        </Typography>
      </Box>
    </Box>
  );
}

export default Hero;
