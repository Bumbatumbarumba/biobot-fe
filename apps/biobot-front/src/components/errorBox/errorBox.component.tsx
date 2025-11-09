import { Box, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { ErrorBoxStyles } from "./errorBox.styles";
import { ErrorBoxLabels } from "./errorBox.definitions";

interface ErrorBoxProps {
  message?: string;
}

export const ErrorBox = ({ message }: ErrorBoxProps) => {
  return (
    <Box p={3} sx={ErrorBoxStyles.Container}>
      <ErrorOutlineIcon color="error" fontSize="large" />
      <Typography variant="body1" mt={2}>
        {message || ErrorBoxLabels.DefaultErrorMessage}
      </Typography>
    </Box>
  );
};
