import { createFileRoute, Link, useNavigate, redirect } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Users, BookOpen, ShieldCheck, ArrowRight, Eye, EyeOff } from "lucide-react";
import logo from "@/assets/sjs-logo.png";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase/client";
import { resolveRoleForUser } from "@/lib/supabase/profile";

export const Route = createFileRoute("/login")({
  beforeLoad: async () => {
    if (typeof window === "undefined") return;
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) return;
    const role = await resolveRoleForUser(session.user.id, session.user);
    throw redirect({ to: `/dashboard/${role}` });
  },
  validateSearch: (search: Record<string, unknown>) => ({
    redirect: typeof search.redirect === "string" && search.redirect.startsWith("/") ? search.redirect : undefined,
  }),
  component: Login,
  head: () => ({ meta: [{ title: "Sign in — SJS Charkapathar" }] }),
});

const leftPanelRoles: { id: string; label: string; icon: typeof GraduationCap; admin?: boolean }[] = [
  { id: "student", label: "Student", icon: GraduationCap },
  { id: "parent", label: "Parent", icon: Users },
  { id: "teacher", label: "Teacher", icon: BookOpen },
  { id: "admin", label: "Admin", icon: ShieldCheck, admin: true },
];

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { redirect: redirectTo } = Route.useSearch();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) return toast.error("Enter email and password");
    const result = await login(email, password);
    if (result.error) return toast.error(result.error);
    toast.success(`Welcome to SJS · signed in as ${result.role}`);
    const dest = redirectTo ?? `/dashboard/${result.role}`;
    navigate({ to: dest as any });
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <div className="relative hidden lg:flex flex-col p-10 text-white bg-navy-cinematic overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl animate-float" />
        <Link to="/" className="relative flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-white p-1.5"><img src={logo} alt="" className="h-full w-full object-contain" /></div>
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-white/60">Catholic Diocese of Bhagalpur</div>
            <div className="font-display">St. Joseph's School, Charkapathar</div>
          </div>
        </Link>
        <div className="relative mt-auto">
          <div className="text-[11px] tracking-[0.2em] uppercase text-white/60">SJS ERP Platform</div>
          <h2 className="mt-3 font-display text-4xl text-balance">A premium experience for students, parents, teachers & admin.</h2>
          <p className="mt-4 text-white/70 max-w-md">One secure platform — attendance, homework, results, fees, notices and analytics.</p>
          <div className="mt-8 flex gap-3">
            {leftPanelRoles.map((r) => (
              <div key={r.id} className="flex-1 rounded-2xl glass p-4 text-center">
                <r.icon className="h-5 w-5 mx-auto text-gold" />
                <div className="mt-2 text-xs">{r.label}</div>
                {r.admin && <div className="mt-1 text-[10px] text-white/50 leading-tight">School-assigned</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Welcome back</div>
          <h1 className="mt-2 font-display text-4xl text-gradient-navy">Sign in to SJS ERP</h1>
          <p className="mt-2 text-sm text-muted-foreground">Use your school email. Your dashboard matches the role stored in your profile.</p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@school.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
            </div>
            <div>
              <div className="flex items-center justify-between"><Label htmlFor="pw">Password</Label><Link to="/forgot-password" className="text-xs text-navy hover:underline">Forgot?</Link></div>
              <div className="relative">
                <Input id="pw" type={show ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
                <button type="button" onClick={() => setShow((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">{show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>
              </div>
            </div>
            <Button type="submit" className="w-full bg-navy text-white hover:bg-navy/90">Sign in <ArrowRight className="h-4 w-4 ml-1" /></Button>
            <p className="text-center text-xs text-muted-foreground">New here? <Link to="/register" className="text-navy font-medium hover:underline">Create an account</Link></p>
          </form>

          <div className="mt-8 text-sm text-muted-foreground"><Link to="/" className="hover:text-foreground">← Back to website</Link></div>
        </div>
      </div>
    </div>
  );
}
