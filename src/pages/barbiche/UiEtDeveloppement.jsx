// React
import React from "react";

// Librairies externes
import { Box, Typography, Stack, Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// Composants locaux
import ShowcaseCard from "../../components/ShowcaseCard";
import ZoomableImage from "../../components/ZoomableImage";

// Thème
import { radius } from "../../theme";

// Assets locaux
import lighthouseMobile from "../../assets/barbiche/Capture d'écran 2026-03-30 175126.webp";
import lighthouseDesktop from "../../assets/barbiche/Capture d'écran 2026-03-30 175149.webp";
import breakpointsGrid from "../../assets/barbiche/Frame 82.webp";
import designTokensTable from "../../assets/barbiche/Capture d'écran 2026-08-10 164608.webp";

const breakpoints = [
  {
    label: "Desktop (1440px)",
    description: "12 colonnes, Gouttières (Gutters) de 24px, Marges de 80px. Permet un alignement aéré et « Premium ».",
  },
  {
    label: "Tablette (768px)",
    description: "Passage à 8 colonnes. Adaptation des cartes produits (2 par ligne au lieu de 4).",
  },
  {
    label: "Mobile (375px)",
    description: "4 colonnes, Marges de 16px. Navigation simplifiée avec menu « Burger » et boutons en pleine largeur pour faciliter le clic au pouce (accessibilité motrice).",
  },
];

function UiEtDeveloppement() {
  return (
    <Stack spacing={4}>
      <ShowcaseCard title="Les Gabarits Responsive & Breakpoints (Grille de Mise en Page)">
        <Stack direction={{ xs: "column", md: "row" }} spacing={4} sx={{ alignItems: "center" }}>
          <Stack spacing={2.5} sx={{ flex: 1 }}>
            {breakpoints.map((bp) => (
              <Stack key={bp.label} spacing={0.5}>
                <Typography sx={{ fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem" }}>
                  {bp.label}
                </Typography>
                <Typography sx={{ fontSize: "0.8125rem" }}>{bp.description}</Typography>
              </Stack>
            ))}
          </Stack>
          <ZoomableImage
            src={breakpointsGrid}
            alt="Aperçu des en-têtes responsive Barbiche en version desktop, tablette et mobile"
            sx={{ flex: 1, height: 320, borderRadius: radius.lg, backgroundColor: "background.default" }}
          />
        </Stack>
      </ShowcaseCard>

      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        <ShowcaseCard
          title="Design Tokens Sémantiques"
          description="Les variables sémantiques permettent de basculer instantanément d'un mode à l'autre tout en préservant le respect des contrastes d'accessibilité numérique."
          sx={{ flex: 1 }}
        >
          <ZoomableImage
            src={designTokensTable}
            alt="Tableau des design tokens de typographie : familles, tailles, poids de police par breakpoint (desktop, tablette, mobile)"
            sx={{ minHeight: 260, borderRadius: radius.lg, backgroundColor: "common.white" }}
          />
        </ShowcaseCard>

        <ShowcaseCard title="Validation des Ratios de Contraste (WCAG AAA)" sx={{ flex: 1 }}>
          <Stack spacing={2}>
            <ZoomableImage
              src={lighthouseMobile}
              alt="Rapport Lighthouse mobile : Performances 98, Accessibilité 100, Bonnes pratiques 100, SEO 100"
              sx={{ height: 180, borderRadius: radius.sm, backgroundColor: "common.white" }}
            />
            <ZoomableImage
              src={lighthouseDesktop}
              alt="Rapport Lighthouse desktop : Performances 100, Accessibilité 100, Bonnes pratiques 100, SEO 100"
              sx={{ height: 180, borderRadius: radius.sm, backgroundColor: "common.white" }}
            />
          </Stack>
          <Typography sx={{ color: "primary.dark" }}>
            Audit Lighthouse : un score d'Accessibilité de 100/100 sur mobile comme sur desktop,
            confirmant la conformité WCAG AAA de la palette de couleurs et l'inclusion des profils
            d'utilisateurs souffrant de troubles ou de déficiences visuelles.
          </Typography>
        </ShowcaseCard>
      </Stack>

      <ShowcaseCard title="L'Architecture CMS & Dynamisation du Catalogue (Webflow)">
        <Typography>
          Afin de garantir un site 100 % administrable et évolutif pour la marque, j'ai configuré
          une structure relationnelle solide reliant les bases de données dynamiques de Webflow :
        </Typography>
        <Box component="ul" sx={{ pl: 3, m: 0, listStyleType: "disc", "& li + li": { mt: 1 } }}>
          <Typography component="li">
            Collection Produits : Gère l'ensemble des fiches produits avec tarifs, visuels,
            compositions, et fiches d'utilisation.
          </Typography>
          <Typography component="li">
            Collection Catégories : Permet d'organiser les liaisons transversales dynamiques
            (Barbe, Visage, Accessoires).
          </Typography>
        </Box>
        <Typography>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            Scalabilité :
          </Typography>{" "}
          Cette structure permet à la marque d'ajouter de nouvelles références ou des nouvelles
          catégories sans avoir à modifier la structure HTML/CSS.
        </Typography>
        <Typography sx={{ fontStyle: "italic", fontSize: "0.8125rem", color: "text.secondary" }}>
          Barbiche est un site fictif réalisé dans un cadre de portfolio : certaines
          fonctionnalités (paiement, ajout au panier, favoris, diagnostic de peau etc.) ne sont donc pas
          disponibles.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          href="https://barbiche.webflow.io/"
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNewIcon fontSize="small" />}
          sx={{ alignSelf: "flex-start" }}
        >
          Voir le site Webflow
        </Button>
      </ShowcaseCard>
    </Stack>
  );
}

export default UiEtDeveloppement;
