// React
import React from "react";

// Librairies externes
import { Box, Container, Typography, Stack, Button, Divider } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box
      id="contact"
      component="section"
      aria-labelledby="contact-heading"
      sx={{ backgroundColor: "brand.darkGreen", pt: { xs: 5, md: 7 }, pb: { xs: 12, md: 7 }, textAlign: "center" }}
    >
      <Container maxWidth="sm">
        <Stack spacing={3} sx={{ alignItems: "center", color: "primary.contrastText" }}>
          <Typography id="contact-heading" variant="h2" sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}>
            Discutons-en autour d'un matcha !
          </Typography>
          <Typography>
            Vous avez un projet en tête ou souhaitez simplement échanger sur l'UX UI ?
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            href="https://www.linkedin.com/in/marionfroment/"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LinkedInIcon />}
            aria-label="Me contacter sur LinkedIn (ouvre un nouvel onglet)"
            sx={{
              backgroundColor: "secondary.light",
              color: "secondary.contrastText",
              "&:hover": { backgroundColor: "secondary.main" },
            }}
          >
            Me contacter sur LinkedIn
          </Button>

          <Divider sx={{ borderColor: "common.white", width: "100%", my: 2 }} />

          <Box component="footer">
            <Typography variant="caption" sx={{ color: "primary.light" }}>
              © {new Date().getFullYear()} Marion Froment. Tous droits réservés.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
