# Career Twin Architecture

## Vision

Career Twin is an AI-powered career operating system that builds a persistent professional profile from a user's resume and uses that profile to power personalized career tools.

---

# Core Architecture

Resume
↓
PDF Extraction
↓
GPT-5.5
↓
CareerTwinProfile
↓
Supabase (Source of Truth)
↓
Zustand (Client Cache)
↓
Dashboard
Job Match
Resume Tailoring
Interview Prep
Daily Missions

---

# Source of Truth

Supabase stores:

- User
- CareerTwinProfile
- Resume Versions
- Job Matches
- Applications
- Daily Missions

Zustand is only used as a client-side cache.

---

# AI Pipeline

Resume Upload
↓
extractPdfText()
↓
analyzeResume()
↓
CareerTwinProfile
↓
Persist Profile
↓
Render Dashboard

Job Match

CareerTwinProfile
+
Job Description
↓
analyzeJobMatch()
↓
Match Result

---

# Folder Structure

app/
Routes
API Routes

components/
Reusable UI

lib/

ai/
OpenAI
Schemas
Prompts
AI Services

db/
Database functions

store/
Zustand

supabase/
Supabase clients

parser/
PDF parsing

hooks/
React hooks

---

# Design Principles

One parser.

One prompt per AI task.

One API endpoint per workflow.

One source of truth.

Reusable components.

No duplicated business logic.

---

# Future Roadmap

Sprint 1
✅ Resume Upload
✅ AI Dashboard
✅ Career DNA
✅ Job Match MVP

Sprint 2
Architecture
Authentication
Persistence

Sprint 3
Resume Tailoring

Sprint 4
Interview Copilot

Sprint 5
Daily AI Coach