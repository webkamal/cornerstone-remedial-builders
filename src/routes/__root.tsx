import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingCTA } from "@/components/FloatingCTA";
import { site } from "@/lib/site";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-gradient-gold text-navy-deep px-5 py-2.5 text-sm font-semibold shadow-gold">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.name,
  image: `${site.url}/og-cover.jpg`,
  "@id": site.url,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 14, 8 Carrington Road",
    addressLocality: "Marrickville",
    addressRegion: "NSW",
    postalCode: "2204",
    addressCountry: "AU",
  },
  areaServed: "Sydney, NSW",
  priceRange: "$$",
  description: "Sydney's trusted remedial building specialists — concrete repair, waterproofing, facade restoration and structural strengthening.",
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cornerstone Remedial Builders | Sydney Concrete Repair & Waterproofing" },
      { name: "description", content: "Sydney's trusted remedial builders. Concrete repair, balcony waterproofing, facade restoration & structural strengthening. Licensed, insured. Free quotes." },
      { name: "author", content: site.name },
      { name: "theme-color", content: "#1a2342" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingCTA />
    </>
  );
}
