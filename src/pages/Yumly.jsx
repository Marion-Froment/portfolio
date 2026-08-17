// React
import React from "react";

// Librairies externes
import { Box } from "@mui/material";

// Thème
import { radius } from "../theme";

// Composants locaux
import ProjectPage from "../components/ProjectPage";
import Empathie from "./yumly/Empathie";
import Definition from "./yumly/Definition";
import Ideation from "./yumly/Ideation";
import Prototypage from "./yumly/Prototypage";
import Test from "./yumly/Test";

// Assets locaux
import mainMockup from "../assets/images/yumly.svg";

const meta = [
  { label: "Mon rôle", value: "UX researcher & UI designer" },
  { label: "Timeline", value: "À préciser" },
  { label: "Secteur", value: "Application mobile de cuisine" },
  { label: "Outils & Livrables", value: "Figma, Entretiens utilisateurs, Prototype Hi-Fi" },
];

const tabs = [
  { label: "Empathie", Panel: Empathie },
  { label: "Définition", Panel: Definition },
  { label: "Idéation", Panel: Ideation },
  { label: "Prototypage", Panel: Prototypage },
  { label: "Test", Panel: Test },
];

function Yumly() {
  return (
    <ProjectPage
      idPrefix="yumly"
      breadcrumbLabel="Yumly"
      chipLabel="UX research & design thinking"
      title="Yumly : Cuisiner sainement malgré un budget et un temps limités"
      intro="Comment aider les étudiant·es et jeunes actif·ves à cuisiner sainement malgré un budget et un temps limités ? Découvrez une méthodologie UX complète et structurée autour des 5 piliers du Design Thinking."
      meta={meta}
      tabs={tabs}
      mockup={
        <Box
          component="img"
          src={mainMockup}
          alt="Aperçu de l'application mobile Yumly tenue en main, affichant l'écran de recettes"
          sx={{
            height: { xs: 260, sm: 420, md: 650 },
            width: "100%",
            borderRadius: radius.lg,
            objectFit: "cover",
            objectPosition: "center 40%",
            backgroundColor: "primary.light",
          }}
        />
      }
    />
  );
}

export default Yumly;
