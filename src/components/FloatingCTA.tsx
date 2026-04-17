import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingCTA() {
  return (
    <a
      href={site.phoneHref}
      className="lg:hidden fixed bottom-5 right-5 z-40 bg-gradient-gold text-navy-deep rounded-full px-5 py-4 shadow-gold flex items-center gap-2 font-semibold animate-fade-up"
      aria-label="Call Cornerstone Remedial Builders"
    >
      <Phone className="w-5 h-5" />
      Call Now
    </a>
  );
}
