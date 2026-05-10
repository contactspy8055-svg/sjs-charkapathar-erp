import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Youtube, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/sjs-logo.png";

const cols = [
  {
    title: "Explore",
    links: [
      { to: "/about", label: "About School" },
      { to: "/academics", label: "Academics" },
      { to: "/facilities", label: "Facilities" },
      { to: "/faculty", label: "Faculty" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { to: "/admissions", label: "Admissions Open" },
      { to: "/notices", label: "Notices" },
      { to: "/faq", label: "FAQs" },
      { to: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Portals",
    links: [
      { to: "/login", label: "Student Portal" },
      { to: "/login", label: "Parent Portal" },
      { to: "/login", label: "Teacher Portal" },
      { to: "/login", label: "Admin ERP" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-navy-cinematic text-white/80">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-white p-1.5"><img src={logo} alt="" className="h-full w-full object-contain" /></div>
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-white/50">Catholic Diocese of Bhagalpur</div>
                <div className="font-display text-xl text-white">St. Joseph's School, Charkapathar</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/60 max-w-md">
              A Christian Minority English Medium School committed to nurturing well-informed,
              confident, and responsible citizens through excellence, discipline & innovation.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Youtube, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] tracking-[0.2em] uppercase text-white/50">{c.title}</div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-white/80 hover:text-gold transition">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4 text-sm text-white/70">
          <div className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> Charkapathar, Dist. Godda, Jharkhand</div>
          <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> 9155869111</div>
          <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /> sjscpr20@gmail.com</div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} St. Joseph's School, Charkapathar. All rights reserved.</div>
          <div>Designed as a premium platform · Catholic Diocese of Bhagalpur</div>
        </div>
      </div>
    </footer>
  );
}
