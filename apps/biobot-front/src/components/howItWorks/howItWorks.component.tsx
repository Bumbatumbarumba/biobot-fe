import React from "react";
import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import { motion } from "framer-motion";
import "./howItWorks.css";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Ask a Question",
      description:
        "Type your query in natural language, just as you would ask a human expert.",
    },
    {
      number: "02",
      title: "AI Processes",
      description:
        "Our advanced AI analyzes your question, considering context and intent.",
    },
    {
      number: "03",
      title: "Get Response",
      description:
        "Receive a detailed, accurate answer in seconds, with relevant sources.",
    },
    {
      number: "04",
      title: "Refine Results",
      description:
        "Follow up with additional questions to explore the topic in greater depth.",
    },
  ];

  return (
    <Box id="how-it-works" className="how-it-works-section">
      <Container maxWidth="lg">
        <Stack className="how-it-works-header" gap={2} alignItems={"center"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Typography
              variant="subtitle1"
              component="p"
              className="how-it-works-badge"
            >
              SIMPLE PROCESS
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Typography
              variant="h2"
              component="h2"
              className="how-it-works-title"
            >
              How DialogAI Works
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              className="how-it-works-description"
            >
              Get started in minutes with our intuitive interface and experience
              the power of conversational AI.
            </Typography>
          </motion.div>
        </Stack>

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid key={index} size={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Paper elevation={0} className="step-card">
                  <Typography variant="h2" className="step-number">
                    {step.number}
                  </Typography>
                  <Box className="step-content">
                    <Typography
                      variant="h5"
                      component="h3"
                      className="step-title"
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      className="step-description"
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
