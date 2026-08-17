// React
import React from "react";

// Librairies externes
import { Box } from "@mui/material";

function SegmentedToggle({ options, value, onChange, ariaLabel }) {
  const activeIndex = options.findIndex((option) => option.key === value);

  return (
    <Box
      role="group"
      aria-label={ariaLabel}
      sx={{
        position: "relative",
        display: { xs: "flex", sm: "inline-flex" },
        width: { xs: "100%", sm: "auto" },
        backgroundColor: "primary.light",
        borderRadius: "9999px",
        p: "5px",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "5px",
          bottom: "5px",
          left: "5px",
          width: `calc(${100 / options.length}% - 5px)`,
          borderRadius: "9999px",
          backgroundColor: "brand.deepGreen",
          transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
      {options.map((option) => {
        const isActive = option.key === value;
        return (
          <Box
            key={option.key}
            component="button"
            type="button"
            onClick={() => onChange(option.key)}
            aria-pressed={isActive}
            sx={{
              position: "relative",
              zIndex: 1,
              flex: 1,
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              borderRadius: "9999px",
              px: { xs: 1.5, sm: 3 },
              py: { xs: 1, sm: 1.25 },
              minWidth: { xs: 0, sm: 160 },
              whiteSpace: "nowrap",
              fontFamily: "Instrument Sans, sans-serif",
              fontSize: { xs: "0.8125rem", sm: "1rem" },
              color: isActive ? "common.white" : "brand.darkGreen",
              transition: "color 200ms ease",
            }}
          >
            {option.label}
          </Box>
        );
      })}
    </Box>
  );
}

export default SegmentedToggle;
