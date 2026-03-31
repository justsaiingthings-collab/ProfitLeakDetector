import { ArrowRight, BarChart3, ShieldAlert } from "lucide-react";

import { AlertCard } from "@/components/AlertCard";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LeadForm } from "@/components/LeadForm";
import { ValueProps } from "@/components/ValueProps";
import { Button } from "@/components/ui/button";

const alerts = [
  {
    tone: "critical" as const,
    title: "Resistance Bands Set",
    summary: "Yesterday you lost $87",
    metricLabel: "Margin",
    metricValue: "-14%",
    cause: "High refund rate (22%)",
    action: "Review recent returns or pause SKU"
  },
  {
    tone: "warning" as const,
    title: "Yoga Mat Pro",
    summary: "Margin dropped 28% vs last week",
    metricLabel: "Likely cause",
    metricValue: "Amazon fees",
    cause: "Increased Amazon fees",
    action: "Review pricing or fee changes"
  },
  {
    tone: "warning" as const,
    title: "Foam Roller",
    summary: "Refund rate increased 35%",
    metricLabel: "Likely cause",
    metricValue: "Quality issues",
    cause: "Product quality issues",
    action: "Check recent reviews"
  }
];

export default function Page() {
  return (
    <main className="pb-12">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-200 shadow-glow">
              <BarChart3 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Profit Leak Detector</p>
              <p className="text-xs text-slate-400">Amazon margin intelligence</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#alerts" className="transition hover:text-white">
              Alerts
            </a>
            <a href="#value" className="transition hover:text-white">
              Value
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              How it works
            </a>
          </nav>

          <Button asChild size="sm">
            <a href="#lead-form">Get Free Profit Audit</a>
          </Button>
        </div>
      </header>

      <Hero />

      <section id="alerts" className="py-20 sm:py-24">
        <div className="section-shell">
          <div className="flex max-w-2xl flex-col gap-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-red-100">
              <ShieldAlert className="h-4 w-4" />
              Example alerts
            </div>
            <h2 className="section-title">
              Real alerts that make margin problems impossible to ignore
            </h2>
            <p className="section-copy">
              Product-style alert cards designed to show sellers exactly where
              profit is leaking and what to do next.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {alerts.map((alert, index) => (
              <div
                key={alert.title}
                className="animate-fade-up [animation-delay:var(--delay)]"
                style={{ ["--delay" as string]: `${index * 120}ms` }}
              >
                <AlertCard {...alert} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ValueProps />
      <HowItWorks />

      <section className="py-8 sm:py-12">
        <div className="section-shell">
          <div className="section-card flex flex-col items-start justify-between gap-6 overflow-hidden p-8 sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                Ready to stop the leaks?
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Stop guessing. Start protecting your margins.
              </h2>
            </div>
            <Button asChild size="lg">
              <a href="#lead-form">
                Get Free Profit Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <LeadForm />
    </main>
  );
}
