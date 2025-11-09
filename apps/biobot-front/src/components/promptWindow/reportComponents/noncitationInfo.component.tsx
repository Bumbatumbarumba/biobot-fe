import { Link, Stack, Typography } from "@mui/material";
import type { NonCitationData } from "../../../hooks/ai/useAi.definition";

interface NoncitationInfoProps {
  noncitations: NonCitationData[];
}

const NonCitationStyles = {
  UnusedCitationsTitle: { paddingBottom: "0.5em" },
  NoUnusedCitations: { fontStyle: "italic" },
};

enum NoncitationLabels {
  UnusedCitationsTitle = "Unused Citations",
  NoUnusedCitations = "No unused citations",
}

export const NoncitationInfo = (props: NoncitationInfoProps) => {
  const { noncitations } = props;

  return (
    <Stack alignSelf={"start"}>
      <Typography variant="h5" sx={NonCitationStyles.UnusedCitationsTitle}>
        {NoncitationLabels.UnusedCitationsTitle}
      </Typography>
      {!noncitations.length ? (
        <Typography variant="body1" sx={NonCitationStyles.NoUnusedCitations}>
          {NoncitationLabels.NoUnusedCitations}
        </Typography>
      ) : (
        <Stack gap={2}>
          {noncitations.map((noncitation, idx) => (
            <Typography key={idx} variant="body1">
              <Link
                href={`${import.meta.env.VITE_PUBMED_URL}${
                  noncitation.citation
                }`}
                variant="body1"
                target="_blank"
              >
                {noncitation.citation}
              </Link>
              : {noncitation.justification}
            </Typography>
          ))}
        </Stack>
      )}
    </Stack>
  );
};
