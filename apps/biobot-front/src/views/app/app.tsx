import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "../../components/nav/nav.component";
import { Home } from "../home/home.component";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SignedIn>
          <Nav overrideTrigger={true} navItems={[]} />
        </SignedIn>
        <SignedOut>
          <Nav />
        </SignedOut>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
