import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase/client";
import { resolveRoleForUser } from "@/lib/supabase/profile";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: async ({ location }) => {
    if (typeof window === "undefined") return;
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) throw redirect({ to: "/login", search: { redirect: location.pathname } });
    if (location.pathname === "/dashboard") {
      const role = await resolveRoleForUser(session.user.id, session.user);
      throw redirect({ to: `/dashboard/${role}` });
    }
  },
  component: () => <Outlet />,
});
