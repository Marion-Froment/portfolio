// React
import React from "react";

// Librairies externes
import { Box, Container, Typography, Stack } from "@mui/material";

// Composants locaux
import ProjectCard from "./ProjectCard";

// Assets locaux
import barbicheImage from "../assets/images/mockup barbiche.webp";
import craigslistImage from "../assets/images/craiglist mockup.svg";
import yumlyImage from "../assets/images/yumly.svg";

const projects = [
  {
    title: "Barbiche",
    imageAlt: "Aperçu du site e-commerce Barbiche affiché sur tablette et smartphone",
    eyebrow: "Design 360°, marketing digital, developpement",
    problem:
      "Comment lancer une marque de soins pour hommes de A à Z ? De la stratégie marketing au positionnement de marque, en passant par la création de la D.A., du packaging et d'un site Webflow optimisé",
    description:
      "Découvrez ce projet de site d'e-commerce de vente de produit cosmétique pour hommes.",
    tags: ["Marketing Strategy", "Packaging", "UX UI Design", "Webflow dev"],
    image: barbicheImage,
    imageBg: "primary.contrastText",
    imageFit: "contain",
    link: "/projets/barbiche",
  },
  {
    title: "Yumly - Application mobile",
    imageAlt: "Aperçu de l'application mobile Yumly tenue en main, affichant l'écran de recettes",
    eyebrow: "UX research & design thinking",
    problem:
      "“Comment aider les étudiant·es et jeunes actif·ves à cuisiner sainement malgré un budget et un temps limités ?”",
    description:
      "Découvrez une méthodologie UX complète et structurée. En s'appuyant sur les 5 piliers du Design Thinking, Yumly résout la friction entre l'accessibilité alimentaire des jeunes et la charge mentale du quotidien.",
    tags: ["Design Thinking", "User Interviews", "Tests utilisateur", "Figma Prototype"],
    image: yumlyImage,
    imageBg: "primary.light",
    link: "/projets/yumly",
  },
  {
    title: "Craigslist",
    imageAlt: "Aperçu de la refonte UI de Craigslist affichée sur tablette",
    eyebrow: "Refonte UI & architecture de l'information",
    problem:
      "Comment dompter la surcharge cognitive sur un site de petites annonces historique ? Voici la refonte visuelle et structurelle complète d'une interface ultra-dense pour en faire une expérience moderne, fluide et accessible.",
    description:
      "Réaliser une recherche approfondie de l'userflow d'un site historique de petites annonces.",
    tags: ["UI Refactoring", "Information Architecture", "Responsive Design"],
    image: craigslistImage,
    imageBg: null,
    link: "/projets/craigslist",
  },
];

function Projects() {
  return (
    <Box
      id="projets"
      component="section"
      aria-labelledby="projets-heading"
      sx={{ backgroundColor: "background.default", py: { xs: 6, md: 10 } }}
    >
      <Container maxWidth="lg">
        <Typography id="projets-heading" variant="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 5 }}>
          Projets
        </Typography>

        <Stack spacing={5}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Projects;
