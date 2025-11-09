import { PromptWindow } from "../../../components/promptWindow/promptWindow.component";
import { ResultList } from "../../../components/resultList/resultList.component";
import { PromptProvider } from "../../../contexts/prompt/prompt.context";
import SupabaseProvider from "../../../contexts/supabase/supabase.context";
import "./signedInHome.css";

export const SignedInHome = () => {
  return (
    <SupabaseProvider>
      <PromptProvider>
        <div className="chat-interface">
          {/* Sidebar */}
          <ResultList />
          {/* Main Content */}
          <PromptWindow />
        </div>
      </PromptProvider>
    </SupabaseProvider>
  );
};
