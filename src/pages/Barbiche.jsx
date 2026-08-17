// React
import React from "react";

// Librairies externes
import { Box } from "@mui/material";

// Thème
import { radius } from "../theme";

// Composants locaux
import ProjectPage from "../components/ProjectPage";
import RechercheEtCadrage from "./barbiche/RechercheEtCadrage";
import IdentiteEtNaming from "./barbiche/IdentiteEtNaming";
import ContenuEtPrint from "./barbiche/ContenuEtPrint";
import UiEtDeveloppement from "./barbiche/UiEtDeveloppement";

// Assets locaux
import mainMockup from "../assets/images/mockup barbiche.webp";

const meta = [
  { label: "Mon rôle", value: "Product Designer & Webflow Developer" },
  { label: "Timeline", value: "6 mois" },
  { label: "Équipe", value: "En autonomie" },
  { label: "Stack d'outils", value: "Figma, Webflow, Capcut, Illustrator, After Effect, Photoshop" },
];

const tabs = [
  { label: "Recherche et cadrage", Panel: RechercheEtCadrage },
  { label: "Identité et naming", Panel: IdentiteEtNaming },
  { label: "Contenu et print", Panel: ContenuEtPrint },
  { label: "Ui et développement", Panel: UiEtDeveloppement },
];

function Barbiche() {
  return (
    <ProjectPage
      idPrefix="barbiche"
      breadcrumbLabel="Barbiche"
      chipLabel="Design 360°, marketing digital, developpement"
      title="Barbiche : repenser le rituel de rasage masculin de A à Z"
      intro="Comment lancer une marque de soins pour hommes de A à Z ? De la stratégie marketing au positionnement de marque, en passant par la création de la D.A., du packaging et d'un site Webflow optimisé"
      meta={meta}
      tabs={tabs}
      mockup={
        <Box
          component="img"
          src={mainMockup}
          alt="Aperçu du site e-commerce Barbiche affiché sur un ordinateur portable tenu en main"
          sx={{
            width: "100%",
            aspectRatio: "3846 / 2344",
            borderRadius: radius.lg,
            objectFit: "cover",
          }}
        />
      }
    />
  );
}

export default Barbiche;
