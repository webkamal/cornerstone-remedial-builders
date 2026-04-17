import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { services, site, suburbs } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-md bg-gradient-gold flex items-center justify-center">
                <span className="text-navy-deep font-display font-bold text-lg">C</span>
              </div>
              <div className="font-display font-bold text-lg">Cornerstone</div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Sydney's trusted remedial building specialists. Licensed, insured, and engineered for longevity.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4 text-accent">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="text-white/70 hover:text-accent">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4 text-accent">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {suburbs.map((s) => (
                <li key={s.slug}>
                  <Link to="/areas/$slug" params={{ slug: s.slug }} className="text-white/70 hover:text-accent">
                    Remedial Builders {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4 text-accent">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-accent" /><a href={site.phoneHref} className="hover:text-accent">{site.phone}</a></li>
              <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-accent" /><a href={site.emailHref} className="hover:text-accent break-all">{site.email}</a></li>
              <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-accent" /><span>{site.address}</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between text-xs text-white/50 gap-2">
          <div>© {new Date().getFullYear()} {site.name}. Licensed & Insured. All rights reserved.</div>
          <div>ABN registered • Fully insured remedial builders Sydney</div>
        </div>
      </div>
    </footer>
  );
}
