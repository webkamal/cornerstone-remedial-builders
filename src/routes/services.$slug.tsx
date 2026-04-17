import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { QuoteForm } from "@/components/QuoteForm";
import { services } from "@/lib/site";
import concreteImg from "@/assets/concrete-repair.jpg";
import waterImg from "@/assets/waterproofing.jpg";
import facadeImg from "@/assets/facade-restoration.jpg";
import structuralImg from "@/assets/structural.jpg";
import heroImg from "@/assets/hero-construction.jpg";
import { CheckCircle2 } from "lucide-react";

const imageMap: Record<string, string> = {
  "concrete-repair": concreteImg,
  "crack-injection": concreteImg,
  "balcony-waterproofing": waterImg,
  "facade-restoration": facadeImg,
  "structural-strengthening": structuralImg,
  "building-refurbishment": heroImg,
  "strata-remedial": facadeImg,
};

const detail: Record<string, { intro: string; benefits: string[]; process: { t: string; d: string }[] }> = {
  "concrete-repair": {
    intro: "Concrete spalling, carbonation and reinforcement corrosion are among the most common defects in Sydney's older buildings. We deliver engineered concrete repair that restores structural integrity and visual finish.",
    benefits: ["Restores load-bearing capacity", "Stops further reinforcement corrosion", "Matches existing finishes", "Engineer-certified workmanship"],
    process: [
      { t: "Assessment", d: "On-site inspection, hammer-tap survey and engineering review." },
      { t: "Preparation", d: "Mechanical removal of defective concrete to sound substrate." },
      { t: "Reinforcement", d: "Cleaning, treatment and reinforcement supplementation as required." },
      { t: "Reinstatement", d: "Polymer-modified repair mortars applied to engineer specification." },
    ],
  },
  "crack-injection": {
    intro: "Structural and non-structural cracks compromise both performance and waterproofing. Our epoxy and polyurethane injection systems seal, reinforce and rehabilitate cracks in concrete and masonry.",
    benefits: ["Restores monolithic structural behaviour", "Stops water ingress permanently", "Suitable for live and dormant cracks", "Minimally disruptive on occupied sites"],
    process: [
      { t: "Crack mapping", d: "Width, depth and movement assessment." },
      { t: "Port installation", d: "Surface ports installed at calculated centres." },
      { t: "Injection", d: "Low-pressure injection to refusal." },
      { t: "Finishing", d: "Surface make-good and verification." },
    ],
  },
  "balcony-waterproofing": {
    intro: "Failed balcony membranes are the leading cause of strata water-ingress claims in Sydney. We deliver compliant, warranty-backed waterproofing systems for balconies, terraces and planter boxes.",
    benefits: ["AS 4654.2 compliant systems", "10-year material warranties", "Tile-overlay or trafficable finish options", "Detailing to all penetrations and upturns"],
    process: [
      { t: "Strip-out", d: "Tile and existing membrane removal." },
      { t: "Substrate prep", d: "Falls assessment, screed reinstatement." },
      { t: "Membrane", d: "Liquid-applied or sheet membrane to manufacturer spec." },
      { t: "Finish", d: "Tile, topping or exposed trafficable system." },
    ],
  },
  "facade-restoration": {
    intro: "Facades define a building's identity — and protect everything behind them. Our facade restoration combines remedial engineering with architectural sensitivity to revive both heritage and modern facades.",
    benefits: ["Restored architectural character", "Improved weather resistance", "Energy-efficient recoating systems", "Compliant access methodologies"],
    process: [
      { t: "Survey", d: "Drone and abseil condition surveys." },
      { t: "Repairs", d: "Concrete, render, sealant and brickwork rectification." },
      { t: "Coating", d: "Specialist protective coatings & paint systems." },
      { t: "Handover", d: "Photographic close-out report and warranties." },
    ],
  },
  "structural-strengthening": {
    intro: "When loads change or capacity is reduced by deterioration, our structural strengthening solutions — carbon fibre wraps, steel plating and supplementary reinforcement — restore and enhance structural performance.",
    benefits: ["Engineered to AS 3600", "Minimal added weight", "Rapid installation, low disruption", "Future-proofs for higher loads"],
    process: [
      { t: "Engineering", d: "Structural review and strengthening design." },
      { t: "Surface prep", d: "Mechanical preparation to required profile." },
      { t: "Installation", d: "FRP, steel or composite installation." },
      { t: "Verification", d: "Pull-off testing and certification." },
    ],
  },
  "building-refurbishment": {
    intro: "Bring ageing residential and commercial assets back to a modern standard with comprehensive refurbishment programs that combine remedial works, finishes and upgrades under one trusted contractor.",
    benefits: ["Single-point project responsibility", "Programmed to minimise tenant disruption", "Improved asset value & rental yields", "Compliance and BCA upgrades"],
    process: [
      { t: "Scoping", d: "Defect register and works program." },
      { t: "Approvals", d: "Strata, council and engineer sign-offs." },
      { t: "Delivery", d: "Staged delivery with weekly reporting." },
      { t: "Completion", d: "DLP support and warranty handover." },
    ],
  },
  "strata-remedial": {
    intro: "Strata remedial work demands experience with committees, by-laws, occupied buildings and insurance. Cornerstone is the strata sector's trusted partner for major remedial programs.",
    benefits: ["Committee-friendly reporting", "Owner & resident communications", "Insurance-claim experience", "Long-term capital works planning"],
    process: [
      { t: "Building report", d: "Independent defect & dilapidation review." },
      { t: "Tender support", d: "Scope drafting and tender management." },
      { t: "Delivery", d: "Programmed remedial works with PM oversight." },
      { t: "Reporting", d: "Monthly committee reporting & close-out." },
    ],
  },
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service" }] };
    const title = `${s.short} | Cornerstone Remedial Builders`;
    const desc = `${s.desc} Trusted Sydney specialists. Free quotes, engineer-certified workmanship, fully insured.`;
    const img = imageMap[s.slug];
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(img ? [{ property: "og:image", content: img }, { name: "twitter:image", content: img }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="pt-32 pb-20 text-center">
      <h1 className="font-display text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="text-accent mt-4 inline-block">View all services</Link>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const d = detail[service.slug];
  const img = imageMap[service.slug];

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={`${service.title} Sydney`}
        subtitle={service.desc}
        breadcrumbs={[{ to: "/services", label: "Services" }, { to: `/services/${service.slug}`, label: service.title }]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">{d.intro}</p>
            {img && <img src={img} alt={`${service.title} Sydney`} loading="lazy" className="rounded-xl shadow-elegant w-full mb-10" />}

            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-5">Our process</h2>
            <ol className="space-y-4 mb-12">
              {d.process.map((step, i) => (
                <li key={i} className="flex gap-4 bg-muted/40 rounded-lg p-5 border">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold text-navy-deep font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                  <div>
                    <h3 className="font-display font-bold text-lg">{step.t}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-5">Benefits</h2>
            <ul className="grid sm:grid-cols-2 gap-3 mb-12">
              {d.benefits.map((b) => (
                <li key={b} className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /><span>{b}</span></li>
              ))}
            </ul>

            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-5">Other services</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.filter((s) => s.slug !== service.slug).slice(0, 4).map((s) => (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="border rounded-lg p-4 hover:border-accent hover:shadow-sm transition">
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm text-muted-foreground">{s.desc}</div>
                </Link>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 self-start">
            <QuoteForm />
          </aside>
        </div>
      </section>

      <CTASection title={`Need ${service.title.toLowerCase()} in Sydney?`} subtitle="Get a free, no-obligation site assessment from our specialist team." />
    </>
  );
}
