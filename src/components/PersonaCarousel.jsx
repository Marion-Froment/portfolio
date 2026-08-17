// React
import React, { useState } from "react";

// Librairies externes
import { Box, MobileStepper, IconButton } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

// Thème
import { radius } from "../theme";

function PersonaCarousel({ personas }) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = personas.length;

  const handleNext = () => setActiveStep((prev) => (prev + 1) % maxSteps);
  const handleBack = () => setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);

  return (
    <Box>
      <Box sx={{ position: "relative", borderRadius: radius.xs, overflow: "hidden" }}>
        <Box
          component="img"
          src={personas[activeStep].image}
          alt={personas[activeStep].alt}
          sx={{ width: "100%", display: "block" }}
        />
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ backgroundColor: "transparent", px: 0, pt: 2 }}
        nextButton={
          <IconButton onClick={handleNext} aria-label="Persona suivant" color="primary">
            <KeyboardArrowRight />
          </IconButton>
        }
        backButton={
          <IconButton onClick={handleBack} aria-label="Persona précédent" color="primary">
            <KeyboardArrowLeft />
          </IconButton>
        }
      />
    </Box>
  );
}

export default PersonaCarousel;
