import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { summaryStats, logsOverTime, userActivity, activityDistribution } from "@/data/dummy-data";
import { ScrollText, Users, AlertTriangle, ShieldAlert } from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell,
} from "recharts";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Dashboard</h2>
          <p className="text-sm text-muted-foreground">Real-time MongoDB security overview</p>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Logs Today" value={summaryStats.totalLogs.toLocaleString()} icon={ScrollText} trend="+12% from yesterday" variant="default" />
          <StatCard title="Active Users" value={summaryStats.activeUsers} icon={Users} trend="7 new today" variant="success" />
          <StatCard title="Anomalies Detected" value={summaryStats.anomaliesDetected} icon={AlertTriangle} trend="+5 in last hour" variant="danger" />
          <StatCard title="Risk Score" value={`${summaryStats.riskScore}%`} icon={ShieldAlert} trend="Medium risk" variant="warning" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Line chart */}
          <div className="bg-card rounded-lg border border-border p-5">
            <h3 className="text-sm font-medium text-foreground mb-4">Logs Over Time</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={logsOverTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 22%)" />
                <XAxis dataKey="time" stroke="hsl(215, 20%, 55%)" fontSize={11} />
                <YAxis stroke="hsl(215, 20%, 55%)" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(217, 33%, 14%)", border: "1px solid hsl(217, 33%, 22%)", borderRadius: "8px", color: "hsl(210, 40%, 92%)" }} />
                <Line type="monotone" dataKey="logs" stroke="hsl(187, 92%, 50%)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="anomalies" stroke="hsl(0, 84%, 55%)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar chart */}
          <div className="bg-card rounded-lg border border-border p-5">
            <h3 className="text-sm font-medium text-foreground mb-4">User Activity Frequency</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={userActivity}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 22%)" />
                <XAxis dataKey="user" stroke="hsl(215, 20%, 55%)" fontSize={11} />
                <YAxis stroke="hsl(215, 20%, 55%)" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(217, 33%, 14%)", border: "1px solid hsl(217, 33%, 22%)", borderRadius: "8px", color: "hsl(210, 40%, 92%)" }} />
                <Bar dataKey="actions" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie chart */}
        <div className="bg-card rounded-lg border border-border p-5 max-w-md">
          <h3 className="text-sm font-medium text-foreground mb-4">Normal vs Anomalous Activity</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={activityDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" paddingAngle={2}>
                {activityDistribution.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "hsl(217, 33%, 14%)", border: "1px solid hsl(217, 33%, 22%)", borderRadius: "8px", color: "hsl(210, 40%, 92%)" }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-2">
            <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-primary" /><span className="text-xs text-muted-foreground">Normal</span></div>
            <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-destructive" /><span className="text-xs text-muted-foreground">Anomalous</span></div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
