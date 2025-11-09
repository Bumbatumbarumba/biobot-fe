import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  List,
  ListItem,
  IconButton,
  useTheme,
  Divider,
  alpha,
} from "@mui/material";
import {
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  MessageSquare,
} from "lucide-react";

export const Footer: React.FC = () => {
  const theme = useTheme();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "Demo", href: "#demo" },
        { name: "Roadmap", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Support", href: "#" },
        { name: "Status", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.background.default,
        borderTop: `1px solid ${theme.palette.divider}`,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  mr: 1,
                  display: "flex",
                  color: theme.palette.primary.main,
                }}
              >
                <MessageSquare size={28} />
              </Box>
              <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
                DialogAI
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3, maxWidth: 350 }}
            >
              DialogAI delivers intelligent conversational experiences powered
              by cutting-edge AI technology. We make it easy for businesses and
              developers to create engaging, natural interactions.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  sx={{
                    color: theme.palette.text.secondary,
                    "&:hover": {
                      color: theme.palette.primary.main,
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {footerLinks.map((column, index) => (
            <Grid size={4} key={index}>
              <Typography
                variant="subtitle1"
                component="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: theme.palette.text.primary,
                }}
              >
                {column.title}
              </Typography>
              <List disablePadding>
                {column.links.map((link, linkIndex) => (
                  <ListItem key={linkIndex} disablePadding sx={{ mb: 1 }}>
                    <Link
                      href={link.href}
                      underline="none"
                      color="text.secondary"
                      sx={{
                        "&:hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      <Typography variant="body2">{link.name}</Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}

          <Grid size={4}>
            <Typography
              variant="subtitle1"
              component="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: theme.palette.text.primary,
              }}
            >
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              info@dialogai.com
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              +1 (555) 123-4567
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 AI Boulevard
              <br />
              San Francisco, CA 94103
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} DialogAI. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link href="#" underline="none" color="text.secondary">
              <Typography variant="body2">Privacy Policy</Typography>
            </Link>
            <Link href="#" underline="none" color="text.secondary">
              <Typography variant="body2">Terms of Service</Typography>
            </Link>
            <Link href="#" underline="none" color="text.secondary">
              <Typography variant="body2">Cookie Policy</Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
