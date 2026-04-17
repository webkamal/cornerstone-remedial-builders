import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Cornerstone Remedial Builders Sydney | Free Quote" },
      { name: "description", content: "Contact Sydney's trusted remedial builders. Call +61 488 694 636 or request a free no-obligation site assessment online." },
      { property: "og:title", content: "Contact Cornerstone Remedial Builders" },
      { property: "og:description", content: "Speak with a remedial specialist today. Free Sydney-wide site assessments." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with a remedial specialist"
        subtitle="Free no-obligation site assessment. Same-day response across Sydney."
        breadcrumbs={[{ to: "/contact", label: "Contact" }]}
      />
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6">Get in touch</h2>
            <div className="space-y-5">
              {[
                { icon: Phone, label: "Phone", v: site.phone, href: site.phoneHref },
                { icon: Mail, label: "Email", v: site.email, href: site.emailHref },
                { icon: MapPin, label: "Office", v: site.address },
                { icon: Clock, label: "Hours", v: "Mon – Fri, 7am – 5pm" },
              ].map((c) => (
                <div key={c.label} className="flex gap-4 items-start p-5 border rounded-xl">
                  <div className="w-11 h-11 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-navy-deep" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="font-semibold text-lg hover:text-accent">{c.v}</a>
                    ) : (
                      <div className="font-semibold text-lg">{c.v}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl overflow-hidden border h-72">
              <iframe
                title="Cornerstone Remedial Builders office map"
                src="https://www.google.com/maps?q=8+Carrington+Road+Marrickville+NSW+2204&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6">Request a quote</h2>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
