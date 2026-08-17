import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#294023",
      light: "#d4d9d3",
      dark: "#152012",
      contrastText: "#fffaf4",
    },
    secondary: {
      main: "#f19dac",
      light: "#fcebee",
      contrastText: "#111111",
    },
    text: {
      primary: "#111111",
      secondary: "#333231",
    },
    background: {
      default: "#fffaf4",
      paper: "#fffefd",
    },
    brand: {
      deepGreen: "#1b2b17",
      darkGreen: "#0e150c",
      pinkBorder: "#c9838f",
      mauveText: "#5a3840",
      problemTint: "rgba(228,234,220,0.2)",
    },
  },
  typography: {
    fontFamily: [
      "Instrument Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: { fontFamily: "Gloock, serif", fontWeight: 400 },
    h2: { fontFamily: "Gloock, serif", fontWeight: 400 },
    h3: { fontFamily: "Gloock, serif", fontWeight: 400 },
    h4: { fontFamily: "Gloock, serif", fontWeight: 400 },
  },
  shape: {
    borderRadius: 32,
  },
});

// Multiples of theme.shape.borderRadius (32px), for use as sx={{ borderRadius: radius.lg }}.
// MUI's sx borderRadius multiplies a numeric value by theme.shape.borderRadius.
export const radius = {
  xs: 0.25, // 8px
  sm: 0.375, // 12px
  md: 0.5, // 16px
  lg: 0.625, // 20px
  xl: 1, // 32px
};

export default theme;
