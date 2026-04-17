import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs = [],
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { to: string; label: string }[];
}) {
  return (
    <section className="relative pt-32 pb-16 bg-gradient-navy text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, var(--gold) 0%, transparent 40%)" }} />
      <div className="container mx-auto px-4 lg:px-8 relative">
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1 text-sm text-white/60 mb-4">
            <Link to="/" className="hover:text-accent">Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3" />
                <Link to={b.to} className="hover:text-accent">{b.label}</Link>
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <div className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-3">{eyebrow}</div>}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl text-balance">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-white/80 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
