// React
import React from "react";

// Librairies externes
import { Box, Typography, Stack, Chip } from "@mui/material";

// Composants locaux
import PersonaCarousel from "../../components/PersonaCarousel";
import ShowcaseCard from "../../components/ShowcaseCard";

// Thème
import { radius } from "../../theme";

// Assets locaux
import personaUrbain from "../../assets/barbiche/Persona - l’urbain soigné.webp";
import personaDebutant from "../../assets/barbiche/Persona - le curieux débutant (1).webp";
import personaExpert from "../../assets/barbiche/Persona  -  l’utilisateur expérimenté, expert du grooming.webp";

const benchmark = [
  {
    brand: "Horace",
    tag: "Pure Player",
    description: "Navigation simple, fiches pédagogiques denses, mais manque d'outils de routine interactive.",
  },
  {
    brand: "Bivouak Paris",
    tag: "Bio & Naturel",
    description: "Identité nature & outdoor brute. Interface très lente favorisant la découverte, moins adaptée aux achats d'urgence.",
  },
  {
    brand: "Aesop",
    tag: "Haut de gamme",
    description: "Minimalisme absolu, approche très éditoriale, peu de clics, mais univers unisexe et prix très élevés.",
  },
];

const stats = [
  {
    value: "70%",
    label: "Difficulté de choix",
    description: "Déclarent peiner à identifier un produit adapté sans conseil d'expert direct.",
  },
  {
    value: "83,4%",
    label: "Exigence de composition",
    description: "Accordent une importance vitale à la composition propre des ingrédients.",
  },
  {
    value: "2/3",
    label: "Besoin de Tutoriels",
    description: "Les débutants demandent des guides vidéo pas à pas pour se lancer sereinement.",
  },
];

const personas = [
  { image: personaUrbain, alt: "Persona : l'urbain soigné" },
  { image: personaDebutant, alt: "Persona : le curieux débutant" },
  { image: personaExpert, alt: "Persona : l'utilisateur expérimenté, expert du grooming" },
];

function RechercheEtCadrage() {
  return (
    <Stack spacing={4}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} sx={{ alignItems: "flex-start" }}>
        <ShowcaseCard title="Le Concept & L'analyse Marché" sx={{ flex: 1 }}>
          <Typography>
            Le projet Barbiche est né d'un constat clair : la cosmétique masculine reste
            sous-exploitée en ligne. Fortement inspirée de mon expérience de plus de 10 ans dans
            l'esthétique, cette marque répond à un besoin croissant des hommes pour des produits de
            soin naturels, efficaces et simples à adopter au quotidien.
          </Typography>

          <Box sx={{ backgroundColor: "primary.light", borderRadius: radius.lg, px: 4, py: 3 }}>
            <Typography sx={{ fontWeight: 700, textTransform: "uppercase", mb: 2 }}>
              Indicateurs majeurs du cadrage
            </Typography>
            <Box component="ul" sx={{ pl: 3, m: 0, listStyleType: "disc", "& li + li": { mt: 1 } }}>
              <Typography component="li">
                <Typography component="span" sx={{ fontWeight: 600 }}>
                  Marché mondial en or
                </Typography>{" "}
                : Estimé à 80 milliards de dollars en 2022 avec une croissance de +4,5% par an
                d'ici 2030.
              </Typography>
              <Typography component="li">
                <Typography component="span" sx={{ fontWeight: 600 }}>
                  Cible nationale
                </Typography>{" "}
                : Près de 6 hommes sur 10 utilisent au moins un produit de soin en France (les
                25-45 ans forment le cœur d'audience).
              </Typography>
              <Typography component="li">
                <Typography component="span" sx={{ fontWeight: 600 }}>
                  Attentes du public
                </Typography>{" "}
                : Forte demande pour le "Clean" (formulation transparente), le local (Fabriqué en
                France) et un discours épuré décomplexé.
              </Typography>
            </Box>
          </Box>
        </ShowcaseCard>

        <ShowcaseCard title="Benchmark UI/UX" sx={{ flex: 1 }}>
          <Stack spacing={2}>
            {benchmark.map((item) => (
              <Box key={item.brand} sx={{ backgroundColor: "background.default", borderRadius: radius.lg, px: 4, py: 2 }}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", justifyContent: "space-between", mb: 1 }}>
                  <Typography sx={{ fontWeight: 700, textTransform: "uppercase" }}>{item.brand}</Typography>
                  <Chip
                    label={item.tag}
                    size="small"
                    sx={{ backgroundColor: "primary.light", color: "brand.darkGreen", textTransform: "uppercase", fontSize: "0.75rem" }}
                  />
                </Stack>
                <Typography>{item.description}</Typography>
              </Box>
            ))}
          </Stack>
        </ShowcaseCard>
      </Stack>

      <ShowcaseCard title="Recherche Utilisateur : Analyse Quantitative (17 Répondants)">
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
          {stats.map((stat) => (
            <Box
              key={stat.label}
              sx={{
                flex: 1,
                backgroundColor: "secondary.light",
                borderRadius: radius.lg,
                px: 4,
                py: 3,
                textAlign: "center",
              }}
            >
              <Typography variant="h2" component="p" sx={{ fontSize: { xs: "1.75rem", md: "2.5rem" } }}>
                {stat.value}
              </Typography>
              <Typography sx={{ color: "brand.mauveText", textTransform: "uppercase" }}>{stat.label}</Typography>
              <Typography sx={{ fontSize: "0.875rem" }}>{stat.description}</Typography>
            </Box>
          ))}
        </Stack>
      </ShowcaseCard>

      <Stack spacing={3}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}>
          Les 3 Niveaux d'Expertise Personas
        </Typography>
        <PersonaCarousel personas={personas} />
      </Stack>
    </Stack>
  );
}

export default RechercheEtCadrage;
