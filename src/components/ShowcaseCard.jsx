// React
import React from "react";

// Librairies externes
import { Card, CardContent, Stack, Typography } from "@mui/material";

// Thème
import { radius } from "../theme";

function ShowcaseCard({ title, description, children, sx = {}, contentSx = {} }) {
  return (
    <Card sx={{ boxShadow: "0px 8px 12px rgba(149,157,165,0.2)", borderRadius: radius.lg, display: "flex", flexDirection: "column", ...sx }}>
      <CardContent sx={{ px: { xs: 2.5, md: 4 }, py: { xs: 2.5, md: 4 }, display: "flex", flexDirection: "column", flex: 1, ...contentSx }}>
        <Stack spacing={3} sx={{ flex: 1 }}>
          {(title || description) && (
            <Stack spacing={1}>
              {title && (
                <Typography variant="h2" sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}>
                  {title}
                </Typography>
              )}
              {description && <Typography>{description}</Typography>}
            </Stack>
          )}
          {children}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ShowcaseCard;
