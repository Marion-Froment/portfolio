// React
import React, { useState } from "react";

// Librairies externes
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Stack,
  Chip,
  Button,
  Divider,
  Breadcrumbs,
  Link,
  Tabs,
  Tab,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Composants locaux
import Footer from "./Footer";

function ProjectPage({ idPrefix, breadcrumbLabel, chipLabel, title, intro, meta, mockup, tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  const ActivePanel = tabs[activeTab].Panel;

  return (
    <Box component="main">
      <Box component="section" aria-labelledby={`${idPrefix}-title`} sx={{ backgroundColor: "background.paper", py: { xs: 5, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack spacing={{ xs: 3, md: 4 }}>
            <Breadcrumbs separator=">" aria-label="Fil d'Ariane" sx={{ fontSize: "0.875rem" }}>
              <Link component={RouterLink} to="/#projets" underline="hover" color="inherit">
                Projets
              </Link>
              <Typography aria-current="page" sx={{ fontSize: "0.875rem", fontWeight: 700 }}>
                {breadcrumbLabel}
              </Typography>
            </Breadcrumbs>

            <Button
              component={RouterLink}
              to="/#projets"
              variant="text"
              color="primary"
              startIcon={<ArrowBackIcon fontSize="small" />}
              sx={{ alignSelf: "flex-start" }}
            >
              Retour au projet
            </Button>

            <Chip
              label={chipLabel}
              size="small"
              sx={{
                alignSelf: "flex-start",
                backgroundColor: "primary.light",
                color: "brand.darkGreen",
                textTransform: "uppercase",
                fontSize: "0.75rem",
              }}
            />

            <Typography id={`${idPrefix}-title`} variant="h1" sx={{ fontSize: { xs: "1.75rem", sm: "2.125rem", md: "2.5rem" }, color: "brand.deepGreen" }}>
              {title}
            </Typography>

            <Box
              sx={{
                backgroundColor: "brand.problemTint",
                borderLeft: "6px solid",
                borderColor: "brand.deepGreen",
                px: 3,
                py: 2.5,
              }}
            >
              <Typography>{intro}</Typography>
            </Box>

            <Divider sx={{ borderColor: "brand.pinkBorder" }} />
            <Stack direction="row" spacing={4} useFlexGap sx={{ flexWrap: "wrap", py: 1 }}>
              {meta.map((item) => (
                <Stack key={item.label} spacing={1} sx={{ minWidth: 200, flex: "1 1 200px" }}>
                  <Typography sx={{ fontWeight: 700, textTransform: "uppercase" }}>
                    {item.label}
                  </Typography>
                  <Typography>{item.value}</Typography>
                </Stack>
              ))}
            </Stack>
            <Divider sx={{ borderColor: "brand.pinkBorder" }} />

            {mockup}

            <Tabs
              value={activeTab}
              onChange={(event, newValue) => setActiveTab(newValue)}
              indicatorColor="primary"
              textColor="inherit"
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{
                width: "100%",
                "& .MuiTabScrollButton-root": {
                  "&.Mui-disabled": { opacity: 0.3 },
                },
              }}
            >
              {tabs.map((tab, index) => (
                <Tab
                  key={tab.label}
                  label={`${index + 1}. ${tab.label}`}
                  id={`${idPrefix}-tab-${index}`}
                  aria-controls={`${idPrefix}-tabpanel-${index}`}
                  sx={{ textTransform: "none", fontSize: { xs: "0.8125rem", md: "1rem" } }}
                />
              ))}
            </Tabs>

            <Box
              role="tabpanel"
              id={`${idPrefix}-tabpanel-${activeTab}`}
              aria-labelledby={`${idPrefix}-tab-${activeTab}`}
            >
              <ActivePanel />
            </Box>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default ProjectPage;
