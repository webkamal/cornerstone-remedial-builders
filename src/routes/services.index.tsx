import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { services } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Remedial Building Services Sydney | Cornerstone Remedial Builders" },
      { name: "description", content: "Concrete repair, crack injection, balcony waterproofing, facade restoration, structural strengthening & strata remedial services across Sydney." },
      { property: "og:title", content: "Remedial Building Services Sydney" },
      { property: "og:description", content: "Specialist remedial building services for residential, commercial and strata properties." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Remedial Building Services Across Sydney"
        subtitle="Engineered, warranty-backed solutions for ageing and damaged structures."
        breadcrumbs={[{ to: "/services", label: "Services" }]}
      />
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group bg-card border rounded-xl p-8 hover:shadow-elegant transition hover:-translate-y-0.5"
            >
              <h2 className="font-display text-2xl font-bold mb-2 group-hover:text-accent transition">{s.title}</h2>
              <p className="text-muted-foreground mb-4">{s.desc}</p>
              <div className="text-accent font-semibold inline-flex items-center gap-2">Learn more <ArrowRight className="w-4 h-4" /></div>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
