import { DashboardLayout } from "@/components/DashboardLayout";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-2xl">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Settings</h2>
          <p className="text-sm text-muted-foreground">Configure monitoring preferences</p>
        </div>

        <div className="space-y-4">
          {[
            { label: "Real-time log streaming", desc: "Enable live log ingestion from MongoDB", defaultChecked: true },
            { label: "Anomaly detection", desc: "AI-powered anomaly detection engine", defaultChecked: true },
            { label: "Email alerts", desc: "Send email notifications for critical alerts", defaultChecked: false },
            { label: "Slack integration", desc: "Push alerts to Slack channel", defaultChecked: false },
          ].map((setting, i) => (
            <div key={i} className="flex items-center justify-between bg-card border border-border rounded-lg p-4">
              <div>
                <Label className="text-sm text-foreground">{setting.label}</Label>
                <p className="text-xs text-muted-foreground">{setting.desc}</p>
              </div>
              <Switch defaultChecked={setting.defaultChecked} />
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
