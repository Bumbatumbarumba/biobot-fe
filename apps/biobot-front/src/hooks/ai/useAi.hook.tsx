import { useState } from "react";
import {
  ApiResponse,
  type QueryAiBody,
  type UseAiResponse,
} from "./useAi.definition";
import { usePrompt } from "../../contexts/prompt/prompt.context";

import { useAuth } from "@clerk/clerk-react";

export const useAi = (): UseAiResponse => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { selectPrompt, fetchUsersQueries } = usePrompt();
  const { getToken } = useAuth();

  const queryAi = async (body: QueryAiBody) => {
    setLoading(true);
    setError(false);

    const token = await getToken();

    console.log("======= sending data:", body, token);
    await fetch(`${import.meta.env.VITE_BIOBOT_API_URL}query/submit/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json() as Promise<ApiResponse>)
      .then((apiResponse) => {
        console.log("======= received data:", apiResponse);
        setData(apiResponse);
        selectPrompt(apiResponse?.data);

        if (apiResponse?.data) {
          console.log("======= fetching users queries");
          fetchUsersQueries();
        }
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });

    setLoading(false);
  };

  return { data, loading, error, queryAi };
};
