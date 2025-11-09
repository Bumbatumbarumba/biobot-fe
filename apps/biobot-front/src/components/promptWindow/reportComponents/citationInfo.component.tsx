import { Stack, Link, Typography } from "@mui/material";
import type { CitationData } from "../../../hooks/ai/useAi.definition";

interface CitationInfoProps {
  citations: CitationData[];
}

export const CitationInfo = (props: CitationInfoProps) => {
  const { citations } = props;

  return (
    <Stack gap={2} alignSelf={"start"}>
      <Typography variant="h5">Citations</Typography>
      {citations?.map((citation, idx) => (
        <Link
          key={idx}
          href={`${import.meta.env.VITE_PUBMED_URL}${citation.citation}`}
          variant="body1"
          target="_blank"
        >
          {citation.citation}
        </Link>
      ))}
    </Stack>
  );
};
