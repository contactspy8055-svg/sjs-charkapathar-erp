import { createFileRoute, Link, useNavigate, redirect } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useAuth, type SignupRole } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Users, BookOpen, ArrowRight, Eye, EyeOff } from "lucide-react";
import logo from "@/assets/sjs-logo.png";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase/client";
import { resolveRoleForUser } from "@/lib/supabase/profile";

export const Route = createFileRoute("/register")({
  beforeLoad: async () => {
    if (typeof window === "undefined") return;
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) return;
    const role = await resolveRoleForUser(session.user.id, session.user);
    throw redirect({ to: `/dashboard/${role}` });
  },
  component: Register,
  head: () => ({ meta: [{ title: "Create account — SJS Charkapathar" }] }),
});

const roles: { id: SignupRole; label: string; icon: typeof GraduationCap; desc: string }[] = [
  { id: "student", label: "Student", icon: GraduationCap, desc: "View attendance, results, homework" },
  { id: "parent", label: "Parent", icon: Users, desc: "Track your child's progress" },
  { id: "teacher", label: "Teacher", icon: BookOpen, desc: "Manage classes, mark attendance" },
];

function Register() {
  const [role, setRole] = useState<SignupRole>("student");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email || !password) return toast.error("Fill in all required fields");
    if (password.length < 6) return toast.error("Password must be at least 6 characters");
    if (password !== confirm) return toast.error("Passwords do not match");
    setSubmitting(true);
    try {
      const result = await signUp(email.trim(), password, fullName.trim(), role);
      if (result.error) {
        toast.error(result.error);
        return;
      }
      if (result.needsEmailConfirmation) {
        toast.success("Check your email to confirm your account, then sign in.");
        navigate({ to: "/login" });
        return;
      }
      toast.success("Welcome to SJS ERP");
      const r = result.role ?? role;
      navigate({ to: `/dashboard/${r}` as any });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <div className="relative hidden lg:flex flex-col p-10 text-white bg-navy-cinematic overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl animate-float" />
        <Link to="/" className="relative flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-white p-1.5"><img src={logo} alt="" className="h-full w-full object-contain" /></div>
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-white/60">Catholic Diocese of Bhagalpur</div>
            <div className="font-display">St. Joseph's School, Charkapathar</div>
          </div>
        </Link>
        <div className="relative mt-auto">
          <div className="text-[11px] tracking-[0.2em] uppercase text-white/60">Join SJS ERP</div>
          <h2 className="mt-3 font-display text-4xl text-balance">Register as a student, parent or teacher.</h2>
          <p className="mt-4 text-white/70 max-w-md">Administrator accounts are created only by the school in Supabase — not via public signup.</p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {roles.map((r) => (
              <div key={r.id} className="rounded-2xl glass p-4 text-center">
                <r.icon className="h-5 w-5 mx-auto text-gold" />
                <div className="mt-2 text-xs">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">New account</div>
          <h1 className="mt-2 font-display text-4xl text-gradient-navy">Create your SJS ERP account</h1>
          <p className="mt-2 text-sm text-muted-foreground">Choose your role and complete the form below.</p>

          <div className="mt-6 grid grid-cols-3 gap-2">
            {roles.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRole(r.id)}
                className={`group rounded-xl p-3 text-center border transition ${
                  role === r.id ? "border-navy bg-navy text-white shadow-elevated" : "border-border bg-card hover:border-navy/40"
                }`}
              >
                <r.icon className={`h-5 w-5 mx-auto ${role === r.id ? "text-gold" : "text-muted-foreground group-hover:text-navy"}`} />
                <div className="mt-1.5 text-[11px] font-medium">{r.label}</div>
              </button>
            ))}
          </div>
          <div className="mt-2 text-xs text-muted-foreground">{roles.find((r) => r.id === role)?.desc}</div>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" type="text" placeholder="Your name" value={fullName} onChange={(e) => setFullName(e.target.value)} autoComplete="name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@school.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
            </div>
            <div>
              <Label htmlFor="pw">Password</Label>
              <div className="relative">
                <Input id="pw" type={show ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" required />
                <button type="button" onClick={() => setShow((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">{show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>
              </div>
            </div>
            <div>
              <Label htmlFor="cpw">Confirm password</Label>
              <Input id="cpw" type={show ? "text" : "password"} placeholder="••••••••" value={confirm} onChange={(e) => setConfirm(e.target.value)} autoComplete="new-password" required />
            </div>
            <Button type="submit" className="w-full bg-navy text-white hover:bg-navy/90" disabled={submitting}>
              {submitting ? "Creating…" : <>Create account <ArrowRight className="h-4 w-4 ml-1" /></>}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Already have an account? <Link to="/login" className="text-navy font-medium hover:underline">Sign in</Link>
            </p>
          </form>

          <div className="mt-8 text-sm text-muted-foreground"><Link to="/" className="hover:text-foreground">← Back to website</Link></div>
        </div>
      </div>
    </div>
  );
}
