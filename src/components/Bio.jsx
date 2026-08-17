// React
import React from "react";

// Librairies externes
import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Typography, Stack, Chip, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const chipRows = [
  {
    backgroundColor: "secondary.main",
    items: ["Design Systems", "Prototypage Hi-Fi (Figma)", "Responsive Design", "Micro-interactions"],
  },
  {
    backgroundColor: "primary.light",
    items: ["Intégration Webflow", "Accessibilité (WCAG)", "React JS", "HTML CSS"],
  },
  {
    backgroundColor: "background.default",
    items: ["Design Thinking", "User Research", "Architecture de l'info", "Tests utilisateurs (Clarity)"],
  },
];

function Bio() {
  return (
    <Box
      id="parcours"
      component="section"
      aria-labelledby="parcours-heading"
      sx={{ backgroundColor: "primary.main", py: { xs: 6, md: 12 } }}
    >
      <Container maxWidth="md">
        <Stack spacing={3} sx={{ color: "primary.contrastText", mb: 6 }}>
          <Typography id="parcours-heading" variant="h2" sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}>
            Qui se cache derrière le design ?
          </Typography>
          <Typography variant="h3" sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}>
            Moi, c'est Marion.
          </Typography>
          <Typography>
            Avant de dessiner des interfaces, j'ai passé plus de dix ans dans l'univers du
            commerce et de l'esthétique — conseillère, esthéticienne, formatrice, manager. Un
            métier où l'on apprend avant tout à écouter : cerner un besoin, parfois non-dit, pour
            proposer le geste juste.
          </Typography>
          <Typography>
            Une reconversion d'un an dans le développement web m'a révélé une appétence pour le
            front-end — une affinité technique qui m'aide aujourd'hui, en tant que product
            designer, à concevoir des interfaces à la fois désirables et réalisables. Je me suis
            ensuite spécialisée dans l'UX/UI, car le contact avec les utilisateur·rices et la
            recherche de leurs besoins réels sont ce qui me motive le plus dans ce métier.
          </Typography>
          <Typography>
            Ma philosophie de conception s'inspire du minimalisme japonais — l'art de s'abstenir
            de l'accessoire pour laisser l'essentiel s'exprimer — avec deux exigences non
            négociables : l'accessibilité universelle et la performance technique.
          </Typography>
          <Button
            component={RouterLink}
            to="/parcours"
            variant="contained"
            color="secondary"
            endIcon={<ArrowForwardIcon fontSize="small" />}
            sx={{
              alignSelf: "flex-start",
              mt: 1,
              backgroundColor: "secondary.light",
              color: "secondary.contrastText",
              "&:hover": { backgroundColor: "secondary.main" },
            }}
          >
            Découvrir mon parcours en détail
          </Button>
        </Stack>

        <Stack spacing={1.5}>
          {chipRows.map((row) => (
            <Stack
              key={row.backgroundColor}
              direction="row"
              spacing={1.5}
              useFlexGap
              sx={{ flexWrap: "wrap" }}
            >
              {row.items.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  size="small"
                  sx={{
                    backgroundColor: row.backgroundColor,
                    color: "text.primary",
                    textTransform: "uppercase",
                    fontSize: "0.75rem",
                  }}
                />
              ))}
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Bio;
