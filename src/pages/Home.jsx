// React
import React from "react";

// Librairies externes
import { Box } from "@mui/material";

// Composants locaux
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Bio from "../components/Bio";
import Footer from "../components/Footer";

function Home() {
  return (
    <Box component="main">
      <Hero />
      <Projects />
      <Bio />
      <Footer />
    </Box>
  );
}

export default Home;
