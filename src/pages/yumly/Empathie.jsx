// React
import React from "react";

// Librairies externes
import { Box, Typography, Stack, Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// Composants locaux
import ShowcaseCard from "../../components/ShowcaseCard";
import SpecList from "../../components/SpecList";
import PersonaCarousel from "../../components/PersonaCarousel";
import ZoomableImage from "../../components/ZoomableImage";

// Thème
import { radius } from "../../theme";

// Assets locaux
import personaEmma from "../../assets/Yumly/Etudiante en résidence universaire.webp";
import personaLeo from "../../assets/Yumly/Alternant en communication.webp";
import empathyMapEmma from "../../assets/Yumly/Empathy Map - Emma.webp";
import empathyMapLeo from "../../assets/Yumly/Empathy Map - Léo.webp";
import journeyMapEmma from "../../assets/Yumly/Frame 20.webp";
import journeyMapLeo from "../../assets/Yumly/Frame 21.webp";

const interviewSteps = [
  { label: "Introduction (5 min)", value: "Présentation, explication du but de l'entretien, demande de consentement pour l'enregistrement." },
  { label: "Profil & habitudes (10 min)", value: "Situation de logement, budget courses, fréquence de cuisine, contraintes de temps et de budget." },
  { label: "Questions spécifiques (10 min)", value: "Type de cuisine, équipement, niveau perçu, accès aux aides alimentaires." },
  { label: "Outils & solutions (5 min)", value: "Applications utilisées, ce qui aiderait au quotidien, volonté d'investir du temps ou de l'argent." },
];

const keyStats = [
  { value: "1/3", label: "En insécurité alimentaire", description: "Un·e étudiant·e sur 3 est en situation d'insécurité alimentaire." },
  { value: "73%", label: "Reste à vivre < 100€", description: "Des étudiant·es qui reçoivent une aide ont moins de 100€ de reste à vivre par mois." },
  { value: "1/2", label: "Se sent peu compétent·e", description: "Un·e étudiant·e sur 2 se sent peu compétent·e en cuisine." },
];

const personas = [
  { image: personaEmma, alt: "Persona Emma Singh, étudiante en psychologie de 20 ans à Nantes" },
  { image: personaLeo, alt: "Persona Léo Malonga, alternant en communication de 22 ans en Île-de-France" },
];

function Empathie() {
  return (
    <Stack spacing={4}>
      <ShowcaseCard
        title="Comprendre le quotidien des étudiant·es et jeunes actif·ves"
        description="Pour cadrer le problème, j'ai mené des entretiens semi-directifs auprès d'étudiant·es et de jeunes actif·ves, complétés par une analyse de données existantes sur la précarité alimentaire chez les jeunes."
      >
        <SpecList items={interviewSteps} dividers />
        <Button
          variant="outlined"
          color="primary"
          href="https://docs.google.com/document/d/18LnTGsHQvYDGD23Xy4FBhvJnX7ZepktCxEOQ3pQPRyc/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNewIcon fontSize="small" />}
          aria-label="Voir le guide d'entretien complet (ouvre un nouvel onglet)"
          sx={{ alignSelf: "flex-start" }}
        >
          Voir le guide d'entretien complet
        </Button>
      </ShowcaseCard>

      <ShowcaseCard
        title="Une précarité alimentaire bien réelle chez les jeunes"
        description="La précarité alimentaire chez les étudiant·es désigne la difficulté à se nourrir correctement par manque de moyens. Les causes principales : inflation, loyers élevés, isolement, faibles revenus — pour des aides sociales encore insuffisantes ou peu accessibles."
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
          {keyStats.map((stat) => (
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

      <ShowcaseCard
        title="2 personas pour incarner les besoins des utilisateur·rices"
        description="Emma, étudiante en résidence universitaire, et Léo, alternant en communication, incarnent deux profils aux contraintes différentes mais à la frustration commune : manquer de temps, de budget ou de compétences pour bien manger."
      >
        <PersonaCarousel personas={personas} />
      </ShowcaseCard>

      <ShowcaseCard
        title="Empathy Maps : ce qu'ils disent, pensent, font et ressentent"
        description="Au-delà des faits, ces cartes d'empathie révèlent la charge mentale et la culpabilité qui accompagnent souvent l'alimentation étudiante."
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          <ZoomableImage
            src={empathyMapEmma}
            alt="Empathy Map d'Emma : dit, pense, fait et ressent face à son alimentation"
            sx={{ flex: 1, borderRadius: radius.sm }}
          />
          <ZoomableImage
            src={empathyMapLeo}
            alt="Empathy Map de Léo : dit, pense, fait et ressent face à son alimentation"
            sx={{ flex: 1, borderRadius: radius.sm }}
          />
        </Stack>
      </ShowcaseCard>

      <ShowcaseCard
        title="User Journey Maps : le parcours pas à pas"
        description="Chaque étape du parcours utilisateur est associée à une pensée et une émotion, pour identifier précisément où l'expérience doit être facilitée."
      >
        <Stack spacing={3}>
          <ZoomableImage
            src={journeyMapEmma}
            alt="User Journey Map d'Emma : actions, pensées et émotions à chaque étape"
            sx={{ width: "100%", borderRadius: radius.sm, backgroundColor: "common.white" }}
          />
          <ZoomableImage
            src={journeyMapLeo}
            alt="User Journey Map de Léo : actions, pensées et émotions à chaque étape"
            sx={{ width: "100%", borderRadius: radius.sm, backgroundColor: "common.white" }}
          />
        </Stack>
      </ShowcaseCard>
    </Stack>
  );
}

export default Empathie;
