import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { QuoteForm } from "@/components/QuoteForm";
import { services, suburbs } from "@/lib/site";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/areas/$slug")({
  loader: ({ params }) => {
    const suburb = suburbs.find((s) => s.slug === params.slug);
    if (!suburb) throw notFound();
    return { suburb };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.suburb;
    if (!s) return { meta: [{ title: "Service Area" }] };
    const title = `Remedial Builders ${s.name} | Concrete Repair & Waterproofing`;
    const desc = `Specialist remedial builders servicing ${s.name} and surrounding Sydney suburbs. Concrete repair, balcony waterproofing, facade restoration & strata works.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="pt-32 pb-20 text-center">
      <h1 className="font-display text-3xl font-bold">Area not found</h1>
      <Link to="/" className="text-accent mt-4 inline-block">Back home</Link>
    </div>
  ),
  component: AreaPage,
});

function AreaPage() {
  const { suburb } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title={`Remedial Builders ${suburb.name}`}
        subtitle={`Specialist remedial building services for residential, commercial and strata properties throughout ${suburb.name} and surrounding Sydney suburbs.`}
        breadcrumbs={[{ to: `/areas/${suburb.slug}`, label: suburb.name }]}
      />
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed">
              Cornerstone Remedial Builders is the trusted choice for property owners, strata committees and building managers across {suburb.name}. From concrete spalling on apartment blocks to balcony waterproofing failures and full facade restorations, our team delivers engineered, warranty-backed remedial outcomes throughout the {suburb.name} region.
            </p>
            <p className="text-foreground/85 leading-relaxed">
              With more than 20 years experience working on Sydney's residential and commercial assets, we understand the unique challenges of {suburb.name}'s building stock — from heritage facades and post-war concrete to modern strata towers. Every project is engineer-certified, fully insured, and delivered with transparent fixed-price quotes.
            </p>

            <h2 className="font-display text-2xl lg:text-3xl font-bold pt-4">Services available in {suburb.name}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="flex gap-3 p-4 border rounded-lg hover:border-accent transition">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">{s.title}</div>
                    <div className="text-sm text-muted-foreground">{s.desc}</div>
                  </div>
                </Link>
              ))}
            </div>

            <h2 className="font-display text-2xl lg:text-3xl font-bold pt-4">Why {suburb.name} property owners choose Cornerstone</h2>
            <ul className="space-y-3">
              {[
                `Local Sydney team — fast response times throughout ${suburb.name}`,
                "Engineer-certified scopes and methodologies",
                "Strata, owners corporation and committee experience",
                "Fixed-price proposals — no hidden variations",
                "Fully licensed, $20M public liability insurance",
              ].map((p) => (
                <li key={p} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />{p}</li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 self-start">
            <QuoteForm />
          </aside>
        </div>
      </section>

      <CTASection title={`Remedial building specialists in ${suburb.name}`} subtitle="Free site assessment, fixed-price quotes, engineer-certified workmanship." />
    </>
  );
}
