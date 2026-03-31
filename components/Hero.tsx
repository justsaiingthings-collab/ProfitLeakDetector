import { ArrowRight, BellRing, ChevronRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="section-shell relative">
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] rounded-[32px] bg-hero-grid bg-[size:36px_36px] opacity-20 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
              <ShieldCheck className="h-4 w-4" />
              Amazon profit monitoring
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Stop losing money silently on Amazon
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              We detect unprofitable SKUs, margin drops, and hidden profit leaks
              before they cost you thousands.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href="#lead-form">
                  Get Free Profit Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#alerts">
                  See Example Alerts
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <BellRing className="h-4 w-4 text-cyan-300" />
                Daily leak alerts
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                Actionable recommendations
              </div>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:120ms]">
            <div className="section-card relative overflow-hidden p-5 sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(38,213,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,120,65,0.14),transparent_30%)]" />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                      Today&apos;s snapshot
                    </p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      Profit Leak Detector
                    </p>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                    3 new alerts
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-red-200">
                          Resistance Bands Set
                        </p>
                        <p className="mt-2 text-3xl font-semibold text-white">
                          -$87
                        </p>
                        <p className="mt-1 text-sm text-red-100/80">
                          Lost yesterday from negative margin
                        </p>
                      </div>
                      <div className="rounded-2xl bg-black/20 px-3 py-2 text-right">
                        <p className="text-xs uppercase tracking-[0.2em] text-red-100/70">
                          Margin
                        </p>
                        <p className="mt-1 text-xl font-semibold text-red-100">
                          -14%
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-slate-400">Margin drops detected</p>
                      <p className="mt-2 text-3xl font-semibold text-white">12</p>
                      <p className="mt-1 text-sm text-orange-200">
                        Across your catalog this week
                      </p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-slate-400">At-risk revenue</p>
                      <p className="mt-2 text-3xl font-semibold text-white">$4,280</p>
                      <p className="mt-1 text-sm text-cyan-200">
                        Recoverable with quick action
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
