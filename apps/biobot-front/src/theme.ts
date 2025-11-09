import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2563EB",
      light: "#60A5FA",
      dark: "#1E40AF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#7C3AED",
      light: "#A78BFA",
      dark: "#5B21B6",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#EF4444",
      light: "#FCA5A5",
      dark: "#B91C1C",
    },
    warning: {
      main: "#F59E0B",
      light: "#FCD34D",
      dark: "#B45309",
    },
    info: {
      main: "#3B82F6",
      light: "#93C5FD",
      dark: "#1D4ED8",
    },
    success: {
      main: "#10B981",
      light: "#6EE7B7",
      dark: "#047857",
    },
    text: {
      primary: "#1F2937",
      secondary: "#4B5563",
      disabled: "#9CA3AF",
    },
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 700,
      fontSize: "4.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: 1.2,
      letterSpacing: "0em",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.75rem",
      lineHeight: 1.2,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.2,
      letterSpacing: "0em",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.2,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.5,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.5,
      letterSpacing: "0.01071em",
    },
    button: {
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(0, 0, 0, 0.05)",
    "0px 4px 6px rgba(0, 0, 0, 0.05)",
    "0px 6px 8px rgba(0, 0, 0, 0.05)",
    "0px 8px 12px rgba(0, 0, 0, 0.05)",
    "0px 12px 16px rgba(0, 0, 0, 0.05)",
    "0px 16px 24px rgba(0, 0, 0, 0.05)",
    "0px 20px 28px rgba(0, 0, 0, 0.05)",
    "0px 24px 32px rgba(0, 0, 0, 0.05)",
    "0px 28px 36px rgba(0, 0, 0, 0.05)",
    "0px 32px 40px rgba(0, 0, 0, 0.05)",
    "0px 36px 44px rgba(0, 0, 0, 0.05)",
    "0px 40px 48px rgba(0, 0, 0, 0.05)",
    "0px 44px 52px rgba(0, 0, 0, 0.05)",
    "0px 48px 56px rgba(0, 0, 0, 0.05)",
    "0px 52px 60px rgba(0, 0, 0, 0.05)",
    "0px 56px 64px rgba(0, 0, 0, 0.05)",
    "0px 60px 68px rgba(0, 0, 0, 0.05)",
    "0px 64px 72px rgba(0, 0, 0, 0.05)",
    "0px 68px 76px rgba(0, 0, 0, 0.05)",
    "0px 72px 80px rgba(0, 0, 0, 0.05)",
    "0px 76px 84px rgba(0, 0, 0, 0.05)",
    "0px 80px 88px rgba(0, 0, 0, 0.05)",
    "0px 84px 92px rgba(0, 0, 0, 0.05)",
    "0px 88px 96px rgba(0, 0, 0, 0.05)", // Added shadow
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 20px",
          fontWeight: 600,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          },
        },
        containedPrimary: {
          background: "linear-gradient(90deg, #2563EB 0%, #3B82F6 100%)",
          "&:hover": {
            background: "linear-gradient(90deg, #1D4ED8 0%, #2563EB 100%)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          overflow: "hidden",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
          backdropFilter: "blur(10px)",
        },
      },
    },
  },
});

export default theme;
