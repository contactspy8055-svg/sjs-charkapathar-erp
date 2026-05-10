-- Run in Supabase SQL Editor. Stores canonical role; public signup cannot create admin.

create extension if not exists "pgcrypto";

do $$ begin
  create type public.app_role as enum ('student', 'parent', 'teacher', 'admin');
exception when duplicate_object then null;
end $$;

create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  email text,
  full_name text,
  role public.app_role not null default 'student',
  class_name text,
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  r text;
  safe_role public.app_role;
begin
  r := coalesce(new.raw_user_meta_data->>'role', 'student');

  if r = 'admin' then
    raise exception 'Admin accounts cannot be registered publicly';
  end if;

  if r in ('student', 'parent', 'teacher') then
    safe_role := r::public.app_role;
  else
    safe_role := 'student'::public.app_role;
  end if;

  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    nullif(trim(coalesce(new.raw_user_meta_data->>'full_name', '')), ''),
    safe_role
  );

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
