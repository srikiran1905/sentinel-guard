import { DashboardLayout } from "@/components/DashboardLayout";
import { anomalies } from "@/data/dummy-data";
import { AlertTriangle, ShieldAlert, Info } from "lucide-react";

const riskConfig = {
  High: { color: "text-neon-red", bg: "bg-destructive/15 border-destructive/30", icon: ShieldAlert, glow: "glow-red" },
  Medium: { color: "text-neon-amber", bg: "bg-warning/15 border-warning/30", icon: AlertTriangle, glow: "" },
  Low: { color: "text-neon-cyan", bg: "bg-accent/15 border-accent/30", icon: Info, glow: "" },
};

const Anomalies = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Anomalies</h2>
          <p className="text-sm text-muted-foreground">AI-detected anomalous behavior in MongoDB operations</p>
        </div>

        <div className="grid gap-4">
          {anomalies.map((anomaly) => {
            const config = riskConfig[anomaly.riskLevel];
            const Icon = config.icon;
            return (
              <div key={anomaly.id} className={`rounded-lg border p-5 ${config.bg} ${config.glow} animate-slide-in transition-all hover:scale-[1.01]`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-5 w-5 ${config.color}`} />
                    <span className={`text-sm font-bold ${config.color}`}>{anomaly.riskLevel} Risk</span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{anomaly.timestamp}</span>
                </div>
                <p className="text-sm text-foreground mb-3">{anomaly.explanation}</p>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span>User: <span className="text-foreground font-mono">{anomaly.user}</span></span>
                  <span>Action: <span className="text-neon-cyan font-mono">{anomaly.action}</span></span>
                  <span>Baseline: <span className="text-foreground">{anomaly.baseline}</span></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Anomalies;
