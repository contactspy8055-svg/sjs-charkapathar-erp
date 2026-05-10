import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/sjs-logo.png";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/facilities", label: "Facilities" },
  { to: "/faculty", label: "Faculty" },
  { to: "/gallery", label: "Gallery" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${
            scrolled
              ? "glass-light shadow-[0_10px_40px_-15px_oklch(0.18_0.07_265/0.25)]"
              : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 rounded-xl bg-white shadow-sm ring-1 ring-border overflow-hidden">
              <img src={logo} alt="SJS Charkapathar logo" className="h-full w-full object-contain p-1" />
            </div>
            <div className="leading-tight">
              <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">St. Joseph's School</div>
              <div className="font-display text-[17px] font-semibold text-foreground">Charkapathar</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => {
              const active = path === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-3.5 py-2 text-sm rounded-lg transition-colors ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Sign in</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/register">Register</Link>
            </Button>
            <Button size="sm" asChild className="bg-navy hover:bg-navy/90 text-white shadow-md">
              <Link to="/admissions">
                Admissions <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </Link>
            </Button>
          </div>

          <button
            aria-label="Menu"
            className="lg:hidden h-10 w-10 grid place-items-center rounded-xl glass-light"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass-light p-3 shadow-xl animate-in fade-in slide-in-from-top-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="block px-3 py-2.5 rounded-lg text-sm hover:bg-accent"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Button variant="outline" asChild><Link to="/login">Sign in</Link></Button>
              <Button variant="outline" asChild><Link to="/register">Register</Link></Button>
            </div>
            <Button asChild className="mt-2 w-full bg-navy text-white"><Link to="/admissions">Admissions</Link></Button>
          </div>
        )}
      </div>
    </header>
  );
}
