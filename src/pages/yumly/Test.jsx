// React
import React from "react";

// Librairies externes
import { Box, Typography, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// Composants locaux
import ShowcaseCard from "../../components/ShowcaseCard";

// Thème
import { radius } from "../../theme";

const testScenario =
  "Vous avez décidé de manger plus sainement et sans sel, avec un petit budget, pendant deux semaines. L'objectif est de recevoir des recettes personnalisées selon vos préférences alimentaires. Vous ne consommez ni porc ni fruits de mer, disposez d'un autocuiseur, et votre budget est limité à 30€ par semaine.";

const protocolSteps = [
  "S'inscrire sur l'application",
  "Réaliser le questionnaire de personnalisation",
  "Choisir un programme",
  "Consulter le contenu du premier jour du programme",
  "Regarder la recette du déjeuner",
];

const strengths = [
  "Interface jugée intuitive, claire et pas surchargée d'informations.",
  "Palette verte douce et fond blanc bien perçus, rappelle des applications déjà connues des testeur·euses.",
  "Bonne immersion : les deux testeur·euses se projettent facilement dans un usage réel.",
  "Les cards de recettes sont perçues comme clairement cliquables.",
  "Le bouton \"Lancer le tuto\" donne envie de cliquer, bien identifiable.",
  "La mise en favoris et leur consultation fonctionnent sans blocage.",
  "Le découpage de la recette en 3 sections (Détails / Ingrédients / Instructions) est validé.",
];

const frictions = [
  {
    label: "Connexion via Google",
    value: "Le bouton d'inscription via Google n'est pas assez visible, alors que c'est l'option préférée par un testeur.",
  },
  {
    label: "Choix multiple des objectifs",
    value: "La possibilité de sélectionner plusieurs objectifs n'est pas assez explicite à l'écran.",
  },
  {
    label: "Nombre de personnes au foyer",
    value: "Aucun champ ne permet d'indiquer combien de personnes composent le foyer, alors que c'est nécessaire pour adapter les portions et le budget.",
  },
  {
    label: "Modale des préférences",
    value: "Trop courte et peu lisible : besoin d'une modale plus haute, d'une flèche indiquant que les éléments sont cliquables, et d'un indicateur visuel de scroll.",
  },
  {
    label: "Programme à la première connexion",
    value: "Le contenu du programme qui vient d'être sélectionné n'est pas immédiatement clair pour un nouvel utilisateur.",
  },
  {
    label: "Bug identifié",
    value: "Le dîner n'apparaît pas dans la frame du programme.",
  },
  {
    label: "Bouton \"Skip\"",
    value: "Une testeuse n'a pas remarqué la possibilité de passer l'étape du programme.",
  },
];

function Test() {
  return (
    <Stack spacing={4}>
      <ShowcaseCard
        title="Protocole de test"
        description="2 sessions de test utilisateur menées en visioconférence, à partir du scénario contextualisé suivant :"
      >
        <Stack spacing={3}>
          <Box
            sx={{
              backgroundColor: "brand.problemTint",
              borderLeft: "6px solid",
              borderColor: "brand.deepGreen",
              px: 3,
              py: 2.5,
            }}
          >
            <Typography sx={{ fontStyle: "italic" }}>« {testScenario} »</Typography>
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            useFlexGap
            sx={{ alignItems: "center", flexWrap: "wrap", rowGap: 2 }}
          >
            {protocolSteps.map((step, index) => (
              <React.Fragment key={step}>
                <Box sx={{ backgroundColor: "background.default", borderRadius: radius.lg, px: 3, py: 2 }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.875rem", textAlign: "center" }}>{step}</Typography>
                </Box>
                {index < protocolSteps.length - 1 && (
                  <Box sx={{ alignSelf: { xs: "center", sm: "auto" } }}>
                    <ArrowDownwardIcon sx={{ display: { xs: "block", sm: "none" }, color: "primary.main" }} />
                    <ArrowForwardIcon sx={{ display: { xs: "none", sm: "block" }, color: "primary.main" }} />
                  </Box>
                )}
              </React.Fragment>
            ))}
          </Stack>
        </Stack>
      </ShowcaseCard>

      <ShowcaseCard
        title="Points forts observés"
        description="Un retour globalement très positif sur les deux sessions, sans blocage majeur dans la navigation."
      >
        <Box component="ul" sx={{ pl: 3, m: 0, listStyleType: "disc", "& li + li": { mt: 1 } }}>
          {strengths.map((item) => (
            <Typography key={item} component="li" sx={{ fontSize: "0.875rem" }}>
              {item}
            </Typography>
          ))}
        </Box>
      </ShowcaseCard>

      <ShowcaseCard
        title="Points de friction & pistes d'amélioration"
        description="Les irritants relevés lors des tests, à traiter en priorité pour la prochaine itération."
      >
        <Stack spacing={2}>
          {frictions.map((item) => (
            <Box key={item.label} sx={{ backgroundColor: "background.default", borderRadius: radius.lg, px: 3, py: 2 }}>
              <Typography sx={{ fontWeight: 700, fontSize: "0.875rem", mb: 0.5 }}>{item.label}</Typography>
              <Typography sx={{ fontSize: "0.875rem" }}>{item.value}</Typography>
            </Box>
          ))}
        </Stack>
      </ShowcaseCard>
    </Stack>
  );
}

export default Test;
