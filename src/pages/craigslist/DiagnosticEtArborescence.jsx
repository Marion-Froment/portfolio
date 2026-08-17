// React
import React from "react";

// Librairies externes
import { Box, Typography, Stack, Chip } from "@mui/material";

// Composants locaux
import ShowcaseCard from "../../components/ShowcaseCard";

const tags = ["À vendre", "Services", "Immobilier", "Emploi", "Forum"];

function DiagnosticEtArborescence() {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 4, md: 7 }} sx={{ alignItems: "flex-start" }}>
      <Stack spacing={3} sx={{ flex: 1, py: 3 }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}>
          Le "Bordel" de Craigslist de 1995
        </Typography>
        <Typography>
          Craigslist est l'un des sites les plus populaires des États-Unis, mais sa page d'accueil
          est restée inchangée depuis plus de 30 ans. Elle souffre de graves lacunes
          d'utilisabilité :
        </Typography>
        <Box component="ul" sx={{ pl: 3, m: 0, listStyleType: "disc", "& li + li": { mt: 1 } }}>
          <Typography component="li">
            <Typography component="span" sx={{ fontWeight: 700 }}>
              Surcharge cognitive extrême
            </Typography>{" "}
            : Plus de 150 liens bleus soulignés disposés de manière désorganisée sur un seul et
            unique écran.
          </Typography>
          <Typography component="li">
            <Typography component="span" sx={{ fontWeight: 700 }}>
              Absence de hiérarchie visuelle
            </Typography>{" "}
            : Aucun contraste de forme ni de taille ne permet de guider l'œil de l'utilisateur.
          </Typography>
          <Typography component="li">
            <Typography component="span" sx={{ fontWeight: 700 }}>
              Non-responsive
            </Typography>{" "}
            : Un cauchemar sur mobile exigeant des zooms manuels permanents pour cliquer sur les
            infimes liens textuels.
          </Typography>
        </Box>
        <Typography>
          Pour mon travail de refonte sur Figma, j'ai mené un tri de cartes pour restructurer la
          navigation et épurer drastiquement l'architecture de l'information.
        </Typography>
      </Stack>

      <ShowcaseCard
        title="Nouvelle arborescence"
        description="Regroupement sémantique de la surcharge textuelle historique en 5 grands univers d'accès fluide"
        sx={{ flex: 1 }}
        contentSx={{ py: 3 }}
      >
        <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: "wrap" }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                backgroundColor: "primary.light",
                color: "brand.darkGreen",
                textTransform: "uppercase",
                fontSize: "0.75rem",
              }}
            />
          ))}
        </Stack>
      </ShowcaseCard>
    </Stack>
  );
}

export default DiagnosticEtArborescence;
