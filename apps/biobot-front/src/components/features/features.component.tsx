import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { BrainCircuit, Shield, Zap, Layers } from "lucide-react";
import { motion } from "framer-motion";
import "./features.css";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="feature-card">
        <CardContent sx={{ p: 4 }}>
          <Box className="feature-icon">{icon}</Box>
          <Typography variant="h5" component="h3" className="feature-title">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Features: React.FC = () => {
  const features = [
    {
      icon: <BrainCircuit size={32} />,
      title: "Advanced AI",
      description:
        "Powered by state-of-the-art language models that understand context and generate human-like responses.",
    },
    {
      icon: <Shield size={32} />,
      title: "Secure & Private",
      description:
        "Enterprise-grade security with end-to-end encryption and strict privacy controls to protect your data.",
    },
    {
      icon: <Zap size={32} />,
      title: "Lightning Fast",
      description:
        "Optimized for speed with responses generated in milliseconds, even for complex queries.",
    },
    {
      icon: <Layers size={32} />,
      title: "Customizable",
      description:
        "Tailor the AI to your specific needs with fine-tuning options and domain-specific knowledge.",
    },
  ];

  return (
    <Box id="features" className="features-section">
      <Container maxWidth="lg">
        <Stack className="features-header" gap={2} alignItems={"center"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Typography
              variant="subtitle1"
              component="p"
              className="features-badge"
            >
              POWERFUL FEATURES
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Typography variant="h2" component="h2" className="features-title">
              Why Choose DialogAI?
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
              className="features-description"
            >
              Our platform combines cutting-edge AI technology with thoughtful
              design to deliver an exceptional conversational experience.
            </Typography>
          </motion.div>
        </Stack>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={6}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={0.1 * index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
