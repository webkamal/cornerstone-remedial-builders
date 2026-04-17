import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-construction.jpg";
import concreteImg from "@/assets/concrete-repair.jpg";
import waterImg from "@/assets/waterproofing.jpg";
import facadeImg from "@/assets/facade-restoration.jpg";
import { Award, CheckCircle2, Clock, Hammer, HardHat, Phone, ShieldCheck, Star, Wrench } from "lucide-react";
import { services, site } from "@/lib/site";
import { CTASection } from "@/components/CTASection";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Remedial Builders Sydney | Concrete Repair & Waterproofing | Cornerstone" },
      { name: "description", content: "Sydney's trusted remedial building experts. Concrete repair, balcony waterproofing, facade restoration & strata remedial services. Free site assessment." },
      { property: "og:title", content: "Remedial Builders Sydney | Cornerstone Remedial Builders" },
      { property: "og:description", content: "Concrete repair, waterproofing & structural solutions across Sydney. Licensed, insured, engineered for longevity." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "concrete-repair": Hammer,
  "crack-injection": Wrench,
  "balcony-waterproofing": ShieldCheck,
  "facade-restoration": Star,
  "structural-strengthening": HardHat,
  "building-refurbishment": Award,
  "strata-remedial": CheckCircle2,
};

const serviceImg: Record<string, string> = {
  "concrete-repair": concreteImg,
  "balcony-waterproofing": waterImg,
  "facade-restoration": facadeImg,
};

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Remedial builders working on Sydney construction site" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Licensed & Insured Remedial Builders
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] text-balance">
              Sydney's Trusted <span className="text-accent">Remedial</span> Building Experts
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/85 max-w-2xl">
              Concrete repair, waterproofing & structural solutions for residential, commercial and strata properties across Sydney.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="bg-gradient-gold text-navy-deep px-7 py-4 rounded-md font-semibold shadow-gold hover:scale-105 transition-transform">
                Get a Free Quote
              </Link>
              <a href={site.phoneHref} className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-7 py-4 rounded-md font-semibold hover:bg-white/20 transition flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl">
              {[
                { n: "20+", l: "Years Experience" },
                { n: "500+", l: "Projects Completed" },
                { n: "100%", l: "Licensed & Insured" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl lg:text-4xl font-bold text-accent">{s.n}</div>
                  <div className="text-xs lg:text-sm text-white/70 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-10 border-b bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: ShieldCheck, t: "Fully Licensed" },
              { icon: Award, t: "20+ Years Experience" },
              { icon: Clock, t: "Same-Day Quotes" },
              { icon: HardHat, t: "WHS Compliant" },
            ].map((b) => (
              <div key={b.t} className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm font-medium">
                <b.icon className="w-6 h-6 text-accent" />
                <span>{b.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Our Services</div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-balance">Specialist remedial building solutions across Sydney</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = serviceIcons[s.slug] ?? Hammer;
              return (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group bg-card border rounded-xl p-7 hover:shadow-elegant transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-navy-deep flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-colors">
                    <Icon className="w-6 h-6 text-accent group-hover:text-navy-deep" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="text-accent text-sm font-semibold inline-flex items-center gap-1">
                    Learn more →
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-navy-deep text-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Why Cornerstone</div>
              <h2 className="font-display text-3xl lg:text-5xl font-bold mb-6 text-balance">Engineered solutions. Built to outlast.</h2>
              <p className="text-white/80 text-lg mb-8">
                We don't just patch problems — we deliver engineered, warranty-backed remedial outcomes that protect your asset for decades.
              </p>
              <ul className="space-y-4">
                {[
                  "Engineer-certified methodologies on every project",
                  "Transparent fixed-price quotes — no surprises",
                  "Strata committee & building manager specialists",
                  "Insured to $20M public liability",
                ].map((p) => (
                  <li key={p} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /><span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[concreteImg, waterImg, facadeImg, heroImg].map((img, i) => (
                <img key={i} src={img} alt="" loading="lazy" className={`rounded-xl object-cover w-full h-48 ${i % 2 ? "mt-8" : ""}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Recent Projects</div>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-balance">Trusted by strata committees and developers Sydney-wide</h2>
            </div>
            <Link to="/projects" className="text-accent font-semibold hover:underline">View all projects →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: facadeImg, title: "Heritage Facade Restoration", loc: "Surry Hills" },
              { img: waterImg, title: "Balcony Membrane Replacement", loc: "Bondi Junction" },
              { img: concreteImg, title: "Concrete Spalling Rectification", loc: "Parramatta" },
            ].map((p) => (
              <article key={p.title} className="group rounded-xl overflow-hidden border bg-card hover:shadow-elegant transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{p.loc}</div>
                  <h3 className="font-display font-bold text-lg mt-1">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Client Testimonials</div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold">What clients say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: "Cornerstone delivered our balcony rectification on time and under budget. Our committee couldn't be happier.", a: "Strata Committee Chair", l: "Bondi" },
              { q: "Professional, transparent and skilled. The concrete repair work has held up perfectly for over 4 years.", a: "Building Manager", l: "Parramatta" },
              { q: "From quote to handover, every step was handled with care. Highly recommended for serious remedial work.", a: "Property Developer", l: "Liverpool" },
            ].map((t, i) => (
              <div key={i} className="bg-card rounded-xl p-7 border shadow-sm">
                <div className="flex gap-0.5 text-accent mb-4">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-accent" />)}</div>
                <p className="text-foreground/90 italic mb-5 leading-relaxed">"{t.q}"</p>
                <div className="font-semibold text-sm">{t.a}</div>
                <div className="text-muted-foreground text-xs">{t.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Get a Quote</div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold mb-5 text-balance">Request your free site assessment</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Tell us about your building. A senior remedial specialist will respond within one business day with a clear, fixed-price proposal.
            </p>
            <ul className="space-y-3 text-sm">
              {["Same-day response guarantee", "On-site assessment by qualified remedial builders", "Engineer-backed scopes of work", "Fixed-price, transparent quotes"].map((p) => (
                <li key={p} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
          <QuoteForm />
        </div>
      </section>

      <CTASection />
    </>
  );
}
