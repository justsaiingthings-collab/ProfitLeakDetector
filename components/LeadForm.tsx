"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormState = {
  name: string;
  email: string;
  revenue: string;
  storeLink: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  revenue: "",
  storeLink: ""
};

const revenueOptions = ["<10k", "10k-50k", "50k-100k", "100k+"];
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfhf2BHWTiSqazwv6Px-YjZAOgjUWxyBJefB8sufLTB-sEZKw/formResponse";

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const nextErrors: Errors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.revenue) {
      nextErrors.revenue = "Please select your monthly Amazon revenue.";
    }

    if (form.storeLink.trim()) {
      try {
        new URL(form.storeLink);
      } catch {
        nextErrors.storeLink = "Please enter a valid store URL.";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSuccess(false);

    if (!validate()) {
      return;
    }

    try {
      setIsSubmitting(true);

      const payload = new URLSearchParams({
        "entry.694606831": form.name,
        "entry.1808733377": form.email,
        "entry.1573085712": form.revenue,
        "entry.1447399813": form.storeLink
      });

      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        body: payload.toString()
      });

      setIsSuccess(true);
      setForm(initialState);
    } catch (error) {
      console.error("Lead submission error:", error);
      setErrors({
        email: "Something went wrong. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="section-card p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Free audit
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Stop guessing. Start protecting your margins.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Share a few details and we&apos;ll run a free profit leak audit for
              your Amazon store.
            </p>

            <div className="mt-8 space-y-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                <p className="text-sm leading-6 text-slate-300">
                  Identify unprofitable SKUs and margin compression fast
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                <p className="text-sm leading-6 text-slate-300">
                  Surface refund spikes, fee changes, and hidden losses
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                <p className="text-sm leading-6 text-slate-300">
                  Get actionable next steps your team can implement right away
                </p>
              </div>
            </div>
          </div>

          <div className="section-card p-8 sm:p-10">
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Jane Smith"
                />
                {errors.name ? (
                  <p className="text-sm text-red-300">{errors.name}</p>
                ) : null}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="jane@brand.com"
                />
                {errors.email ? (
                  <p className="text-sm text-red-300">{errors.email}</p>
                ) : null}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="revenue">Monthly Amazon Revenue</Label>
                <select
                  id="revenue"
                  className="flex h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:ring-2 focus:ring-ring"
                  value={form.revenue}
                  onChange={(event) => updateField("revenue", event.target.value)}
                >
                  <option value="" disabled className="bg-slate-950 text-slate-400">
                    Select revenue range
                  </option>
                  {revenueOptions.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="bg-slate-950 text-white"
                    >
                      {option}
                    </option>
                  ))}
                </select>
                {errors.revenue ? (
                  <p className="text-sm text-red-300">{errors.revenue}</p>
                ) : null}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="storeLink">Store link (optional)</Label>
                <Input
                  id="storeLink"
                  type="url"
                  value={form.storeLink}
                  onChange={(event) => updateField("storeLink", event.target.value)}
                  placeholder="https://amazon.com/shops/your-store"
                />
                {errors.storeLink ? (
                  <p className="text-sm text-red-300">{errors.storeLink}</p>
                ) : null}
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Get Free Profit Audit"
                )}
              </Button>

              {isSuccess ? (
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                  Thanks! We&apos;ll run your free audit and get back to you shortly.
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
