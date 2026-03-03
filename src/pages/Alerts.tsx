import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { alerts as initialAlerts, AlertEntry } from "@/data/dummy-data";
import { X, AlertCircle, AlertTriangle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const levelConfig = {
  critical: { color: "text-neon-red", bg: "bg-destructive/10 border-destructive/40", icon: AlertCircle },
  warning: { color: "text-neon-amber", bg: "bg-warning/10 border-warning/40", icon: AlertTriangle },
  info: { color: "text-neon-cyan", bg: "bg-accent/10 border-accent/40", icon: Info },
};

const Alerts = () => {
  const [alertList, setAlertList] = useState<AlertEntry[]>(initialAlerts);

  const dismiss = (id: string) => {
    setAlertList((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Alerts</h2>
            <p className="text-sm text-muted-foreground">Real-time security alerts</p>
          </div>
          <span className="text-xs text-muted-foreground">{alertList.length} active</span>
        </div>

        <div className="space-y-3">
          {alertList.map((alert) => {
            const config = levelConfig[alert.level];
            const Icon = config.icon;
            return (
              <div key={alert.id} className={`flex items-start gap-3 rounded-lg border p-4 ${config.bg} animate-slide-in transition-all`}>
                <Icon className={`h-5 w-5 shrink-0 mt-0.5 ${config.color}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{alert.message}</p>
                  <span className="text-xs font-mono text-muted-foreground">{alert.timestamp}</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 h-7 w-7 hover:bg-secondary"
                  onClick={() => dismiss(alert.id)}
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            );
          })}
          {alertList.length === 0 && (
            <div className="text-center py-12 text-muted-foreground text-sm">No active alerts</div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Alerts;
