create extension if not exists pgcrypto;

create table career_profiles (

  id uuid primary key default gen_random_uuid(),

  created_at timestamptz not null default now(),

  updated_at timestamptz not null default now(),

  full_name text,

  professional_title text,

  current_company text,

  years_experience integer,

  leadership_level text,

  profile jsonb not null

);