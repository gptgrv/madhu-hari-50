create extension if not exists pgcrypto;

create table if not exists public.wishes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  message text not null,
  media_url text,
  media_path text,
  media_type text,
  timestamp timestamptz not null default now(),
  approved boolean not null default true
);

create index if not exists wishes_timestamp_idx
  on public.wishes (timestamp desc);

create index if not exists wishes_approved_timestamp_idx
  on public.wishes (approved, timestamp desc);

insert into storage.buckets (id, name, public)
values ('wall-of-love-media', 'wall-of-love-media', true)
on conflict (id) do nothing;
