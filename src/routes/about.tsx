import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import teamImg from "@/assets/team.jpg";
import { Award, CheckCircle2, ShieldCheck, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Cornerstone Remedial Builders | Sydney's Trusted Remedial Specialists" },
      { name: "description", content: "Over 20 years delivering remedial building solutions across Sydney. Licensed, insured, engineer-certified workmanship. Meet the Cornerstone team." },
      { property: "og:title", content: "About Cornerstone Remedial Builders" },
      { property: "og:description", content: "Sydney's trusted remedial building specialists. Engineering-led, committee-friendly, built to outlast." },
      { property: "og:image", content: teamImg },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Engineered remedial building. Built on trust."
        subtitle="Two decades of restoring Sydney's residential, commercial and strata properties."
        breadcrumbs={[{ to: "/about", label: "About" }]}
      />
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <img src={teamImg} alt="Cornerstone Remedial Builders team" loading="lazy" className="rounded-xl shadow-elegant w-full" />
          <div>
            <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Our Story</div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-5 text-balance">A trusted name in Sydney remedial building</h2>
            <p className="text-foreground/85 mb-4 leading-relaxed">
              Cornerstone Remedial Builders was founded on a simple belief: remedial work should be engineered, not improvised. Over more than 20 years, we've grown into one of Sydney's most respected specialist remedial contractors, trusted by strata committees, building managers, developers and asset owners.
            </p>
            <p className="text-foreground/85 leading-relaxed">
              Based in Marrickville and operating Sydney-wide, our team combines the discipline of structural engineering with the craftsmanship of skilled tradespeople — delivering outcomes that protect buildings for decades.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, t: "Our Mission", d: "Restore and protect Sydney's buildings with engineered, warranty-backed remedial solutions." },
              { icon: Award, t: "Our Values", d: "Integrity, craftsmanship, transparency. Every project, every time." },
              { icon: Users, t: "Our People", d: "Licensed remedial builders, project managers and committee-experienced supervisors." },
            ].map((v) => (
              <div key={v.t} className="bg-card p-7 rounded-xl border">
                <v.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-display font-bold text-xl mb-2">{v.t}</h3>
                <p className="text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">Credentials & certifications</h2>
          <ul className="space-y-3">
            {[
              "NSW Licensed Builder",
              "$20M Public Liability Insurance",
              "Workers Compensation Insurance",
              "WHS-compliant systems on every site",
              "Member — Australasian Concrete Repair Association (ACRA)",
              "AS 4654.2 waterproofing certified installers",
            ].map((c) => (
              <li key={c} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
