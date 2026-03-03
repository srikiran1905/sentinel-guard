import { useState, useMemo } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { liveLogs } from "@/data/dummy-data";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const LiveLogs = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    return liveLogs.filter((log) => {
      const matchSearch =
        log.user.toLowerCase().includes(search.toLowerCase()) ||
        log.action.toLowerCase().includes(search.toLowerCase()) ||
        log.collection.toLowerCase().includes(search.toLowerCase()) ||
        log.ipAddress.includes(search);
      const matchStatus = statusFilter === "all" || log.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [search, statusFilter]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Live Logs</h2>
          <p className="text-sm text-muted-foreground">Real-time MongoDB operation logs</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search user, action, collection, IP..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-card border-border"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[160px] bg-card border-border">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Normal">Normal</SelectItem>
              <SelectItem value="Suspicious">Suspicious</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="bg-card rounded-lg border border-border overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 text-muted-foreground font-medium">Timestamp</th>
                <th className="text-left p-3 text-muted-foreground font-medium">User</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Action</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Collection</th>
                <th className="text-left p-3 text-muted-foreground font-medium">IP Address</th>
                <th className="text-left p-3 text-muted-foreground font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((log) => (
                <tr key={log.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="p-3 font-mono text-xs text-muted-foreground">{log.timestamp}</td>
                  <td className="p-3 text-foreground">{log.user}</td>
                  <td className="p-3 font-mono text-neon-cyan text-xs">{log.action}</td>
                  <td className="p-3 text-foreground">{log.collection}</td>
                  <td className="p-3 font-mono text-xs text-muted-foreground">{log.ipAddress}</td>
                  <td className="p-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      log.status === "Suspicious"
                        ? "bg-destructive/20 text-neon-red"
                        : "bg-primary/20 text-neon-green"
                    }`}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LiveLogs;
