export interface CitationData {
  citation: string;
  exact_sentences: string[];
}

export interface NonCitationData {
  citation: string;
  justification: string;
}

export interface ReportSection {
  title: string;
  content: string;
}

export interface Figure {
  image_url: string;
  image_caption: string;
}

export interface FullReport {
  report_title: string;
  figures: Figure[];
  report: ReportSection[];
  citations: CitationData[];
  non_citations: NonCitationData[];
}

export interface ReportResult {
  model: string;
  response_id: string;
  report: FullReport;
}

export interface ApiResponse {
  success: boolean;
  status: number;
  data?: ReportResult;
}

export enum QueryType {
  Technical = "technical",
  NonTechnical = "nonTechnical",
  CitationsOnly = "citationsOnly",
}

export interface QueryAiBody {
  user: string;
  query: string;
  includeFigures: boolean;
  queryType: QueryType;
  numberOfCitations: number;
}

export interface UseAiResponse {
  data: ApiResponse | null;
  loading: boolean;
  error: boolean;
  queryAi: (body: QueryAiBody) => Promise<void>;
}

export const DefaultQueryAiBody: QueryAiBody = {
  user: "",
  query: "",
  includeFigures: false,
  queryType: QueryType.Technical,
  numberOfCitations: 1,
};
