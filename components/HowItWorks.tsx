import { ArrowRight, Cable, Coins, ScanSearch } from "lucide-react";

const steps = [
  {
    icon: Cable,
    title: "Connect your Amazon store",
    copy: "Securely link your seller data so we can monitor performance across every SKU."
  },
  {
    icon: Coins,
    title: "Add your product costs (1-2 mins)",
    copy: "Enter landed cost inputs once so margin calculations reflect your real economics."
  },
  {
    icon: ScanSearch,
    title: "Get daily alerts on profit leaks",
    copy: "Receive a clean feed of margin drops, refund spikes, and likely causes with next steps."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="section-card overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-200">
              How it works
            </p>
            <h2 className="section-title">Set up in minutes. Start catching leaks tomorrow.</h2>
            <p className="section-copy">
              The workflow is lightweight by design, so you can validate profit
              health without adding another operational burden.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/10 text-orange-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="text-sm font-semibold text-orange-200">
                      0{index + 1}
                    </span>
                    {index < steps.length - 1 ? (
                      <ArrowRight className="hidden h-4 w-4 text-slate-500 lg:block" />
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
