-- Creative Minds' Forum: Community Bio-Data Schema & Media Bucket
-- Run this script once in your Supabase Dashboard -> SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.community_members (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- Step 1: Basics + Education & Work
  full_name text not null,
  nickname text,
  email text not null,
  whatsapp_number text not null,
  gender text not null,
  date_of_birth date not null,
  country text not null,
  chapter text not null check (chapter in ('LMU Chapter', 'CMF Global')),
  school_name text,
  course_department text,
  level text,
  hall text,
  room_number text,
  current_occupation text,
  hobbies text[] not null default '{}',

  -- Step 2: Creative Portfolio
  primary_discipline text not null,
  secondary_disciplines text[] not null default '{}',
  core_focus_areas text[] not null default '{}',
  short_bio text not null,
  tools_and_skills text[] not null default '{}',
  fun_fact text,
  weird_fact text,
  passion_drive text,

  -- Step 3: Links & Work Samples (Optional)
  portfolio_website text,
  social_links jsonb not null default '{}'::jsonb,
  work_sample_link text,
  work_sample_file_url text,

  -- Step 4: Community Fit & Consent
  community_expectations text[] not null default '{}',
  community_contributions text[] not null default '{}',
  feature_consent boolean not null default false,
  profile_photo_url text
);

alter table public.community_members enable row level security;

drop policy if exists "Allow public community applications" on public.community_members;
create policy "Allow public community applications"
  on public.community_members
  for insert
  to anon, authenticated
  with check (true);

-- Public storage bucket for 4:5 portrait photos and CV / work samples
insert into storage.buckets (id, name, public)
values ('community-media', 'community-media', true)
on conflict (id) do nothing;

drop policy if exists "Allow public uploads to community-media" on storage.objects;
create policy "Allow public uploads to community-media"
  on storage.objects
  for insert
  to anon, authenticated
  with check (bucket_id = 'community-media');

drop policy if exists "Allow public reads from community-media" on storage.objects;
create policy "Allow public reads from community-media"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'community-media');
