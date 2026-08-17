// React
import React from "react";

// Librairies externes
import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Typography, Stack, Button, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Composants locaux
import Footer from "../components/Footer";

// Thème
import { radius } from "../theme";

// Assets locaux
import portrait from "../assets/images/PXL_20251004_055511600.webp";
import zenGarden from "../assets/images/PXL_20251004_055308624.webp";
import matchaCeremony from "../assets/images/PXL_20251004_053734811.webp";
import cats from "../assets/images/mes chats.webp";

function Parcours() {
  return (
    <Box component="main">
      <Box component="section" aria-labelledby="parcours-title" sx={{ backgroundColor: "background.paper", py: 10 }}>
        <Container maxWidth="md">
          <Stack spacing={5}>
            <Button
              component={RouterLink}
              to="/"
              variant="text"
              color="primary"
              startIcon={<ArrowBackIcon fontSize="small" />}
              sx={{ alignSelf: "flex-start" }}
            >
              Retour à l'accueil
            </Button>

            <Stack direction="row" spacing={4} useFlexGap sx={{ alignItems: "center", flexWrap: "wrap" }}>
              <Stack spacing={2} sx={{ flex: "1 1 320px" }}>
                <Typography id="parcours-title" variant="h1" sx={{ fontSize: { xs: "1.75rem", sm: "2.125rem", md: "2.5rem" }, color: "brand.deepGreen" }}>
                  Qui se cache derrière le design ?
                </Typography>
                <Typography variant="h3" sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}>
                  Moi, c'est Marion.
                </Typography>
              </Stack>
              <Box
                component="img"
                src={portrait}
                alt="Marion, souriante, devant un jardin zen japonais"
                sx={{
                  width: { xs: 140, sm: 180, md: 220 },
                  height: { xs: 140, sm: 180, md: 220 },
                  objectFit: "cover",
                  objectPosition: "center 20%",
                  borderRadius: "50%",
                  border: "6px solid",
                  borderColor: "secondary.light",
                }}
              />
            </Stack>

            <Divider sx={{ borderColor: "brand.pinkBorder" }} />

            {/* De l'esthétique au digital */}
            <Stack spacing={2}>
              <Typography variant="h2" sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" }, color: "brand.deepGreen" }}>
                De l'esthétique au digital
              </Typography>
              <Typography>
                Avant de dessiner des interfaces, j'ai passé plus de dix ans dans l'univers du
                commerce et de l'esthétique — conseillère de vente, esthéticienne, formatrice,
                manager. Un métier où l'on apprend avant tout à écouter : cerner un besoin, parfois
                non-dit, pour proposer le geste ou le produit juste. Le secteur du luxe et de la
                cosmétique m'a aussi transmis un goût du beau et un souci du détail que je retrouve
                aujourd'hui dans ma pratique du design.
              </Typography>
              <Box
                sx={{
                  borderLeft: "4px solid",
                  borderColor: "brand.pinkBorder",
                  pl: 3,
                  py: 0.5,
                }}
              >
                <Typography sx={{ fontStyle: "italic", fontSize: "1.125rem", color: "brand.mauveText" }}>
                  « Je ne dessine pas pour moi, je traduis des besoins réels en solutions concrètes. »
                </Typography>
              </Box>
              <Typography>
                Une reconversion d'un an dans le développement web m'a révélé une appétence pour le
                front-end — une affinité technique qui m'aide aujourd'hui, en tant que product
                designer, à concevoir des interfaces à la fois désirables et réalisables. Je me suis
                ensuite spécialisée dans l'UX/UI, car le contact avec les utilisateur·rices et la
                recherche de leurs besoins réels sont ce qui me motive le plus dans ce métier.
              </Typography>
            </Stack>

            <Divider sx={{ borderColor: "brand.pinkBorder" }} />

            {/* Ma manière de travailler */}
            <Stack spacing={2}>
              <Typography variant="h2" sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" }, color: "brand.deepGreen" }}>
                Ma manière de travailler
              </Typography>
              <Typography>
                Cette écoute, ce n'est pas qu'un argument de CV : c'est ce qu'on me renvoie le plus
                souvent — empathique, à l'écoute, facilement accessible, apportant de la bonne
                humeur, professionnelle et de confiance. Elle se traduit très concrètement dans la
                façon dont je mène un projet.
              </Typography>
              <Typography>
                En échangeant avec une collègue de travail, elle s'est confiée à moi : elle n'était
                jamais très à l'aise à l'oral et aimerait travailler dessus. Je l'ai donc accompagnée
                dans ce sens en pratiquant avec elle sa présentation, pour l'aider à prendre
                confiance en elle et lui retirer les freins qu'elle pouvait se mettre seule. Je lui
                ai dit que si elle avait le moindre souci le jour de la présentation, je serais là
                pour elle.
              </Typography>
              <Box
                sx={{
                  borderLeft: "4px solid",
                  borderColor: "brand.pinkBorder",
                  pl: 3,
                  py: 0.5,
                }}
              >
                <Typography sx={{ fontStyle: "italic", fontSize: "1.125rem", color: "brand.mauveText" }}>
                  « Savoir qu'elle avait ce filet lui a suffi : elle a mené l'atelier sans
                  difficulté, et m'a remerciée de lui avoir donné la possibilité d'agir sans
                  stress. »
                </Typography>
              </Box>
              <Typography>
                Cette même attention, je la porte aussi aux utilisateur·rices qu'on ne voit jamais :
                je me suis battue pour l'accessibilité sur un projet où les contrastes de couleur
                comme la navigation au clavier n'avaient jamais été pensés — deux sujets que je
                considère non négociables, même quand ils ne sont pas demandés.
              </Typography>
            </Stack>

            <Divider sx={{ borderColor: "brand.pinkBorder" }} />

            {/* Ce qui m'inspire */}
            <Stack direction="row" spacing={4} useFlexGap sx={{ flexWrap: "wrap", alignItems: "center" }}>
              <Stack spacing={1} sx={{ flex: "1 1 320px" }}>
                <Box
                  component="img"
                  src={zenGarden}
                  alt="Jardin zen japonais, arbres et bassin, photographié lors d'un voyage au Japon"
                  sx={{ width: "100%", height: 260, objectFit: "cover", borderRadius: radius.lg }}
                />
                <Typography variant="caption" sx={{ color: "text.secondary", textAlign: "center" }}>
                  Photo prise lors de mon voyage au Japon en octobre 2025
                </Typography>
              </Stack>
              <Stack spacing={2} sx={{ flex: "1 1 320px" }}>
                <Typography variant="h2" sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" }, color: "brand.deepGreen" }}>
                  Ce qui m'inspire
                </Typography>
                <Typography>
                  Ce souci du détail et de ce qui ne se voit pas au premier regard, je le retrouve
                  dans le minimalisme japonais : l'art de s'abstenir du superflu pour laisser
                  l'essentiel s'exprimer. J'aime la culture nippone pour sa philosophie autant que
                  pour son goût de l'esthétique pure et naturelle.
                </Typography>
              </Stack>
            </Stack>

            <Divider sx={{ borderColor: "brand.pinkBorder" }} />

            {/* En dehors du travail */}
            <Stack spacing={4}>
              <Typography variant="h2" sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" }, color: "brand.deepGreen" }}>
                En dehors du travail
              </Typography>

              <Stack direction="row" spacing={4} useFlexGap sx={{ flexWrap: "wrap", alignItems: "center" }}>
                <Stack spacing={2} sx={{ flex: "1 1 320px" }}>
                  <Typography>
                    Ne déplaise à certain·es, j'adore le matcha : un rituel quotidien, matin et
                    parfois après-midi, en latte ou en cérémonie. Lors d'un voyage
                    au Japon, j'ai pu en déguster un de grande qualité dans une maison de thé avec
                    vue sur des jardins zen, un moment mémorable. J'espère qu'un prochain voyage me
                    permettra de vivre la véritable cérémonie du thé.
                  </Typography>
                </Stack>
                <Stack spacing={1} sx={{ flex: "1 1 280px" }}>
                  <Box
                    component="img"
                    src={matchaCeremony}
                    alt="Cérémonie du matcha dans une maison de thé au Japon, bol de matcha et wagashi"
                    sx={{ width: "100%", height: 260, objectFit: "cover", borderRadius: radius.lg }}
                  />
                  <Typography variant="caption" sx={{ color: "text.secondary", textAlign: "center" }}>
                    Photo prise lors de mon voyage au Japon en octobre 2025
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction="row" spacing={4} useFlexGap sx={{ flexWrap: "wrap", alignItems: "center" }}>
                <Stack spacing={1} sx={{ flex: "1 1 280px" }}>
                  <Box
                    component="img"
                    src={cats}
                    alt="Les deux chats de Marion, assis côte à côte"
                    sx={{ width: "100%", height: 260, objectFit: "cover", borderRadius: radius.lg }}
                  />
                  <Typography variant="caption" sx={{ color: "text.secondary", textAlign: "center" }}>
                    À gauche Kuma et à droite Krokmou
                  </Typography>
                </Stack>
                <Stack spacing={2} sx={{ flex: "1 1 320px" }}>
                  <Typography>
                    Ce goût pour prendre le temps, je le retrouve aussi dans mes loisirs : entre
                    deux webtoons, romans, séries ou sessions de jeux vidéo, j'aime particulièrement
                    me poser devant un puzzle. Il y a une vraie satisfaction à poser la dernière
                    pièce et à voir enfin l'œuvre dans son ensemble — un peu comme un projet de
                    design qui prend forme. Et pour finir sur une note plus câline : j'ai deux
                    chats, et j'adore les félins en général. Et pour la team chien, rassurez-vous :
                    j'aimerais beaucoup avoir un samoyède ou un eurasier,
                    deux races que je trouve adorables — les gros chiens tout poilus, c'est vraiment
                    ce que je préfère. Bon, même s'ils sont petits, coucou les spitz.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            <Box
              sx={{
                backgroundColor: "brand.problemTint",
                borderLeft: "6px solid",
                borderColor: "brand.deepGreen",
                borderRadius: radius.sm,
                px: 3,
                py: 2.5,
              }}
            >
              <Typography>
                Envie d'échanger sur un projet, l'UX, ou tout simplement autour d'un bon matcha ?
                N'hésitez pas à me contacter.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default Parcours;
