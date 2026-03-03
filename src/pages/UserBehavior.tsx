import { DashboardLayout } from "@/components/DashboardLayout";
import { userActivity } from "@/data/dummy-data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const UserBehavior = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">User Behavior</h2>
          <p className="text-sm text-muted-foreground">User activity patterns and behavioral analysis</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-5">
          <h3 className="text-sm font-medium text-foreground mb-4">Activity by User</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userActivity} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 22%)" />
              <XAxis type="number" stroke="hsl(215, 20%, 55%)" fontSize={11} />
              <YAxis dataKey="user" type="category" stroke="hsl(215, 20%, 55%)" fontSize={11} width={80} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(217, 33%, 14%)", border: "1px solid hsl(217, 33%, 22%)", borderRadius: "8px", color: "hsl(210, 40%, 92%)" }} />
              <Bar dataKey="actions" fill="hsl(187, 92%, 50%)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* User cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {userActivity.map((u) => (
            <div key={u.user} className="bg-card border border-border rounded-lg p-4 hover:bg-secondary/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xs font-mono text-foreground">{u.user.slice(0, 2).toUpperCase()}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{u.user}</div>
                  <div className="text-xs text-muted-foreground">MongoDB User</div>
                </div>
              </div>
              <div className="text-2xl font-bold font-mono text-foreground">{u.actions}</div>
              <div className="text-xs text-muted-foreground">operations today</div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserBehavior;
