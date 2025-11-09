export const NavStyles = {
  Icon: {
    Icon: { display: { xs: "none", md: "flex" }, mr: 1 },
    IconText: {
      mr: 2,
      display: { xs: "none", md: "flex" },
      fontFamily: "monospace",
      fontWeight: 700,
      letterSpacing: ".3rem",
      color: "inherit",
      textDecoration: "none",
    },
    NoIdeaIcon: { display: { xs: "flex", md: "none" }, mr: 1 },
    NoIdeaText: {
      mr: 2,
      display: { xs: "flex", md: "none" },
      flexGrow: 1,
      fontFamily: "monospace",
      fontWeight: 700,
      letterSpacing: ".3rem",
      color: "inherit",
      textDecoration: "none",
    },
  },
  Menu: {
    MenuIcon: { flexGrow: 1, display: { xs: "flex", md: "none" } },
    Menu: { display: { xs: "block", md: "none" } },
    MenuItem: { textAlign: "center" },
  },
  Nav: {
    Container: { flexGrow: 1, display: { xs: "none", md: "flex" } },
    Item: { my: 2, color: "white", display: "block" },
  },
  ClerkSignIn: { flexGrow: 0 },
};
