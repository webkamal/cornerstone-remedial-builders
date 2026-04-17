import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import concreteImg from "@/assets/concrete-repair.jpg";
import waterImg from "@/assets/waterproofing.jpg";
import facadeImg from "@/assets/facade-restoration.jpg";
import structuralImg from "@/assets/structural.jpg";
import heroImg from "@/assets/hero-construction.jpg";
import teamImg from "@/assets/team.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Case Studies | Cornerstone Remedial Builders Sydney" },
      { name: "description", content: "Explore Cornerstone's recent remedial building projects across Sydney — concrete repair, balcony waterproofing, facade restoration & more." },
      { property: "og:title", content: "Cornerstone Remedial Building Projects Sydney" },
      { property: "og:description", content: "Engineered remedial outcomes across Sydney residential, commercial and strata buildings." },
      { property: "og:image", content: facadeImg },
    ],
  }),
  component: Projects,
});

const projects = [
  { img: facadeImg, title: "Heritage Facade Restoration", loc: "Surry Hills", scope: "Facade Restoration", result: "Original architectural character restored across 6-storey heritage building." },
  { img: waterImg, title: "Balcony Membrane Replacement", loc: "Bondi Junction", scope: "Balcony Waterproofing", result: "42 balconies rectified with AS 4654.2 compliant membrane and tiling." },
  { img: concreteImg, title: "Concrete Spalling Rectification", loc: "Parramatta", scope: "Concrete Repair", result: "Structural integrity restored to car-park soffits and columns." },
  { img: structuralImg, title: "Carbon Fibre Strengthening", loc: "Liverpool", scope: "Structural Strengthening", result: "Slab capacity uprated for change-of-use refurbishment." },
  { img: heroImg, title: "Strata Building Refurbishment", loc: "Blacktown", scope: "Building Refurbishment", result: "Full-asset remedial program delivered ahead of schedule." },
  { img: teamImg, title: "Strata Capital Works Program", loc: "Marrickville", scope: "Strata Remedial", result: "Multi-stage 18-month works program with weekly committee reporting." },
];

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Recent Remedial Building Projects"
        subtitle="A selection of our recent work across Sydney's residential, commercial and strata sectors."
        breadcrumbs={[{ to: "/projects", label: "Projects" }]}
      />
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group bg-card border rounded-xl overflow-hidden hover:shadow-elegant transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-accent font-semibold">{p.scope} • {p.loc}</div>
                <h3 className="font-display font-bold text-xl mt-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{p.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
