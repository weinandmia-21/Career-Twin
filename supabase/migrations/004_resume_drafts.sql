alter table resume_documents
add column if not exists draft_resume_json jsonb;

alter table resume_documents
add column if not exists draft_created_at timestamptz;

alter table resume_documents
add column if not exists draft_status text
default 'none';