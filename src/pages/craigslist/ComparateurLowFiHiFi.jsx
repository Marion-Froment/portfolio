// React
import React, { useState } from "react";

// Librairies externes
import { Box, Typography, Stack } from "@mui/material";

// Composants locaux
import ZoomableImage from "../../components/ZoomableImage";
import SegmentedToggle from "../../components/SegmentedToggle";

// Thème
import { radius } from "../../theme";

// Assets locaux
import wireframeImage from "../../assets/craigslist/wireframe-low-fi.webp";
import hiFiImage from "../../assets/craigslist/maquette-hi-fi.webp";

const views = {
  wireframe: {
    label: "Wireframe Low-Fi",
    title: "Le gabarit de structure filaire (Wireframe) :",
    description: [
      "Le squelette pose la hiérarchie de contenu à blanc : logo, barre de recherche, accès rapide aux catégories phares et bloc d'appel à l'action pour déposer une annonce.",
      "Les zones de contenu (catégories, articles à la une, événements à venir) sont matérialisées en gris pour valider la structure avant tout habillage visuel.",
    ],
    image: wireframeImage,
    alt: "Wireframe basse fidélité de la nouvelle page d'accueil Craigslist",
  },
  hifi: {
    label: "Maquette Hi-Fi",
    title: "Le Design Haute Fidélité finalisé",
    description: [
      "L'en-tête s'habille du logo violet premium avec un accès ordonné aux 5 catégories phares. La bannière jaune stimule instantanément le dépôt d'annonces.",
      `Les catégories ("Vente immobilière", "Voitures", "Ameublement", etc.) et les articles "À la une" prennent vie grâce à des images d'illustration soignées, des prix contrastés et des micro-indications de localisation.`,
    ],
    image: hiFiImage,
    alt: "Maquette haute fidélité finalisée de la nouvelle page d'accueil Craigslist",
  },
};

const viewKeys = Object.keys(views);

function ComparateurLowFiHiFi() {
  const [view, setView] = useState("wireframe");
  const current = views[view];

  return (
    <Stack spacing={4} sx={{ alignItems: "center" }}>
      <SegmentedToggle
        ariaLabel="Basculer entre wireframe basse fidélité et maquette haute fidélité"
        options={viewKeys.map((key) => ({ key, label: views[key].label }))}
        value={view}
        onChange={setView}
      />

      <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 4, md: 7 }} sx={{ alignItems: "flex-start", width: "100%" }}>
        <Stack spacing={3} sx={{ flex: 1, py: 3 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}>
            {current.title}
          </Typography>
          {current.description.map((paragraph) => (
            <Typography key={paragraph}>{paragraph}</Typography>
          ))}
        </Stack>

        <Box
          sx={{
            flex: 1,
            backgroundColor: "common.white",
            boxShadow: "0px 8px 12px rgba(149,157,165,0.2)",
            borderRadius: radius.lg,
            px: 4,
            py: 3,
          }}
        >
          <ZoomableImage
            src={current.image}
            alt={current.alt}
            sx={{ width: "100%", borderRadius: radius.sm }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}

export default ComparateurLowFiHiFi;
