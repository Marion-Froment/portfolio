// React
import React, { useState } from "react";

// Librairies externes
import { Box, Typography, Stack } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

// Composants locaux
import ShowcaseCard from "../../components/ShowcaseCard";
import ZoomableImage from "../../components/ZoomableImage";
import SegmentedToggle from "../../components/SegmentedToggle";
import ColorPalette from "../../components/ColorPalette";

// Thème
import { radius } from "../../theme";

// Assets locaux
import wireframes from "../../assets/Yumly/Wireframe.svg";
import moodImage1 from "../../assets/Yumly/image 5.webp";
import moodImage2 from "../../assets/Yumly/image 6.webp";
import moodImage3 from "../../assets/Yumly/image 8.webp";
import moodImage4 from "../../assets/Yumly/image 10.webp";
import moodImage5 from "../../assets/Yumly/image 13.webp";
import moodImage6 from "../../assets/Yumly/image 14.webp";
import moodImage7 from "../../assets/Yumly/image 25.webp";
import logoHorizontal from "../../assets/Yumly/Logo horizontale.webp";
import logoVertical from "../../assets/Yumly/vertical logo.webp";

const moodImages = [
  { image: moodImage1, alt: "Référence d'inspiration : application de recettes healthy, style vert et épuré" },
  { image: moodImage2, alt: "Référence d'inspiration : application de livraison de repas, style vert" },
  { image: moodImage3, alt: "Référence d'inspiration : application de génération de recettes à partir d'ingrédients" },
  { image: moodImage4, alt: "Référence d'inspiration : application de recettes avec photographie culinaire" },
  { image: moodImage5, alt: "Référence d'inspiration : mockup d'accueil avec programme de la semaine" },
  { image: moodImage6, alt: "Référence d'inspiration : identité de marque Pomar, palette et iconographie fruits et légumes" },
  { image: moodImage7, alt: "Référence d'inspiration : identité de marque Food Walk, logo mascotte" },
];

const typography = [
  { label: "Titres", fontName: "Alata", fontFamily: "Alata, sans-serif", specimen: "Simplifiez-vous la cuisine !", backgroundColor: "primary.light" },
  { label: "Paragraphes", fontName: "Teachers", fontFamily: "Teachers, sans-serif", specimen: "Des recettes rapides, saines et peu coûteuses, adaptées à votre quotidien.", backgroundColor: "secondary.light" },
];

const colorPalette = [
  { hex: "#F5AA45", label: "Orange", text: "#003324" },
  { hex: "#8BC652", label: "Light Green", text: "#003324" },
  { hex: "#003324", label: "Dark Green", text: "#ffffff" },
  { hex: "#FAFAFA", label: "Beige", text: "#003324" },
];

const prototypeUrl =
  "https://www.figma.com/proto/hepCztvMxrnaZ7YvoaCUIU/Yumly?node-id=65-482&p=f&t=sqLbegJcESxKuIzR-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=176%3A3512";
const prototypeEmbedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(prototypeUrl)}`;

const views = {
  wireframes: { label: "Wireframes" },
  prototype: { label: "Prototype" },
};
const viewKeys = Object.keys(views);

function Prototypage() {
  const [view, setView] = useState("wireframes");

  return (
    <Stack spacing={4}>
      <ShowcaseCard
        title="Wireframes & prototype"
        description="Des écrans en basse fidélité au prototype haute fidélité cliquable de bout en bout."
      >
        <Stack spacing={3} sx={{ alignItems: "center" }}>
          <SegmentedToggle
            ariaLabel="Basculer entre les wireframes et le prototype interactif"
            options={viewKeys.map((key) => ({ key, label: views[key].label }))}
            value={view}
            onChange={setView}
          />

          {view === "wireframes" ? (
            <ZoomableImage
              src={wireframes}
              alt="Wireframes basse fidélité de l'application Yumly : onboarding, accueil, recette, programme, profil et favoris"
              sx={{ width: "100%", borderRadius: radius.sm, backgroundColor: "#8a9a9a" }}
            />
          ) : (
            <Box
              component="iframe"
              src={prototypeEmbedUrl}
              title="Prototype interactif Yumly sur Figma"
              allowFullScreen
              sx={{ width: "100%", height: { xs: 380, sm: 520, md: 700 }, border: "none", borderRadius: radius.sm }}
            />
          )}
        </Stack>
      </ShowcaseCard>

      <ShowcaseCard
        title="Moodboard"
        description="Une sélection de références visuelles (applications de recettes existantes, identités de marque food) pour cadrer une direction artistique chaleureuse, saine et accessible."
      >
        <Masonry columns={{ xs: 2, sm: 2, md: 3 }} spacing={1.5}>
          {moodImages.map((item) => (
            <Box
              key={item.alt}
              component="img"
              src={item.image}
              alt={item.alt}
              sx={{ width: "100%", display: "block", borderRadius: radius.sm }}
            />
          ))}
        </Masonry>
      </ShowcaseCard>

      <ShowcaseCard title="Typographie">
        <Stack direction="row" spacing={3} useFlexGap sx={{ flexWrap: "wrap" }}>
          {typography.map((type) => (
            <Stack
              key={type.label}
              spacing={1.5}
              sx={{ flex: 1, minWidth: 260, backgroundColor: type.backgroundColor, borderRadius: radius.md, px: 3, py: 2.5 }}
            >
              <Stack direction="row" spacing={1} sx={{ alignItems: "baseline", flexWrap: "wrap" }}>
                <Typography sx={{ fontWeight: 700, textTransform: "uppercase", fontSize: "0.75rem" }}>
                  {type.label}
                </Typography>
                <Typography sx={{ fontWeight: 600, fontSize: "0.8125rem" }}>{type.fontName}</Typography>
              </Stack>
              <Typography sx={{ fontFamily: type.fontFamily, fontSize: "1.25rem", lineHeight: 1.4 }}>
                {type.specimen}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </ShowcaseCard>

      <ShowcaseCard title="Palette de couleurs">
        <ColorPalette colors={colorPalette} />
      </ShowcaseCard>

      <ShowcaseCard title="Logo">
        <Stack direction="row" spacing={3} useFlexGap sx={{ flexWrap: "wrap" }}>
          <Box sx={{ flex: 1, minWidth: 260, backgroundColor: "common.white", borderRadius: radius.lg, px: 4, py: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box component="img" src={logoHorizontal} alt="Logo Yumly horizontal : mascotte pain de mie souriante et wordmark" sx={{ height: 80, width: "auto", maxWidth: "100%", objectFit: "contain" }} />
          </Box>
          <Box sx={{ flex: 1, minWidth: 260, backgroundColor: "common.white", borderRadius: radius.lg, px: 4, py: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box component="img" src={logoVertical} alt="Logo Yumly vertical : mascotte pain de mie souriante et wordmark" sx={{ height: 160, width: "auto", maxWidth: "100%", objectFit: "contain" }} />
          </Box>
        </Stack>
      </ShowcaseCard>
    </Stack>
  );
}

export default Prototypage;
