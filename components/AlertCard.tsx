import { AlertTriangle, ArrowRight, BadgeAlert, TrendingDown } from "lucide-react";

import { cn } from "@/lib/utils";

type AlertTone = "critical" | "warning";

type AlertCardProps = {
  tone: AlertTone;
  title: string;
  summary: string;
  metricLabel: string;
  metricValue: string;
  cause: string;
  action: string;
};

const toneStyles: Record<
  AlertTone,
  {
    border: string;
    glow: string;
    badge: string;
    icon: typeof BadgeAlert;
    text: string;
  }
> = {
  critical: {
    border: "border-red-500/30",
    glow: "shadow-[0_18px_60px_rgba(239,68,68,0.16)]",
    badge: "bg-red-500/15 text-red-200 ring-1 ring-inset ring-red-500/30",
    icon: BadgeAlert,
    text: "text-red-300"
  },
  warning: {
    border: "border-orange-400/30",
    glow: "shadow-[0_18px_60px_rgba(251,146,60,0.14)]",
    badge: "bg-orange-400/15 text-orange-100 ring-1 ring-inset ring-orange-400/30",
    icon: AlertTriangle,
    text: "text-orange-200"
  }
};

export function AlertCard({
  tone,
  title,
  summary,
  metricLabel,
  metricValue,
  cause,
  action
}: AlertCardProps) {
  const style = toneStyles[tone];
  const Icon = style.icon;

  return (
    <article
      className={cn(
        "group rounded-[26px] border bg-slate-950/85 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-950",
        style.border,
        style.glow
      )}
    >
      <div className="mb-6 flex items-center justify-between">
        <div className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]", style.badge)}>
          <Icon className="h-3.5 w-3.5" />
          {tone === "critical" ? "Critical leak" : "Warning"}
        </div>
        <TrendingDown className={cn("h-5 w-5", style.text)} />
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">SKU</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
        </div>

        <p className="text-lg font-medium leading-7 text-slate-100">{summary}</p>

        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>{metricLabel}</span>
            <span className={cn("font-semibold", style.text)}>{metricValue}</span>
          </div>
        </div>

        <div className="space-y-3 text-sm leading-6 text-slate-300">
          <p>
            <span className="font-semibold text-white">Likely cause:</span> {cause}
          </p>
          <p>
            <span className="font-semibold text-white">Suggested action:</span> {action}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors duration-200 group-hover:text-white">
        Open alert details
        <ArrowRight className="h-4 w-4" />
      </div>
    </article>
  );
}
