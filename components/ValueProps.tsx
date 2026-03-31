import { CheckCircle2, LineChart, Siren } from "lucide-react";

const items = [
  {
    icon: CheckCircle2,
    title: "Know exactly which SKUs are losing money",
    copy:
      "Pinpoint products with negative margins, high refunds, or rising fees before they quietly drain profit."
  },
  {
    icon: LineChart,
    title: "Catch margin drops before they scale",
    copy:
      "Spot fee changes, refund spikes, and price pressure early enough to protect healthy unit economics."
  },
  {
    icon: Siren,
    title: "Get daily alerts with clear actions",
    copy:
      "Every alert includes the likely cause and the next best move so your team can act fast."
  }
];

export function ValueProps() {
  return (
    <section id="value" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
            Why sellers use it
          </p>
          <h2 className="section-title mt-4">
            Clear visibility into the products that are quietly killing margin
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="section-card animate-fade-up p-6 [animation-delay:var(--delay)]"
                style={{ ["--delay" as string]: `${index * 120}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
