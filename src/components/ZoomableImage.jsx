// React
import React, { useState } from "react";

// Librairies externes
import { Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

// Thème
import { radius } from "../theme";

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.5;

function ZoomableImage({ src, alt, sx = {} }) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const handleClose = () => {
    setOpen(false);
    setZoom(1);
  };

  return (
    <>
      <Box
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") setOpen(true);
        }}
        aria-label={`Agrandir l'image : ${alt}`}
        sx={{ position: "relative", cursor: "zoom-in", overflow: "hidden", ...sx }}
      >
        <Box
          component="img"
          src={src}
          alt={alt}
          sx={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
        />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            bottom: 8,
            right: 8,
            backgroundColor: "rgba(0,0,0,0.6)",
            borderRadius: "50%",
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ZoomInIcon sx={{ color: "common.white", fontSize: 20 }} />
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={false}
        slotProps={{ paper: { sx: { backgroundColor: "transparent", boxShadow: "none", overflow: "visible" } } }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 1,
            display: "flex",
            gap: 1,
          }}
        >
          <IconButton
            onClick={() => setZoom((z) => Math.max(MIN_ZOOM, z - ZOOM_STEP))}
            disabled={zoom <= MIN_ZOOM}
            aria-label="Réduire le zoom"
            sx={{
              backgroundColor: "rgba(255,255,255,0.85)",
              "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
            }}
          >
            <ZoomOutIcon />
          </IconButton>
          <IconButton
            onClick={() => setZoom((z) => Math.min(MAX_ZOOM, z + ZOOM_STEP))}
            disabled={zoom >= MAX_ZOOM}
            aria-label="Augmenter le zoom"
            sx={{
              backgroundColor: "rgba(255,255,255,0.85)",
              "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
            }}
          >
            <ZoomInIcon />
          </IconButton>
          <IconButton
            onClick={handleClose}
            aria-label="Fermer"
            sx={{
              backgroundColor: "rgba(255,255,255,0.85)",
              "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            maxWidth: "95vw",
            maxHeight: "90vh",
            overflow: "auto",
            borderRadius: radius.sm,
          }}
        >
          <Box
            sx={{
              backgroundColor: "common.white",
              display: "inline-flex",
              transform: `scale(${zoom})`,
              transformOrigin: "top left",
              transition: "transform 200ms ease",
            }}
          >
            <Box
              component="img"
              src={src}
              alt={alt}
              sx={{
                display: "block",
                width: "auto",
                height: "auto",
                maxWidth: "95vw",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

export default ZoomableImage;
