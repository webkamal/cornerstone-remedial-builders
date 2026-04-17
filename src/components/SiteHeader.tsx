import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { site, services } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-md bg-gradient-navy flex items-center justify-center shadow-elegant">
              <span className="text-accent font-display font-bold text-lg">C</span>
            </div>
            <div className="leading-tight">
              <div className={`font-display font-bold text-base ${scrolled ? "text-foreground" : "text-white"}`}>
                Cornerstone
              </div>
              <div className={`text-[10px] uppercase tracking-widest ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
                Remedial Builders
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
                }`}
                activeProps={{ className: "text-accent" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={site.phoneHref}
              className={`flex items-center gap-2 text-sm font-semibold ${scrolled ? "text-foreground" : "text-white"}`}
            >
              <Phone className="w-4 h-4" />
              {site.phone}
            </a>
            <Link
              to="/contact"
              className="bg-gradient-gold text-navy-deep px-5 py-2.5 rounded-md font-semibold text-sm shadow-gold hover:scale-105 transition-transform"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-foreground hover:bg-muted font-medium"
              >
                {n.label}
              </Link>
            ))}
            <div className="border-t mt-2 pt-3 px-3 grid gap-2">
              <a href={site.phoneHref} className="flex items-center gap-2 text-foreground font-semibold">
                <Phone className="w-4 h-4" /> {site.phone}
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="bg-gradient-gold text-navy-deep text-center py-3 rounded-md font-semibold"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
