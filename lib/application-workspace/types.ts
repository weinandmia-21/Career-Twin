export interface WorkspaceApplication {
  id: string;
  company: string;
  role: string;
  status: string;
  matchScore: number;
  location?: string;
  updatedAt: string;
  notes?: string;
}

export interface ResumeVersion {
  id: string;
  title: string;
  score: number;
  createdAt: string;
}

export interface BriefingItem {
  id: string;
  message: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
}