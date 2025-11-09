import React, { useState, useMemo, useEffect } from "react";
import { MessageSquare, MoreHorizontal, Share } from "lucide-react";
import "./promptWindow.css";
import {
  Button,
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { PromptWindowStyles } from "./promptWindow.styles";
import { PromptWindowLabels } from "./promptWindow.definitions";
import { usePrompt } from "../../contexts/prompt/prompt.context";
import { useSession } from "@clerk/clerk-react";
import { useAi } from "../../hooks/ai/useAi.hook";
import SendIcon from "@mui/icons-material/Send";
import { ErrorBox } from "../errorBox/errorBox.component";
import { LoadingSpinner } from "../loadingSpinner/loadingSpinner.component";
import { CitationInfo } from "./reportComponents/citationInfo.component";
import { NoncitationInfo } from "./reportComponents/noncitationInfo.component";
import { ReportSections } from "./reportComponents/reportSections.component";
import {
  DefaultQueryAiBody,
  QueryType,
  type FullReport,
  type QueryAiBody,
} from "../../hooks/ai/useAi.definition";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Figures } from "./reportComponents/figures.component";
import { ExportPdfButton } from "./exportPdfButton.component";

interface AiReportProps {
  reportResults: FullReport;
}

const AiReport = (props: AiReportProps) => {
  const { reportResults } = props;
  const { report, citations, non_citations, figures } = reportResults || {};

  return (
    <Stack gap={2} sx={PromptWindowStyles.Report.ReportContainer}>
      <Typography variant="h4">{reportResults?.report_title}</Typography>
      <ReportSections report={report ?? []} />
      <Divider sx={PromptWindowStyles.Report.Divider} />
      <Figures figures={figures ?? []} />
      <CitationInfo citations={citations ?? []} />
      <Divider sx={PromptWindowStyles.Report.Divider} />
      <NoncitationInfo noncitations={non_citations ?? []} />
    </Stack>
  );
};

export const PromptWindow: React.FC = () => {
  const { selectedPrompt } = usePrompt();
  const { session } = useSession();
  const { loading, error, queryAi } = useAi();
  const [queryAiBody, setQueryAiBody] =
    useState<QueryAiBody>(DefaultQueryAiBody);
  const [openControls, setOpenControls] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    // when we change our selection we reset query data
    setQueryAiBody(DefaultQueryAiBody);
  }, [selectedPrompt]);

  useEffect(() => setShowError(!!error), [error]);

  const isDisabled = useMemo(
    () => selectedPrompt !== null || loading,
    [selectedPrompt, loading]
  );
  const { report: reportResults } = selectedPrompt || {};

  const reportAvailable = useMemo(
    () =>
      !!(
        !loading &&
        !showError &&
        reportResults &&
        reportResults?.report?.length
      ),
    [loading, showError, reportResults]
  );

  const handleSubmit = async () => {
    if (!queryAiBody.query) {
      console.error("error: no text entered");
      return;
    }
    if (!session?.user.id) {
      console.error("error: no userid available from session");
      return;
    }

    await queryAi({ ...queryAiBody, user: session.user.id });
  };

  const handleUpdateQueryBody = (updates: Partial<QueryAiBody>) => {
    setQueryAiBody((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  return (
    <div className="main-content">
      {reportAvailable && (
        <div className="chat-header">
          <h1 className="chat-title">{/* to do: fix this */}</h1>
          <div className="chat-actions">
            <button className="action-button">
              <Share size={16} />
              Share
            </button>
            {reportResults &&
              reportResults.report &&
              reportResults.report.length > 0 && (
                <ExportPdfButton content={reportResults as FullReport} />
              )}
            <button className="action-button">
              <MoreHorizontal size={16} />
            </button>
          </div>
        </div>
      )}

      <div className="chat-messages">
        {!reportAvailable && (
          <div className="empty-state">
            <div className="empty-state-icon">
              <MessageSquare size={40} />
            </div>
            <h3 className="empty-state-title">Start a new conversation</h3>
            <p className="empty-state-description">
              Ask below and we will help you stay informed on the trends in
              research!
            </p>
          </div>
        )}
        {loading && !showError && <LoadingSpinner />}
        {showError && <ErrorBox />}
        {reportAvailable && reportResults && (
          <AiReport reportResults={reportResults as FullReport} />
        )}
      </div>

      <Button variant="contained" onClick={() => setOpenControls(true)}>
        <KeyboardArrowUpIcon />
      </Button>
      <Drawer
        variant="temporary"
        // elevation={-1}
        ModalProps={{
          BackdropProps: {
            sx: { backgroundColor: "transparent" }, // invisible, but still there
          },
        }}
        anchor="bottom"
        onClose={() => setOpenControls(false)}
        open={openControls}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="chat-input-container">
            <Grid
              container
              sx={{ marginLeft: "320px", padding: "0 16px" }}
              spacing={2}
            >
              <Grid
                size={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <TextField
                  value={queryAiBody.query}
                  onChange={(e) =>
                    handleUpdateQueryBody({ query: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !isDisabled) {
                      handleSubmit();
                    }
                  }}
                  label={PromptWindowLabels.TextboxDefaultText}
                  variant="outlined"
                  disabled={isDisabled}
                  sx={PromptWindowStyles.PromptTextbox}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            disabled={isDisabled}
                            onClick={handleSubmit}
                            edge="end"
                            color="primary"
                          >
                            <SendIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Grid>
              <Grid size={2}>
                <FormControlLabel
                  control={
                    <Switch
                      value={queryAiBody.includeFigures}
                      onChange={(e) => {
                        console.log(e.target.checked);
                        handleUpdateQueryBody({
                          includeFigures: e.target.checked,
                        });
                      }}
                    />
                  }
                  label="Include figures in report"
                />
              </Grid>
              <Grid size={2}>
                <TextField
                  label={"Number of citations"}
                  value={queryAiBody.numberOfCitations}
                  onChange={(e) => {
                    const raw = e.target.value;

                    // Only allow digits (empty string is okay so user can delete)
                    if (/^\d*$/.test(raw)) {
                      const num = Number(raw);

                      if (raw === "") {
                        handleUpdateQueryBody({ numberOfCitations: 0 }); // or null if preferred
                      } else if (num >= 1 && num <= 10) {
                        handleUpdateQueryBody({ numberOfCitations: num });
                      }
                    }
                  }}
                  // error={!!error}
                  helperText={showError || `Between ${1} and ${10}`}
                  slotProps={{
                    htmlInput: {
                      min: 1,
                      max: 10,
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                    },
                  }}
                />
              </Grid>
              <Grid size={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Query type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={queryAiBody.queryType}
                    label="Age"
                    onChange={(e) =>
                      handleUpdateQueryBody({ queryType: e.target.value })
                    }
                  >
                    <MenuItem value={QueryType.Technical}>
                      {QueryType.Technical}
                    </MenuItem>
                    <MenuItem value={QueryType.CitationsOnly}>
                      {QueryType.CitationsOnly}
                    </MenuItem>
                    <MenuItem value={QueryType.NonTechnical}>
                      {QueryType.NonTechnical}
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
