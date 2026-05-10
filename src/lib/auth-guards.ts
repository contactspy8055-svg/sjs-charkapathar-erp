import { redirect } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase/client";
import type { Role } from "@/lib/roles";
import { resolveRoleForUser } from "@/lib/supabase/profile";

/** Client-only guards for dashboard routes (session lives in browser storage). */
export async function ensureDashboardSession() {
  if (typeof window === "undefined") return;
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) throw redirect({ to: "/login", search: { redirect: window.location.pathname } });
}

export async function ensureDashboardRole(expected: Role) {
  if (typeof window === "undefined") return;
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) throw redirect({ to: "/login", search: { redirect: window.location.pathname } });
  const role = await resolveRoleForUser(session.user.id, session.user);
  if (role !== expected) throw redirect({ to: `/dashboard/${role}` });
}
