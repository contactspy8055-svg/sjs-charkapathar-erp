import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import logo from "@/assets/sjs-logo.png";
import { supabase } from "@/lib/supabase/client";

export const Route = createFileRoute("/reset-password")({
  component: Reset,
  head: () => ({ meta: [{ title: "Reset password — SJS" }] }),
});

function Reset() {
  const navigate = useNavigate();
  const [pw, setPw] = useState("");
  const [cpw, setCpw] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (pw.length < 6) return toast.error("Password must be at least 6 characters");
    if (pw !== cpw) return toast.error("Passwords do not match");
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: pw });
      if (error) {
        toast.error(error.message);
        return;
      }
      toast.success("Password updated. Please sign in.");
      navigate({ to: "/login" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-aurora p-6">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card/80 backdrop-blur p-8 shadow-elevated">
        <div className="flex items-center gap-3"><div className="h-11 w-11 rounded-xl bg-white ring-1 ring-border p-1.5"><img src={logo} alt="" className="h-full w-full object-contain" /></div><div className="font-display text-lg">SJS Charkapathar</div></div>
        <h1 className="mt-6 font-display text-3xl text-gradient-navy">Set a new password</h1>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div><Label htmlFor="pw">New password</Label><Input id="pw" type="password" required value={pw} onChange={(e) => setPw(e.target.value)} /></div>
          <div><Label htmlFor="cpw">Confirm password</Label><Input id="cpw" type="password" required value={cpw} onChange={(e) => setCpw(e.target.value)} /></div>
          <Button type="submit" className="w-full bg-navy text-white" disabled={loading}>{loading ? "Updating…" : "Update password"}</Button>
        </form>
        <div className="mt-6 text-sm text-muted-foreground"><Link to="/login" className="hover:text-foreground">← Back to sign in</Link></div>
      </div>
    </div>
  );
}
