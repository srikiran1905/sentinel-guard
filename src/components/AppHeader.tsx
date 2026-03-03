import { Bell, Shield } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

export function AppHeader() {
  return (
    <header className="h-14 border-b border-border flex items-center justify-between px-4 bg-card">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-neon-green" />
          <h1 className="text-lg font-bold tracking-tight text-foreground">SentinelX</h1>
          <span className="text-xs text-muted-foreground hidden sm:inline">MongoDB Log Anomaly & Security Monitor</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {/* Status indicator */}
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-neon-green animate-pulse-glow" />
          <span className="text-xs text-muted-foreground hidden md:inline">System Online</span>
        </div>

        {/* Notification bell */}
        <button className="relative p-2 rounded-md hover:bg-secondary transition-colors">
          <Bell className="h-4 w-4 text-muted-foreground" />
          <Badge className="absolute -top-0.5 -right-0.5 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-destructive text-destructive-foreground border-0">
            3
          </Badge>
        </button>

        {/* Admin profile */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-xs font-medium text-foreground">AD</span>
          </div>
          <span className="text-sm text-foreground hidden md:inline">Admin</span>
        </div>
      </div>
    </header>
  );
}
