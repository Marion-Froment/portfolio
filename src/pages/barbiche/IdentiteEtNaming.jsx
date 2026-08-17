// React
import React from "react";

// Librairies externes
import { Box, Typography, Stack } from "@mui/material";

// Composants locaux
import ShowcaseCard from "../../components/ShowcaseCard";
import ProcessStepper from "../../components/ProcessStepper";
import ColorPalette from "../../components/ColorPalette";

// Thème
import { radius } from "../../theme";

// Assets locaux
import step1Frame from "../../assets/barbiche/step1-frame.svg";
import step1Circles from "../../assets/barbiche/step1-circles.svg";
import step2Icon from "../../assets/barbiche/step2-icon.svg";
import step3Icon from "../../assets/barbiche/step3-icon.svg";
import step5IconTop from "../../assets/barbiche/step5-icon-top.svg";
import step5IconBottom from "../../assets/barbiche/step5-icon-bottom.svg";
import loaderAnimation from "../../assets/barbiche/Loader barbiche_1.gif";
import logoHorizontal from "../../assets/barbiche/barbiche horizontal dimension.webp";
import logoVertical from "../../assets/barbiche/barbiche vertical dimension.webp";
import logoIcon from "../../assets/barbiche/barbiche icon dimension.webp";
import monochromeHorizontalBlack from "../../assets/barbiche/monochrome_horizontale_black@4x.webp";
import monochromeHorizontalWhite from "../../assets/barbiche/monochorme_horizontale_blanc@4x.webp";
import monochromeVerticalBlack from "../../assets/barbiche/monochrome_vertical_black@4x.webp";
import monochromeVerticalWhite from "../../assets/barbiche/Monochrome_verticale_blanc@4x.webp";
import copperplateSpecimen from "../../assets/barbiche/police copperplate.svg";

const colorPalette = [
  { hex: "#45572C", label: "Couleur primaire : boutons CTA, Navbar", text: "#ffffff" },
  { hex: "#3E1E10", label: "Couleur secondaire : Icon, info", text: "#ffffff" },
  { hex: "#090303", label: "Fond sombre : footer, texte", text: "#ffffff" },
  { hex: "#B9A890", label: "Couleur neutre : bordures", text: "#111111" },
  { hex: "#EEE5E0", label: "Fond clair : pages, sections", text: "#111111" },
];

const typographySpecs = [
  {
    label: "Typographie Principale",
    fontName: "Urbanist",
    description: "Police sans-serif contemporaine aux formes rondes, choisie pour une lisibilité optimale (WCAG AAA) et réduire la fatigue visuelle.",
    specimen: "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz\n0123456789",
    fontFamily: "'Urbanist', sans-serif",
    fontWeight: 700,
    backgroundColor: "secondary.light",
  },
  {
    label: "Typographie Logotype",
    fontName: "Copperplate Gothic",
    description: "Police forte, brute et intemporelle évoquant le savoir-faire des barbiers et des artisans d'époque.",
    specimenImage: copperplateSpecimen,
    backgroundColor: "primary.light",
  },
];

const logoSteps = [
  {
    number: 1,
    title: "Étape 1 : Les Fondations",
    subtitle: "Création des Formes de Base",
    description: "Démarrage avec des formes rondes (cercles) pour définir les volumes de la moustache et du bouc, garantissant un équilibre visuel.",
    icons: [step1Frame, step1Circles],
  },
  {
    number: 2,
    title: "Étape 2 : La Géométrie",
    subtitle: "Vectorisation et Transformation",
    description: "Passage par l'outil pour transformer les tracés en objets manipulables. Fusion des formes de base à l'aide de l'outil Concepteur de forme.",
    icons: [step2Icon],
  },
  {
    number: 3,
    title: "Étape 3 : La Précision",
    subtitle: "Miroir, Duplication et Lissage",
    description: "Affinement des courbes par la manipulation des points d'ancrage à l'aide de l'outil Plume. Duplication de la moitié gauche avec un effet miroir pour une symétrie parfaite.",
    icons: [step3Icon],
  },
  {
    number: 4,
    title: "Étape 4 : Résultat",
    subtitle: "Symbole Final",
    description: "Équilibré et fluide, il est prêt à être intégré dans la charte graphique.",
    icons: [step5IconTop, step5IconBottom],
  },
];

const loaderSteps = [
  { number: 1, title: "État Initial", description: "Logo statique centré, complet et opaque à 100%." },
  { number: 2, title: "L'extension", description: "La pointe gauche de la moustache s'étire horizontalement." },
  { number: 3, title: "Le Rebond", description: "Inertie amortie (Easy Ease Back) de la moustache qui revient." },
  { number: 4, title: "Le Balayage", description: "Un halo lumineux blanc traverse le logo de droite à gauche." },
  { number: 5, title: "Point d'éclat", description: "Une étoile rotative (Scale 0 to 120%) brille puis s'estompe." },
];

const monochromeVariants = [
  { image: monochromeHorizontalBlack, alt: "Logo Barbiche monochrome noir, version horizontale", backgroundColor: "background.paper" },
  { image: monochromeHorizontalWhite, alt: "Logo Barbiche monochrome blanc, version horizontale", backgroundColor: "text.primary" },
  { image: monochromeVerticalBlack, alt: "Logo Barbiche monochrome noir, version verticale", backgroundColor: "background.paper" },
  { image: monochromeVerticalWhite, alt: "Logo Barbiche monochrome blanc, version verticale", backgroundColor: "text.primary" },
];

function IdentiteEtNaming() {
  return (
    <Stack spacing={4}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} sx={{ alignItems: "stretch" }}>
        <ShowcaseCard
          title="Positionnement & Naming"
          description="Barbiche : Un nom de marque proche, accessible et complice, choisi pour sa proximité et sa capacité à briser les barrières techniques de la cosmétique. Le nom de domaine Barbiche.fr a été retenu pour asseoir l'origine locale (Made in France) des soins et stimuler la confiance."
          sx={{ flex: 1 }}
        >
          <Stack spacing={2.5}>
            {typographySpecs.map((spec) => (
              <Stack
                key={spec.label}
                spacing={1.5}
                sx={{ backgroundColor: spec.backgroundColor, borderRadius: radius.md, px: 3, py: 2.5 }}
              >
                <Stack direction="row" spacing={1} useFlexGap sx={{ alignItems: "baseline", flexWrap: "wrap" }}>
                  <Typography sx={{ fontWeight: 700, textTransform: "uppercase", fontSize: "0.75rem" }}>
                    {spec.label}
                  </Typography>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.8125rem" }}>{spec.fontName}</Typography>
                </Stack>
                <Typography sx={{ fontSize: "0.8125rem" }}>{spec.description}</Typography>
                {spec.specimenImage ? (
                  <Box
                    component="img"
                    src={spec.specimenImage}
                    alt={`Spécimen de la police ${spec.fontName}`}
                    sx={{ width: "100%", maxWidth: 320, height: "auto" }}
                  />
                ) : (
                  <Typography
                    sx={{
                      fontFamily: spec.fontFamily,
                      fontWeight: spec.fontWeight || 400,
                      letterSpacing: spec.letterSpacing || 0,
                      fontSize: "1.25rem",
                      whiteSpace: "pre-line",
                      lineHeight: 1.4,
                    }}
                  >
                    {spec.specimen}
                  </Typography>
                )}
              </Stack>
            ))}
          </Stack>
        </ShowcaseCard>

        <ShowcaseCard title="Palette de couleur" sx={{ flex: 1 }}>
          <ColorPalette colors={colorPalette} />
        </ShowcaseCard>
      </Stack>

      <ShowcaseCard
        title="Construction du logo"
        description="La création du symbole a été entièrement vectorisée sous Illustrator en respectant 5 étapes mathématiques d'ajustement"
      >
        <ProcessStepper steps={logoSteps} />
      </ShowcaseCard>

      <ShowcaseCard title="Règles d'espacement & proportions">
        <Stack direction="row" spacing={4} useFlexGap sx={{ alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
          <Box component="img" src={logoVertical} alt="Logotype Barbiche, version verticale avec grille de construction" sx={{ height: 160, width: "auto", maxWidth: "100%", objectFit: "contain" }} />
          <Box component="img" src={logoHorizontal} alt="Logotype Barbiche, version horizontale avec grille de construction" sx={{ height: 90, width: "auto", maxWidth: "100%", objectFit: "contain" }} />
          <Box component="img" src={logoIcon} alt="Icône seule de la marque Barbiche avec grille de construction" sx={{ height: 90, width: "auto", maxWidth: "100%", objectFit: "contain" }} />
        </Stack>
      </ShowcaseCard>

      <ShowcaseCard title="Déclinaisons monochromes">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: 2,
          }}
        >
          {monochromeVariants.map((variant) => (
            <Box
              key={variant.alt}
              sx={{
                backgroundColor: variant.backgroundColor,
                borderRadius: radius.lg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 3,
              }}
            >
              <Box component="img" src={variant.image} alt={variant.alt} sx={{ width: "100%", height: "auto" }} />
            </Box>
          ))}
        </Box>
      </ShowcaseCard>

      <ShowcaseCard title="Storyboard de l'animation du loader">
        <ProcessStepper steps={loaderSteps} />
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            borderRadius: radius.lg,
            py: 6,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={loaderAnimation}
            alt="Animation du loader de la marque Barbiche"
            sx={{ width: 320, display: "block" }}
          />
        </Box>
      </ShowcaseCard>
    </Stack>
  );
}

export default IdentiteEtNaming;
