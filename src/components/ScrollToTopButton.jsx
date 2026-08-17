// React
import React, { useState, useEffect } from "react";

// Librairies externes
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={visible}>
      <Fab
        onClick={handleClick}
        color="secondary"
        aria-label="Retourner en haut de la page"
        sx={{
          position: "fixed",
          bottom: { xs: 96, md: 32 },
          right: { xs: 16, md: 32 },
          zIndex: 1200,
          "&:hover": { backgroundColor: "secondary.light" },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTopButton;
