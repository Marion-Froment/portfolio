// React
import React from "react";

// Librairies externes
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Box, Stack, Link } from "@mui/material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

// Thème
import { radius } from "../theme";

// Assets locaux
import logo from "../assets/images/logo cat.svg";

// En dessous de ce seuil, la sidebar verticale toucherait le texte de la page
// (le conteneur n'a pas encore assez de marge naturelle) : on reste en barre
// horizontale basse, comme sur mobile/tablette, jusqu'à cette largeur.
const SIDEBAR_SAFE_BREAKPOINT = "1360px";

const navLinks = [
  { label: "Projets", to: "/#projets", Icon: GridViewRoundedIcon },
  { label: "Parcours", to: "/parcours", Icon: PersonOutlineRoundedIcon },
  { label: "Contact", to: "/#contact", Icon: MailOutlineRoundedIcon },
];

function Navbar() {
  const { pathname, hash } = useLocation();
  const currentPath = `${pathname}${hash}`;

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: "auto",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        width: "auto",
        zIndex: 1100,
        backgroundColor: "secondary.light",
        borderRadius: "9999px",
        boxShadow: "0px 8px 12px rgba(149,157,165,0.2)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        py: 1,
        px: 1.5,
        gap: 1,
        [`@media (min-width: ${SIDEBAR_SAFE_BREAKPOINT})`]: {
          top: "50%",
          bottom: "auto",
          left: 16,
          transform: "translateY(-50%)",
          width: 72,
          flexDirection: "column",
          py: 2,
          px: 0,
          gap: 0,
        },
      }}
    >
      <Box
        component={RouterLink}
        to="/"
        aria-label="Retour à l'accueil"
        sx={{
          display: { xs: "none", sm: "flex" },
          mb: 0,
          [`@media (min-width: ${SIDEBAR_SAFE_BREAKPOINT})`]: { mb: 2 },
        }}
      >
        <Box component="img" src={logo} alt="Logo Marion représentant un chat avec une fleur de cériser sur la tête" sx={{ width: 52, height: 52 }} />
      </Box>

      <Stack
        component="nav"
        aria-label="Navigation principale"
        direction="row"
        spacing={1}
        useFlexGap
        sx={{
          alignItems: "center",
          [`@media (min-width: ${SIDEBAR_SAFE_BREAKPOINT})`]: {
            flexDirection: "column",
          },
        }}
      >
        {navLinks.map(({ label, to, Icon }) => {
          const isActive = currentPath === to;
          return (
            <Link
              key={to}
              component={RouterLink}
              to={to}
              underline="none"
              aria-current={isActive ? "page" : undefined}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.25,
                px: 0.5,
                py: 0.75,
                borderRadius: radius.md,
                width: 56,
                backgroundColor: isActive ? "primary.dark" : "transparent",
                color: isActive ? "secondary.light" : "primary.dark",
                transition: "background-color 150ms ease",
                "&:hover": {
                  backgroundColor: isActive ? "primary.dark" : "rgba(21, 32, 18, 0.1)",
                },
              }}
            >
              <Icon aria-hidden fontSize="small" />
              <Box component="span" sx={{ fontSize: "0.6875rem", fontWeight: 600, textAlign: "center" }}>
                {label}
              </Box>
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
}

export default Navbar;
