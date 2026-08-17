// React
import React from "react";

// Librairies externes
import { Typography, Stack } from "@mui/material";

// Composants locaux
import ShowcaseCard from "../../components/ShowcaseCard";
import ColorPalette from "../../components/ColorPalette";

const colorPalette = [
  { hex: "#800080", label: "Couleur sémantique historique, modernisée", text: "#ffffff" },
  { hex: "#FAC960", label: "Couleur d'action : dépôt d'annonce", text: "#333231" },
  { hex: "#EE9890", label: "Couleur de proximité locale", text: "#111111" },
  { hex: "#E6E6E6", label: "Couleur neutre : fonds, bordures", text: "#111111" },
];

function IdentiteEtPalette() {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 4, md: 7 }} sx={{ alignItems: "flex-start" }}>
      <Stack spacing={3} sx={{ flex: 1, py: 3 }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}>
          Une D.A. Inspirée de l'Héritage Craigslist
        </Typography>
        <Typography>
          Afin de ne pas perturber les millions d'utilisateurs habituels tout en attirant une
          cible plus jeune, j'ai conservé le célèbre violet sémantique caractéristique de
          Craigslist en le rendant plus noble, plus moderne et plus profond.
        </Typography>
        <Typography>
          Pour le dynamisme et l'interaction, j'ai introduit un jaune d'action ensoleillé qui
          incite l'utilisateur à déposer rapidement son annonce, et un pêche chaleureux pour
          illustrer la proximité locale de la plateforme.
        </Typography>
      </Stack>

      <ShowcaseCard title="Palette de couleur" sx={{ flex: 1 }} contentSx={{ py: 3 }}>
        <ColorPalette colors={colorPalette} />
      </ShowcaseCard>
    </Stack>
  );
}

export default IdentiteEtPalette;
