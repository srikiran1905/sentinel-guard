import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  variant?: "default" | "success" | "danger" | "warning";
}

const variantStyles = {
  default: "border-border",
  success: "border-primary/30 glow-green",
  danger: "border-destructive/30 glow-red",
  warning: "border-warning/30",
};

const iconVariants = {
  default: "text-muted-foreground",
  success: "text-neon-green",
  danger: "text-neon-red",
  warning: "text-neon-amber",
};

export function StatCard({ title, value, icon: Icon, trend, variant = "default" }: StatCardProps) {
  return (
    <div className={`bg-card rounded-lg border p-5 transition-all hover:bg-secondary/50 ${variantStyles[variant]} animate-slide-in`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-muted-foreground">{title}</span>
        <Icon className={`h-5 w-5 ${iconVariants[variant]}`} />
      </div>
      <div className="text-3xl font-bold text-foreground font-mono">{value}</div>
      {trend && <span className="text-xs text-muted-foreground mt-1 block">{trend}</span>}
    </div>
  );
}
