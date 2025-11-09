import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from "@mui/material";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import "./nav.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const defaultNavItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
];

interface NavProps {
  window?: () => Window;
  overrideTrigger?: boolean;
  navItems?: { name: string; href: string }[];
}

export const Nav: React.FC<NavProps> = (props) => {
  const { window, overrideTrigger, navItems } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", pt: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, mb: 2 }}>
        <IconButton edge="end" color="inherit" aria-label="close">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {(navItems ?? defaultNavItems).map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleNavClick(item.href)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 1 }}
                >
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <AppBar
      position="fixed"
      color={overrideTrigger ? "default" : trigger ? "default" : "transparent"}
      sx={{ backgroundColor: overrideTrigger ? "white" : "transparent" }}
      elevation={overrideTrigger ? 0 : trigger ? 4 : 0}
      className={`navbar ${
        overrideTrigger || trigger ? "navbar-scrolled" : ""
      }`}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", height: "100px" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: overrideTrigger || trigger ? "text.primary" : "white",
            }}
          >
            <Box sx={{ mr: 1, display: "flex" }}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                <line x1="9" y1="10" x2="15" y2="10"></line>
                <line x1="12" y1="7" x2="12" y2="13"></line>
              </svg>
            </Box>
            <Box
              component="h1"
              sx={{
                fontSize: "2rem",
                fontWeight: 600,
                m: 0,
              }}
            >
              DialogAI
            </Box>
          </Box>

          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {(navItems ?? defaultNavItems).map((item) => (
              <Button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                sx={{
                  mx: 1,
                  color: overrideTrigger || trigger ? "text.primary" : "white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                  fontSize: "1.2rem",
                }}
              >
                {item.name}
              </Button>
            ))}
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: {
                      width: "100%",
                      height: "100%",
                    },
                  },
                }}
              />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ ml: 2, fontSize: "1.2rem" }}
                >
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                color: overrideTrigger || trigger ? "text.primary" : "white",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            borderRadius: "0 0 0 16px",
          },
        }}
        anchor="right"
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};
