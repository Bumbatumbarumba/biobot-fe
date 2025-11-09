import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { usePrompt } from "../../contexts/prompt/prompt.context";
import { useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { LoadingSkeleton } from "../loadingSkeleton/loadingSkeleton.component";
import type { ReportResult } from "../../hooks/ai/useAi.definition";
import { ResultListStyles } from "./resultList.styles";
import { ResultListLabels } from "./resultList.definitions";
import { MessageSquare } from "lucide-react";
import "./resultList.css";

export const ResultList = () => {
  const { allPrompts, selectPrompt, fetchUsersQueries } = usePrompt();
  const [activePromptId, setActivePromptId] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsersQueries();
  }, []);

  const handleSelectPromptClick = (prompt: ReportResult) => {
    selectPrompt(prompt);
    setActivePromptId(prompt.response_id);
  };

  const handleNewPromptClick = () => {
    selectPrompt();
    setActivePromptId("");
  };

  return loading ? (
    <LoadingSkeleton />
  ) : (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">
          <MessageSquare size={24} />
          Chat History
        </h2>
        <Button
          className="new-chat-button"
          variant="contained"
          endIcon={<AddCircleOutlineIcon />}
          onClick={handleNewPromptClick}
        >
          {ResultListLabels.NewPromptButtonText}
        </Button>
      </div>

      <List className="prompts-list">
        {allPrompts.map((prompt, idx) => (
          <ListItem
            sx={{
              ...ResultListStyles.PromptItem,
              backgroundColor:
                activePromptId === prompt.response_id ? "lightblue" : "",
            }}
            key={prompt.response_id + idx}
            onClick={() => handleSelectPromptClick(prompt)}
            className={`prompt-item ${
              activePromptId === prompt.response_id ? "active" : ""
            }`}
          >
            <ListItemText
              className="prompt-title"
              primary={
                <Typography variant="body1" noWrap>
                  {prompt.report.report_title}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
