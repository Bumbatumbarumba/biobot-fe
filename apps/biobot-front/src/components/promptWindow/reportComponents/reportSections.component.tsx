import { Stack, Typography } from "@mui/material";
import { ReportSection } from "../../../hooks/ai/useAi.definition";

interface ReportSectionProps {
  report: ReportSection[];
}

export const ReportSections = (props: ReportSectionProps) => {
  const { report } = props;

  return (
    <Stack gap={2}>
      {report?.map((section, idx) => (
        <Stack key={idx} gap={0.5}>
          <Typography variant="h5">{section.title}</Typography>
          <Typography variant="body1">{section.content}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};
