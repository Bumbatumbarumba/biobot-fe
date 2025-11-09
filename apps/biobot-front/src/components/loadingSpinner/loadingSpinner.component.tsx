import { Stack, CircularProgress, Typography } from "@mui/material";

enum LoadingSpinnerLabels {
  Message = "This might take a moment!",
}

export const LoadingSpinner = () => {
  return (
    <Stack gap={1} alignItems={"center"}>
      <CircularProgress size={"5em"} />
      <Typography variant="caption">{LoadingSpinnerLabels.Message}</Typography>
    </Stack>
  );
};
