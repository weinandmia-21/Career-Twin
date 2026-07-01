create table resumes (

  id uuid primary key default gen_random_uuid(),

  created_at timestamptz not null default now(),

  updated_at timestamptz not null default now(),

  application_id uuid not null,

  resume jsonb not null

);

create index resumes_application_id_idx
on resumes(application_id);