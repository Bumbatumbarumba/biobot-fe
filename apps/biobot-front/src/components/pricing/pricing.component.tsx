import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import "./pricing.css";

interface PricingPlanProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  recommended?: boolean;
  delay: number;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  recommended = false,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      style={{ height: "100%" }}
    >
      <Card className={`pricing-card ${recommended ? "recommended" : ""}`}>
        {recommended && <Box className="recommended-badge">RECOMMENDED</Box>}
        <CardContent className="pricing-card-content">
          <Typography variant="h5" component="h3" className="plan-title">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="plan-description"
          >
            {description}
          </Typography>

          <Box className="plan-price-container">
            <Typography variant="h3" component="div" className="plan-price">
              {price}
              {price !== "Custom" && (
                <Typography component="span" className="plan-price-period">
                  /month
                </Typography>
              )}
            </Typography>
          </Box>

          <Button
            variant={recommended ? "contained" : "outlined"}
            color="primary"
            fullWidth
            className="plan-button"
          >
            {buttonText}
          </Button>

          <List className="plan-features">
            {features.map((feature, idx) => (
              <ListItem key={idx} className="pricing-item">
                <ListItemIcon className="pricing-icon">
                  <Check size={18} />
                </ListItemIcon>
                <ListItemText
                  primary={feature}
                  primaryTypographyProps={{
                    variant: "body2",
                    color: "text.secondary",
                    className: "pricing-text",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Pricing: React.FC = () => {
  const plans = [
    {
      title: "Starter",
      price: "$29",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 1,000 messages per month",
        "Basic AI capabilities",
        "Email support",
        "1 user account",
        "API access",
      ],
      buttonText: "Get Started",
      recommended: false,
    },
    {
      title: "Professional",
      price: "$99",
      description: "Great for growing teams and businesses",
      features: [
        "Up to 10,000 messages per month",
        "Advanced AI capabilities",
        "Priority support",
        "5 user accounts",
        "Custom integrations",
        "Analytics dashboard",
      ],
      buttonText: "Start Free Trial",
      recommended: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited messages",
        "Premium AI capabilities",
        "24/7 dedicated support",
        "Unlimited user accounts",
        "Custom model training",
        "Advanced security features",
        "SLA guarantees",
      ],
      buttonText: "Contact Sales",
      recommended: false,
    },
  ];

  return (
    <Box id="pricing" className="pricing-section">
      <Container maxWidth="lg">
        <Stack className="pricing-header" gap={2} alignItems={"center"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Typography
              variant="subtitle1"
              component="p"
              className="pricing-badge"
            >
              PRICING PLANS
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Typography variant="h2" component="h2" className="pricing-title">
              Choose the Perfect Plan
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
              className="pricing-description"
            >
              Flexible pricing options designed to scale with your needs. All
              plans include a 14-day free trial with no credit card required.
            </Typography>
          </motion.div>
        </Stack>

        <Grid container spacing={4}>
          {plans.map((plan, index) => (
            <Grid size={4} key={index} sx={{ display: "flex" }}>
              <PricingPlan
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                buttonText={plan.buttonText}
                recommended={plan.recommended}
                delay={0.1 * index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
