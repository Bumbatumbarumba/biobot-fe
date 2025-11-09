import type { ReportResult } from "../../hooks/ai/useAi.definition";

export interface PromptProviderType {
  selectedPrompt: ReportResult | null;
  allPrompts: ReportResult[];
  selectPrompt: (prompt?: ReportResult) => void;
  fetchUsersQueries: () => Promise<void>;
}

export interface QueryHistoryRowData {
  ai_response: ReportResult;
  created_at: string;
  id: number;
  open_ai_id: string;
  query: string;
  user_id: string;
}
