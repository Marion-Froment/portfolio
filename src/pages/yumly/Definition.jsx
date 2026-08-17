// React
import React, { useState } from "react";

// Librairies externes
import {
  Box,
  Typography,
  Stack,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Composants locaux
import ShowcaseCard from "../../components/ShowcaseCard";
import PriorityBadge from "../../components/PriorityBadge";

// Thème
import { radius } from "../../theme";

const priorityGroups = [
  {
    rank: 1,
    label: "Budget",
    items: [
      "Manque d'argent, ne peut pas acheter d'aliments trop coûteux",
      "Ne pas voir le budget de la semaine pour ses courses et ses recettes sélectionnées",
    ],
  },
  {
    rank: 2,
    label: "Capacité",
    items: [
      "Manque d'idées de recettes simples, rapides et saines",
      "Ne pas comprendre des étapes car pas assez bien expliquées",
    ],
  },
  {
    rank: 3,
    label: "Contraintes",
    items: [
      "Manque de temps pour cuisiner",
      "Des contraintes (ex : allergies) ou un régime alimentaire spécifique",
      "Recettes pas adaptées à ses contraintes matérielles",
    ],
  },
  {
    rank: 4,
    label: "Moins important",
    chips: [
      "Temps par étape non visible",
      "Notifications intrusives",
      "Pas de choix des aliments préférés",
      "Jargon de cuisine",
      "Pas de recettes favorites",
      "Sources fiables introuvables",
      "Chargement trop long",
      "Apps coûteuses ou freemium",
    ],
  },
];

const futureFeatures = [
  "Des habitudes à ritualiser qui ne colleraient pas avec son rythme de vie (ex : batchcooking tous les dimanches).",
  "Un accompagnement aux pathologies alimentaires (boulimie, hyperphagie...).",
  "La centralisation d'informations aujourd'hui disparates (réseaux sociaux, YouTube, livres...).",
  "Un accès à des professionnels de santé spécialisés dans le suivi alimentaire.",
  "Une pédagogie sur ce qu'est une cuisine saine et équilibrée, et sur le lien alimentation/santé.",
  "Un accompagnement par étapes pour une transition douce, sans rupture brutale des habitudes.",
];

const hmwQuestions = [
  "Comment aider les étudiant·es ou jeunes actif·ves à cuisiner sainement malgré un budget et un temps limités ?",
  "Comment pourrions-nous faire en sorte que les étudiant·es et jeunes actif·ves puissent identifier les aliments idéaux pour un repas sain et équilibré ?",
];

const userStories = [
  "En tant qu'étudiant·e ou jeune actif·ve en résidence universitaire avec peu de temps, peu d'équipement et un budget serré, je veux pouvoir trouver facilement des recettes rapides, saines et peu coûteuses adaptées au matériel dont je dispose, afin de manger équilibré au quotidien sans stress ni gaspillage.",
  "En tant qu'étudiant·e ou jeune actif·ve, je veux savoir quelles recettes confectionner avec les aliments que j'ai dans mon frigo afin d'éviter le gaspillage alimentaire.",
];

function Definition() {
  const [expanded, setExpanded] = useState(0);

  return (
    <Stack spacing={4}>
      <ShowcaseCard
        title="Identification & priorisation des problèmes potentiels"
        description="Beaucoup d'applications génériques existent, mais peu permettent une personnalisation réelle et des conseils adaptés. J'ai priorisé les irritants recueillis en entretien selon leur impact réel sur le quotidien des utilisateur·rices."
      >
        <Stack spacing={1.5}>
          {priorityGroups.map((group, index) => (
            <Accordion
              key={group.label}
              expanded={expanded === index}
              onChange={(event, isExpanded) => setExpanded(isExpanded ? index : false)}
              disableGutters
              square
              sx={{
                borderRadius: radius.md,
                border: "1px solid",
                borderColor: "divider",
                boxShadow: "none",
                overflow: "hidden",
                "&::before": { display: "none" },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                  <PriorityBadge rank={group.rank} />
                  <Typography sx={{ fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem" }}>
                    {group.label}
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                {group.chips ? (
                  <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
                    {group.chips.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        sx={{ backgroundColor: "secondary.light", color: "brand.mauveText", fontSize: "0.8125rem" }}
                      />
                    ))}
                  </Stack>
                ) : (
                  <Stack spacing={1}>
                    {group.items.map((item) => (
                      <Typography key={item} sx={{ fontSize: "0.875rem" }}>
                        {item}
                      </Typography>
                    ))}
                  </Stack>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </ShowcaseCard>

      <ShowcaseCard
        title="Pistes explorées pour une V2"
        description="Ces besoins, réels mais plus complexes à adresser (accompagnement médical, pédagogie nutritionnelle), sont volontairement laissés hors du périmètre de la V1."
      >
        <Box component="ul" sx={{ pl: 3, m: 0, listStyleType: "disc", "& li + li": { mt: 1 } }}>
          {futureFeatures.map((item) => (
            <Typography key={item} component="li" sx={{ fontSize: "0.875rem" }}>
              {item}
            </Typography>
          ))}
        </Box>
      </ShowcaseCard>

      <ShowcaseCard title="How Might We ?">
        <Stack spacing={2}>
          {hmwQuestions.map((question) => (
            <Box
              key={question}
              sx={{
                backgroundColor: "brand.problemTint",
                borderLeft: "6px solid",
                borderColor: "brand.deepGreen",
                px: 3,
                py: 2.5,
              }}
            >
              <Typography>{question}</Typography>
            </Box>
          ))}
        </Stack>
      </ShowcaseCard>

      <ShowcaseCard title="User Stories">
        <Stack spacing={2}>
          {userStories.map((story) => (
            <Box
              key={story}
              sx={{ backgroundColor: "secondary.light", borderRadius: radius.lg, px: 4, py: 3 }}
            >
              <Typography>{story}</Typography>
            </Box>
          ))}
        </Stack>
      </ShowcaseCard>
    </Stack>
  );
}

export default Definition;
