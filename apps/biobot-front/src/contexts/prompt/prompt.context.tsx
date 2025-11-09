import { createContext, useContext, useState } from "react";
import {
  type PromptProviderType,
  type QueryHistoryRowData,
} from "./prompt.definition";
import type { ReportResult } from "../../hooks/ai/useAi.definition";
import { useSupabase } from "../supabase/supabase.context";
import type { PostgrestSingleResponse } from "@supabase/supabase-js";

const PromptContext = createContext<PromptProviderType | undefined>(undefined);

export const PromptProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedPrompt, setSelectedPrompt] = useState<ReportResult | null>(
    null
  );
  const [allPrompts, setAllPrompts] = useState<ReportResult[]>([]);
  const { supabase } = useSupabase();

  const selectPrompt = (prompt?: ReportResult) => {
    setSelectedPrompt(prompt ?? null);
  };

  const fetchUsersQueries = async () => {
    if (!supabase) return;

    const result: PostgrestSingleResponse<QueryHistoryRowData[]> =
      await supabase
        ?.from("query_history")
        .select("*")
        .order("created_at", { ascending: false });
    const mappedResults = result.data?.map((data) => data.ai_response) ?? [];
    setAllPrompts(mappedResults as ReportResult[]);
  };

  return (
    <PromptContext.Provider
      value={{
        selectedPrompt,
        allPrompts,
        selectPrompt,
        fetchUsersQueries,
      }}
    >
      {children}
    </PromptContext.Provider>
  );
};

export const usePrompt = (): PromptProviderType => {
  const context = useContext(PromptContext);
  if (!context) {
    throw new Error("usePrompt must be used within an PromptProvider");
  }
  return context;
};
