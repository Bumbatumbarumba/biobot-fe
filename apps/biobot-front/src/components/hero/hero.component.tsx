import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import "./hero.css";

export const Hero: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Box id="home" className="hero-section">
      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems="center">
          <Grid size={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <Stack gap={2} width={"100%"}>
                <motion.div variants={fadeIn}>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="hero-badge"
                  >
                    AI-POWERED CONVERSATIONS
                  </Typography>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Typography
                    variant="h1"
                    component="h1"
                    className="hero-title"
                  >
                    Intelligent Conversations
                    <Box component="span" className="hero-gradient-text">
                      Just Like Human
                    </Box>
                  </Typography>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Typography
                    variant="h6"
                    component="p"
                    className="hero-description"
                  >
                    Experience the future of AI communication with DialogAI. Our
                    cutting-edge platform delivers natural, intelligent
                    conversations for any use case.
                  </Typography>
                </motion.div>

                <motion.div variants={fadeIn} className="hero-buttons">
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => {
                      const element = document.querySelector("#demo");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="hero-button"
                  >
                    Try Demo
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => {
                      const element = document.querySelector("#features");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="hero-button-outlined"
                    sx={{ backgroundColor: "white" }}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>

          <Grid
            size={6}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              style={{ width: "100%", maxWidth: "500px" }}
            >
              <Paper elevation={12} className="hero-chat-preview">
                <Box className="chat-message">
                  <Typography
                    color="text.primary"
                    sx={{ mb: 1, fontWeight: 500 }}
                  >
                    How can I help you today?
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    I can answer questions, generate content, assist with
                    research, and more.
                  </Typography>
                </Box>

                <Box className="chat-message user-message">
                  <Typography sx={{ mb: 1, fontWeight: 500 }}>
                    Tell me about the latest AI advancements
                  </Typography>
                </Box>

                <Box className="chat-message">
                  <Typography
                    color="text.primary"
                    sx={{ mb: 1, fontWeight: 500 }}
                  >
                    Recent AI advancements include:
                  </Typography>
                  <Typography
                    color="text.secondary"
                    variant="body2"
                    sx={{ mb: 1 }}
                  >
                    1. Multimodal models that can process text, images, and
                    audio
                  </Typography>
                  <Typography
                    color="text.secondary"
                    variant="body2"
                    sx={{ mb: 1 }}
                  >
                    2. Improved reasoning capabilities in language models
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    3. More efficient training methods requiring fewer resources
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
