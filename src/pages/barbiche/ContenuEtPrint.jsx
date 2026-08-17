// React
import React from "react";

// Librairies externes
import { Box, Typography, Stack } from "@mui/material";

// Composants locaux
import ShowcaseCard from "../../components/ShowcaseCard";
import SpecList from "../../components/SpecList";
import ZoomableImage from "../../components/ZoomableImage";
import VideoPlayer from "../../components/VideoPlayer";

// Thème
import { radius } from "../../theme";

// Assets locaux
import instagramMockup from "../../assets/barbiche/iPhone 15.webp";
import packagingDieCut from "../../assets/barbiche/Frame 32.webp";
import tutorialVideo from "../../assets/barbiche/Barbiche tuto.mp4";

const marketingMix = [
  { label: "Product", value: "Flacon ambré, 99% d'origine naturelle, protection UV." },
  { label: "Price", value: "Positionnement Premium à 18,90€ avec offre de -15% au lancement." },
  { label: "Place", value: "Pure Player exclusif sur le site e-commerce Barbiche.fr." },
  { label: "Promotion", value: "Inbound marketing (SMO, TikTok, Newsletter VIP)." },
];

const carouselSlides = [
  {
    label: "Accroche (Slide 1)",
    value: `Présentation du packshot "Mousse de Chêne" dans son univers naturel pour arrêter le scroll (stop-motion visuel).`,
  },
  {
    label: "Immersion (Slides 2 & 3)",
    value: "Utilisation de la macro-photographie pour montrer la pureté de l'huile et la texture des ingrédients.",
  },
  {
    label: "Preuve sociale",
    value: "Commentaires réels (ex : Yanis Benkacem) pour renforcer la crédibilité communautaire.",
  },
];

const videoSpecs = [
  {
    label: "Logiciels",
    value: "Montage réalisé sous CapCut, pour une production rapide et un rendu dynamique adapté aux formats courts.",
  },
  {
    label: "Accessibilité & impact",
    value: "Sous-titres (police Urbanist) pour un usage nomade et accessible, associés à une voix-off qui humanise le conseil.",
  },
  {
    label: "Identité visuelle",
    value: "Charte graphique respectée de bout en bout : logo et typographies de la marque intégrés au montage.",
  },
  {
    label: "Diffusion",
    value: "Page produit, chaîne YouTube et réseaux sociaux.",
  },
];

const printSpecs = [
  {
    label: "Tracé de coupe",
    value: "Ligne continue bleue déterminant la découpe brute, réalisée à la lame oscillante.",
  },
  {
    label: "Rainage & pliage",
    value: "Pointillés rouges marquant la compression mécanique de la fibre du papier, pour un pli net sans risque de fente.",
  },
  {
    label: "Fond automatique / craqué",
    value: "Montage à enclenchement rapide, sans colle, dimensionné pour accueillir le flacon de 30 ml.",
  },
  {
    label: "Fond perdu (bleed)",
    value: "Extension de 5 mm du fond vert au-delà de la découpe, pour éliminer tout risque de filet blanc au massicotage.",
  },
  {
    label: "Zone tranquille",
    value: "Éléments textuels positionnés à plus de 3 mm des rainages pour garantir leur lisibilité.",
  },
  {
    label: "Finition & papier",
    value: "Papier FSC recyclé (Materica 350g), non couché, pour un rendu sensoriel brut et une démarche zéro plastique, entièrement recyclable.",
  },
];

function ContenuEtPrint() {
  return (
    <Stack spacing={4}>
      <ShowcaseCard
        title={`Le Plan de Lancement : Campagne "L'appel de la forêt"`}
        description="Pour le lancement de l'Huile à Barbe « Mousse de Chêne », j'ai articulé la campagne de 3 semaines autour du slogan « Le secret d'une barbe que l'on n'oublie pas »."
      >
        <SpecList items={marketingMix} dividers />
      </ShowcaseCard>

      <ShowcaseCard
        title="Post Instagram"
        description="Le format carrousel permet une décomposition pédagogique du produit, idéale pour une cible masculine en recherche de réassurance technique."
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={4} sx={{ alignItems: "center" }}>
          <Box
            component="img"
            src={instagramMockup}
            alt="Aperçu du post Instagram de lancement de l'huile à barbe Mousse de Chêne"
            sx={{ height: 340, width: "auto", flexShrink: 0 }}
          />
          <Stack spacing={1.5}>
            <Typography sx={{ fontFamily: "Gloock, serif", fontSize: "1rem" }}>
              Objectifs et mécanique d'engagement
            </Typography>
            <Box component="ul" sx={{ pl: 2.5, m: 0, listStyleType: "disc", "& li + li": { mt: 1 } }}>
              {carouselSlides.map((slide) => (
                <Typography key={slide.label} component="li" sx={{ fontSize: "0.875rem" }}>
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    {slide.label}
                  </Typography>{" "}
                  : {slide.value}
                </Typography>
              ))}
            </Box>
          </Stack>
        </Stack>
      </ShowcaseCard>

      <ShowcaseCard
        title="Gabarit Technique d'Impression (Packaging)"
        description="Pour la fabrication de l'étui cartonné de l'huile, j'ai conçu et livré à l'imprimeur un fichier vectoriel prêt à l'emploi, respectant les contraintes techniques suivantes :"
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          <Box component="ul" sx={{ pl: 2.5, m: 0, flex: 1, listStyleType: "disc", "& li + li": { mt: 1 } }}>
            {printSpecs.map((spec) => (
              <Typography key={spec.label} component="li" sx={{ fontSize: "0.875rem" }}>
                <Typography component="span" sx={{ fontWeight: 600 }}>
                  {spec.label}
                </Typography>{" "}
                : {spec.value}
              </Typography>
            ))}
          </Box>
          <ZoomableImage
            src={packagingDieCut}
            alt="Gabarit vectoriel de découpe et de pliage de l'étui cartonné, avec fond perdu et zone tranquille"
            sx={{ flex: 1, height: 260, borderRadius: radius.lg, backgroundColor: "secondary.light" }}
          />
        </Stack>
      </ShowcaseCard>

      <ShowcaseCard title="Vidéo tutorielle">
        <SpecList items={videoSpecs} dividers />
        <VideoPlayer src={tutorialVideo} />
      </ShowcaseCard>
    </Stack>
  );
}

export default ContenuEtPrint;
