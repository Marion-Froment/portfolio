// React
import React from "react";

// Librairies externes
import { Box } from "@mui/material";

// Thème
import { radius } from "../theme";

// Composants locaux
import ProjectPage from "../components/ProjectPage";
import DiagnosticEtArborescence from "./craigslist/DiagnosticEtArborescence";
import IdentiteEtPalette from "./craigslist/IdentiteEtPalette";
import ComparateurLowFiHiFi from "./craigslist/ComparateurLowFiHiFi";

// Assets locaux
import mainMockup from "../assets/images/craiglist mockup.svg";

const meta = [
  { label: "Mon rôle", value: "UX - UI designer" },
  { label: "Timeline", value: "2 semaines" },
  { label: "Secteur", value: "Plateforme de Petites Annonces C2C" },
  { label: "Outils & Livrables", value: "Figma, Architecture de l'Information, Maquettes Low-Fi & Hi-Fi" },
];

const tabs = [
  { label: "Diagnostic & arborescence", Panel: DiagnosticEtArborescence },
  { label: "Identité et palette", Panel: IdentiteEtPalette },
  { label: "Comparateur (Low-Fi vs Hi-Fi)", Panel: ComparateurLowFiHiFi },
];

function Craigslist() {
  return (
    <ProjectPage
      idPrefix="craigslist"
      breadcrumbLabel="Craigslist"
      chipLabel="Refonte UI & architecture de l'information"
      title="Craigslist : Dompter la surcharge cognitive par l'utilisabilité"
      intro="Comment dompter la surcharge cognitive sur un site de petites annonces historique ? Voici la refonte visuelle et structurelle complète d'une interface ultra-dense pour en faire une expérience moderne, fluide et accessible."
      meta={meta}
      tabs={tabs}
      mockup={
        <Box
          component="img"
          src={mainMockup}
          alt="Aperçu de la refonte UI de Craigslist affichée sur tablette"
          sx={{
            height: { xs: 260, sm: 420, md: 650 },
            width: "100%",
            borderRadius: radius.lg,
            objectFit: "cover",
            objectPosition: "center 60%",
          }}
        />
      }
    />
  );
}

export default Craigslist;
