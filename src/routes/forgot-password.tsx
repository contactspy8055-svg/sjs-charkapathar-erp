import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import logo from "@/assets/sjs-logo.png";
import { supabase } from "@/lib/supabase/client";

export const Route = createFileRoute("/forgot-password")({
  component: Forgot,
  head: () => ({ meta: [{ title: "Forgot password — SJS" }] }),
});

function Forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return toast.error("Enter your email");
    setLoading(true);
    try {
      const redirectTo = `${window.location.origin}/reset-password`;
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo });
      if (error) {
        toast.error(error.message);
        return;
      }
      toast.success("If that email exists, a reset link has been sent.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-aurora p-6">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card/80 backdrop-blur p-8 shadow-elevated">
        <div className="flex items-center gap-3"><div className="h-11 w-11 rounded-xl bg-white ring-1 ring-border p-1.5"><img src={logo} alt="" className="h-full w-full object-contain" /></div><div className="font-display text-lg">SJS Charkapathar</div></div>
        <h1 className="mt-6 font-display text-3xl text-gradient-navy">Reset your password</h1>
        <p className="mt-2 text-sm text-muted-foreground">Enter your email and we'll send you a secure reset link.</p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div><Label htmlFor="email">Email</Label><Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <Button type="submit" className="w-full bg-navy text-white" disabled={loading}>{loading ? "Sending…" : "Send reset link"}</Button>
        </form>
        <div className="mt-6 text-sm text-muted-foreground"><Link to="/login" className="hover:text-foreground">← Back to sign in</Link></div>
      </div>
    </div>
  );
}
