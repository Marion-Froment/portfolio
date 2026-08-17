// React
import React, { useEffect } from "react";

// Librairies externes
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

// Styles
import "./styles/reset.css";

// Composants locaux
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import Parcours from "./pages/Parcours";
import Barbiche from "./pages/Barbiche";
import Craigslist from "./pages/Craigslist";
import Yumly from "./pages/Yumly";

// Thème
import theme from "./theme";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const timeoutId = setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ block: "start" });
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [hash]);

  return null;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToHash />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/projets/barbiche" element={<Barbiche />} />
          <Route path="/projets/craigslist" element={<Craigslist />} />
          <Route path="/projets/yumly" element={<Yumly />} />
        </Routes>
        <ScrollToTopButton />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
