// React
import React from "react";

// Librairies externes
import { Box, Typography, Stack } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// Composants locaux
import ShowcaseCard from "../../components/ShowcaseCard";
import ZoomableImage from "../../components/ZoomableImage";

// Thème
import { radius } from "../../theme";

// Assets locaux
import crazy8Sheet1 from "../../assets/Yumly/craizy 8.webp";
import crazy8Sheet2 from "../../assets/Yumly/Frame 155 - cropped.webp";
import crazy8Sheet3 from "../../assets/Yumly/Frame 156.webp";
import crazy8Sheet4 from "../../assets/Yumly/Frame 157.webp";

const crazy8Sheets = [
  { image: crazy8Sheet1, alt: "Crazy 8 : écrans scan, recettes, accueil et liste de courses, annotés de votes en forme de cœur" },
  { image: crazy8Sheet2, alt: "Crazy 8 : écrans de détail recette et grilles de contenu, annotés de votes en forme de cœur" },
  { image: crazy8Sheet3, alt: "Crazy 8 : écrans vidéo tutorielle et notation, annotés de votes en forme de cœur" },
  { image: crazy8Sheet4, alt: "Crazy 8 : écrans de bienvenue, profil et défis, annotés de votes en forme de cœur" },
];

const brainstormThemes = [
  "S'inspirer d'apps existantes (Thermomix, Jow) pour générer des recettes filtrées par ustensiles et nombre de personnes, avec liste de courses automatique.",
  "Un scan des tickets de caisse ou des aliments du frigo pour identifier automatiquement les produits disponibles.",
  "Une gamification façon Yuka : plus la recette contient d'ingrédients bons pour la santé, plus l'utilisateur gagne de points et de réductions.",
  "Mettre en avant les fruits et légumes de saison, avec des indications de conservation (temps de stockage, dates de péremption).",
  "Des astuces anti-gaspillage concrètes : réutiliser les épluchures, queues de fraises, graines de courge en snacks ou infusions.",
  "Un partenariat avec les rayons \"bons plans\" des supermarchés ou des plateformes anti-gaspi (type Too Good To Go).",
];

const features = [
  {
    title: "Personnalisation & suggestions de recettes",
    items: [
      "Filtrer les recettes selon le temps de préparation, le budget, l'équipement disponible et les régimes alimentaires.",
      "Proposer des recettes selon les préférences, les restes disponibles (anti-gaspi) et les aliments de saison.",
      "Afficher pour chaque recette le coût estimé, le nombre de portions, les ustensiles requis et des astuces en cas de manque.",
      "Proposer un plan de recettes hebdomadaire ou progressif (1 semaine, 2 semaines, 1 mois).",
    ],
  },
];

const featuresV2 = [
  {
    title: "Scan & gestion des aliments à disposition",
    items: [
      "Scanner un ticket de caisse ou un aliment pour l'ajouter automatiquement à son \"frigo virtuel\".",
      "Recevoir des notifications avant péremption pour éviter le gaspillage.",
      "Générer des recettes simples et peu coûteuses en fonction du stock, avec alternatives si un ingrédient manque.",
    ],
  },
  {
    title: "Planification & batchcooking",
    items: [
      "Générer automatiquement la liste de courses à partir du menu sélectionné.",
      "Permettre de préparer des repas en avance et d'optimiser les courses selon le budget.",
    ],
  },
  {
    title: "Contenu éducatif & accompagnement",
    items: [
      "Accès à une rubrique conseils : alimentation saine, conservation des aliments, astuces anti-gaspi.",
      "Informations sur les aliments de saison à privilégier.",
      "Évaluation rapide du profil nutritionnel de l'étudiant pour personnaliser les recommandations.",
    ],
  },
];

const legend = [
  { color: "#4caf50", label: "Étape validée à l'unanimité par l'équipe" },
  { color: "#e8935a", label: "Étape qui ne faisait pas consensus, à retravailler ou écarter" },
];

const flowIntro = ["Ouvrir l'app", "Inscription", "Accueil"];

const flowBranches = ["Programme", "Liste de recettes"];

const flowOutro = "La recette";

function Ideation() {
  return (
    <Stack spacing={4}>
      <ShowcaseCard
        title="Brainwriting 6-3-5 : faire émerger le plus d'idées possible"
        description="Chaque participant·e a fait tourner ses idées sur les 2 questions HMW à travers plusieurs tables, en enrichissant à chaque tour la proposition du tour précédent. Voici les pistes qui sont revenues le plus souvent :"
      >
        <Box component="ul" sx={{ pl: 3, m: 0, listStyleType: "disc", "& li + li": { mt: 1 } }}>
          {brainstormThemes.map((item) => (
            <Typography key={item} component="li" sx={{ fontSize: "0.875rem" }}>
              {item}
            </Typography>
          ))}
        </Box>
      </ShowcaseCard>

      <ShowcaseCard
        title="Crazy 8 : sketches papier"
        description="En 8 minutes, chaque participant·e a esquissé 8 variations d'écrans clés au stylo. Les cœurs de couleur représentent les votes : chaque personne du groupe a marqué d'un cœur de sa couleur les écrans ou éléments qu'elle a préférés, pour faire émerger les concepts les plus consensuels avant de passer au prototypage."
      >
        <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
          {crazy8Sheets.map((sheet) => (
            <ZoomableImage
              key={sheet.alt}
              src={sheet.image}
              alt={sheet.alt}
              sx={{ flex: "1 1 45%", minWidth: 280, height: 260, borderRadius: radius.sm, backgroundColor: "common.white" }}
            />
          ))}
        </Stack>
      </ShowcaseCard>

      <ShowcaseCard
        title="Fonctionnalités retenues pour la V1"
        description="Une synthèse structurée et épurée des idées les plus pertinentes, centrée sur le pilier fonctionnel prioritaire."
      >
        <Stack spacing={3}>
          {features.map((feature) => (
            <Box key={feature.title} sx={{ backgroundColor: "background.default", borderRadius: radius.lg, px: 4, py: 3 }}>
              <Typography sx={{ fontWeight: 700, mb: 1.5 }}>{feature.title}</Typography>
              <Box component="ul" sx={{ pl: 3, m: 0, listStyleType: "disc", "& li + li": { mt: 1 } }}>
                {feature.items.map((item) => (
                  <Typography key={item} component="li" sx={{ fontSize: "0.875rem" }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Stack>
      </ShowcaseCard>

      <ShowcaseCard
        title="Fonctionnalités envisagées pour la V2"
        description="Les autres pistes explorées, mises de côté pour se concentrer sur l'essentiel en V1 et à approfondir dans une prochaine itération."
      >
        <Stack spacing={3}>
          {featuresV2.map((feature) => (
            <Box key={feature.title} sx={{ backgroundColor: "background.default", borderRadius: radius.lg, px: 4, py: 3 }}>
              <Typography sx={{ fontWeight: 700, mb: 1.5 }}>{feature.title}</Typography>
              <Box component="ul" sx={{ pl: 3, m: 0, listStyleType: "disc", "& li + li": { mt: 1 } }}>
                {feature.items.map((item) => (
                  <Typography key={item} component="li" sx={{ fontSize: "0.875rem" }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Stack>
      </ShowcaseCard>

      <ShowcaseCard
        title="Tester le flow avant de designer les écrans"
        description="Plusieurs parcours candidats ont été esquissés pour la même intention (ouvrir l'app, scanner ses aliments, arriver à une recette). Chaque étape a ensuite été validée collectivement en équipe :"
      >
        <Stack spacing={1.5}>
          {legend.map((item) => (
            <Stack key={item.label} direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <Box sx={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: item.color, flexShrink: 0 }} />
              <Typography sx={{ fontSize: "0.875rem" }}>{item.label}</Typography>
            </Stack>
          ))}
        </Stack>
        <Typography sx={{ fontSize: "0.875rem", color: "text.secondary" }}>
          Les étapes marquées en orange ont été reprises ou recombinées avec d'autres parcours,
          jusqu'à obtenir une version où chaque étape faisait l'unanimité : le parcours retenu ci-dessous.
        </Typography>
      </ShowcaseCard>

      <ShowcaseCard
        title="Le parcours retenu"
        description="Le flow final choisi pour la V1 : après l'accueil, l'utilisateur·rice peut arriver à une recette soit via un programme, soit via la liste de recettes."
      >
        <Stack spacing={1.5} sx={{ alignItems: "center" }}>
          {flowIntro.map((step) => (
            <React.Fragment key={step}>
              <Box sx={{ backgroundColor: "background.default", borderRadius: radius.lg, px: 3, py: 2 }}>
                <Typography sx={{ fontWeight: 700, fontSize: "0.875rem" }}>{step}</Typography>
              </Box>
              <ArrowDownwardIcon sx={{ color: "primary.main" }} />
            </React.Fragment>
          ))}

          <Box
            sx={{
              display: { xs: "flex", sm: "grid" },
              flexDirection: { xs: "column" },
              gridTemplateColumns: { sm: "1fr auto 1fr" },
              alignItems: "center",
              rowGap: 1.5,
              columnGap: 2,
            }}
          >
            {flowBranches.map((branch, index) => (
              <React.Fragment key={branch}>
                {index === 1 && (
                  <Typography sx={{ fontWeight: 700, fontSize: "0.8125rem", color: "text.secondary", justifySelf: "center" }}>
                    ou
                  </Typography>
                )}
                <Box
                  sx={{
                    justifySelf: { sm: index === 0 ? "end" : "start" },
                    backgroundColor: "secondary.light",
                    borderRadius: radius.lg,
                    px: 3,
                    py: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ fontWeight: 700, fontSize: "0.875rem" }}>{branch}</Typography>
                </Box>
              </React.Fragment>
            ))}
          </Box>

          <ArrowDownwardIcon sx={{ color: "primary.main" }} />

          <Box sx={{ backgroundColor: "background.default", borderRadius: radius.lg, px: 3, py: 2 }}>
            <Typography sx={{ fontWeight: 700, fontSize: "0.875rem" }}>{flowOutro}</Typography>
          </Box>
        </Stack>
      </ShowcaseCard>
    </Stack>
  );
}

export default Ideation;
