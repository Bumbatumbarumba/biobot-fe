import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { CssBaseline, Stack } from "@mui/material";
import { SignedInHome } from "./signedInHome/signedInHome.component";
import { SignedOutHome } from "./signedOutHome/signedOutHome.component";

export const Home = () => {
  return (
    <Stack>
      <CssBaseline />
      <SignedIn>
        <SignedInHome />
      </SignedIn>
      <SignedOut>
        <SignedOutHome />
      </SignedOut>
    </Stack>
  );
};
