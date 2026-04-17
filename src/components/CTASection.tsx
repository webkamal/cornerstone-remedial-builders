import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function CTASection({ title = "Ready to protect your building?", subtitle = "Speak with a remedial specialist today. Free, no-obligation site assessment." }: { title?: string; subtitle?: string }) {
  return (
    <section className="bg-gradient-navy text-white py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-balance">{title}</h2>
        <p className="text-white/80 text-lg mb-8">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="bg-gradient-gold text-navy-deep px-7 py-3.5 rounded-md font-semibold shadow-gold hover:scale-105 transition-transform">
            Get a Free Quote
          </Link>
          <a href={site.phoneHref} className="border-2 border-white/30 text-white px-7 py-3.5 rounded-md font-semibold hover:bg-white/10 transition flex items-center gap-2">
            <Phone className="w-4 h-4" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
