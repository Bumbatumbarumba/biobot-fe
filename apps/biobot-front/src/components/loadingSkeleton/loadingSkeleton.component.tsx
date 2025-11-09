import { Stack, Skeleton } from "@mui/material";

export const LoadingSkeleton = () => {
  return (
    <Stack gap={2}>
      <Skeleton variant="rounded" width={"60%"} height={60} />
      <Skeleton variant="rounded" width={"100%"} height={60} />
      <Skeleton variant="rounded" width={"100%"} height={60} />
      <Skeleton variant="rounded" width={"100%"} height={60} />
    </Stack>
  );
};
