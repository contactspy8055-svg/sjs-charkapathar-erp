import type { User } from "@supabase/supabase-js";
import type { Role } from "@/lib/roles";
import { isRole } from "@/lib/roles";
import { supabase } from "@/lib/supabase/client";

export type ProfileRow = {
  full_name: string | null;
  role: Role;
  class_name: string | null;
};

/** Loads `profiles` row when the table exists (RLS: user can read own row). */
export async function fetchProfileRow(userId: string): Promise<ProfileRow | null> {
  const { data, error } = await supabase.from("profiles").select("full_name, role, class_name").eq("id", userId).maybeSingle();

  if (error) {
    console.warn("[profiles]", error.message);
    return null;
  }
  if (!data || !isRole(String(data.role))) return null;
  return { ...data, role: data.role as Role };
}

/** Canonical role: database profile wins, then auth metadata, then default. */
export async function resolveRoleForUser(userId: string, user: User): Promise<Role> {
  const row = await fetchProfileRow(userId);
  if (row?.role) return row.role;
  const meta = user.user_metadata?.role;
  if (isRole(meta)) return meta;
  return "student";
}
