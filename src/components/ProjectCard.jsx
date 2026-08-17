// React
import React from "react";

// Librairies externes
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Stack, Chip, Button, Card, CardMedia, CardContent, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Thème
import { radius } from "../theme";

function ProjectCard({ project }) {
  return (
    <Card
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "0.75fr 1fr" },
        borderRadius: radius.xl,
        boxShadow: "0px 13px 27px -5px rgba(50,50,93,0.25), 0px 8px 16px -8px rgba(0,0,0,0.3)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 280, md: 480 },
          backgroundColor: project.imageBg || "transparent",
        }}
      >
        <CardMedia
          component="img"
          image={project.image}
          alt={project.imageAlt}
          sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: project.imageFit || "cover" }}
        />
      </Box>

      <CardContent sx={{ px: { xs: 3, md: 7 }, py: 4, "&:last-child": { pb: 4 } }}>
        <Stack spacing={2.5} sx={{ height: "100%", justifyContent: "space-between" }}>
          <Typography
            sx={{ color: "brand.deepGreen", fontSize: { xs: "1.125rem", md: "1.5rem" }, fontWeight: 500, textTransform: "uppercase" }}
          >
            {project.eyebrow}
          </Typography>

          <Typography variant="h3" sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}>
            {project.title}
          </Typography>

          <Box
            sx={{
              backgroundColor: "secondary.light",
              borderLeft: "6px solid",
              borderColor: "primary.main",
              px: 3,
              py: 2.5,
            }}
          >
            <Typography sx={{ color: "text.primary" }}>{project.problem}</Typography>
          </Box>

          <Typography sx={{ color: "text.secondary" }}>{project.description}</Typography>

          <Divider sx={{ borderColor: "background.default", borderBottomWidth: "2px", width: "100%" }} />

          <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                }}
              />
            ))}
          </Stack>

          <Button
            {...(project.link.startsWith("/")
              ? { component: RouterLink, to: project.link }
              : { href: project.link })}
            variant="text"
            color="primary"
            endIcon={<ArrowForwardIcon fontSize="small" />}
            sx={{ alignSelf: "flex-start" }}
          >
            Consulter le projet
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
