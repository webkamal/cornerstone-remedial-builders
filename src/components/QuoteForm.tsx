import { useState } from "react";
import { z } from "zod";
import { services, site } from "@/lib/site";
import { CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(6, "Please enter a valid phone").max(30),
  email: z.string().trim().email("Invalid email").max(255),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().max(1000).optional(),
});

export function QuoteForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");
    // Simulated submit; integrate Lovable Cloud / email later
    const body = `Name: ${parsed.data.name}%0APhone: ${parsed.data.phone}%0AEmail: ${parsed.data.email}%0AService: ${parsed.data.service}%0AMessage: ${encodeURIComponent(parsed.data.message ?? "")}`;
    setTimeout(() => {
      setStatus("success");
      window.location.href = `${site.emailHref}?subject=Quote%20Request%20-%20${encodeURIComponent(parsed.data.service)}&body=${body}`;
    }, 600);
  };

  if (status === "success") {
    return (
      <div className="bg-card rounded-xl p-8 text-center shadow-elegant border">
        <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-3" />
        <h3 className="font-display text-xl font-bold mb-1">Request received</h3>
        <p className="text-muted-foreground text-sm">We'll get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bg-card rounded-xl p-6 lg:p-8 shadow-elegant border space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name" name="name" error={errors.name} />
        <Field label="Phone" name="phone" type="tel" error={errors.phone} />
      </div>
      <Field label="Email" name="email" type="email" error={errors.email} />
      <div>
        <label className="block text-sm font-medium mb-1.5">Service Required</label>
        <select
          name="service"
          defaultValue=""
          className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="" disabled>Select a service…</option>
          {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
          <option value="Other">Other / Not sure</option>
        </select>
        {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5">Message (optional)</label>
        <textarea
          name="message"
          rows={4}
          maxLength={1000}
          placeholder="Tell us about your building and the issue you're seeing…"
          className="w-full rounded-md border border-input bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-gradient-gold text-navy-deep font-semibold rounded-md h-12 shadow-gold hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
        Request Free Quote
      </button>
      <p className="text-xs text-muted-foreground text-center">
        No obligation • Same-day response • Licensed & insured
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={type === "email" ? 255 : 100}
        className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
}
