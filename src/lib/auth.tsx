import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";
import { fetchProfileRow } from "@/lib/supabase/profile";
import { isRole, type Role, type SignupRole } from "@/lib/roles";

export type { Role, SignupRole } from "@/lib/roles";

export interface MockUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  className?: string;
  avatar?: string;
}

interface AuthCtx {
  user: MockUser | null;
  login: (email: string, password: string) => Promise<{ error?: string; role: Role }>;
  signUp: (
    email: string,
    password: string,
    fullName: string,
    role: SignupRole,
  ) => Promise<{ error?: string; needsEmailConfirmation?: boolean; role?: Role }>;
  logout: () => Promise<void>;
  isReady: boolean;
}

const Ctx = createContext<AuthCtx | null>(null);

const demoNames: Record<Role, string> = {
  student: "Aarav Kumar",
  parent: "Mr. Rakesh Kumar",
  teacher: "Sr. Anita D'Souza",
  admin: "Principal Office",
};

async function buildAppUser(session: Session): Promise<MockUser> {
  const profile = await fetchProfileRow(session.user.id);
  const meta = session.user.user_metadata as {
    full_name?: string;
    role?: string;
    class_name?: string;
  };

  let role: Role;
  if (profile?.role && isRole(profile.role)) role = profile.role;
  else if (isRole(meta.role)) role = meta.role;
  else role = "student";

  const name =
    profile?.full_name ??
    meta.full_name ??
    demoNames[role] ??
    (session.user.email ? session.user.email.split("@")[0] : "User");

  return {
    id: session.user.id,
    name,
    email: session.user.email ?? "",
    role,
    className: profile?.class_name ?? meta.class_name,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const applySession = async (session: Session | null) => {
      if (cancelled) return;
      if (!session) {
        setUser(null);
        return;
      }
      setUser(await buildAppUser(session));
    };

    void supabase.auth.getSession().then(({ data: { session } }) => {
      void applySession(session);
      if (!cancelled) setIsReady(true);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      void applySession(session);
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error: error.message, role: "student" as Role };
    if (!data.session) return { error: "No session returned", role: "student" as Role };

    const u = await buildAppUser(data.session);
    setUser(u);
    return { role: u.role };
  };

  const signUp = async (email: string, password: string, fullName: string, role: SignupRole) => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/login`,
        data: {
          full_name: fullName.trim(),
          role,
        },
      },
    });
    if (error) return { error: error.message };

    if (data.session) {
      const u = await buildAppUser(data.session);
      setUser(u);
      return { role: u.role };
    }
    return { needsEmailConfirmation: true };
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return <Ctx.Provider value={{ user, login, signUp, logout, isReady }}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAuth must be used inside AuthProvider");
  return c;
}
