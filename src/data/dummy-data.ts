// Dummy data for the SentinelX dashboard

export const summaryStats = {
  totalLogs: 48293,
  activeUsers: 142,
  anomaliesDetected: 23,
  riskScore: 72,
};

export const logsOverTime = [
  { time: "00:00", logs: 1200, anomalies: 3 },
  { time: "02:00", logs: 800, anomalies: 1 },
  { time: "04:00", logs: 600, anomalies: 0 },
  { time: "06:00", logs: 900, anomalies: 2 },
  { time: "08:00", logs: 2400, anomalies: 5 },
  { time: "10:00", logs: 3800, anomalies: 4 },
  { time: "12:00", logs: 4200, anomalies: 7 },
  { time: "14:00", logs: 3900, anomalies: 3 },
  { time: "16:00", logs: 4500, anomalies: 8 },
  { time: "18:00", logs: 3200, anomalies: 2 },
  { time: "20:00", logs: 2100, anomalies: 1 },
  { time: "22:00", logs: 1500, anomalies: 0 },
];

export const userActivity = [
  { user: "admin", actions: 342 },
  { user: "db_service", actions: 1205 },
  { user: "api_user", actions: 876 },
  { user: "backup_svc", actions: 234 },
  { user: "analyst01", actions: 156 },
  { user: "root", actions: 89 },
  { user: "monitor", actions: 567 },
];

export const activityDistribution = [
  { name: "Normal", value: 48270, fill: "hsl(142, 71%, 45%)" },
  { name: "Anomalous", value: 23, fill: "hsl(0, 84%, 55%)" },
];

export interface LogEntry {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  collection: string;
  ipAddress: string;
  status: "Normal" | "Suspicious";
}

export const liveLogs: LogEntry[] = [
  { id: "1", timestamp: "2026-03-03 14:23:01", user: "admin", action: "find", collection: "users", ipAddress: "192.168.1.10", status: "Normal" },
  { id: "2", timestamp: "2026-03-03 14:23:05", user: "api_user", action: "insertMany", collection: "orders", ipAddress: "10.0.0.45", status: "Normal" },
  { id: "3", timestamp: "2026-03-03 14:23:12", user: "root", action: "dropCollection", collection: "sessions", ipAddress: "203.45.67.89", status: "Suspicious" },
  { id: "4", timestamp: "2026-03-03 14:23:18", user: "db_service", action: "aggregate", collection: "analytics", ipAddress: "10.0.0.12", status: "Normal" },
  { id: "5", timestamp: "2026-03-03 14:23:22", user: "unknown", action: "find", collection: "credentials", ipAddress: "185.22.33.44", status: "Suspicious" },
  { id: "6", timestamp: "2026-03-03 14:23:30", user: "backup_svc", action: "mongodump", collection: "*", ipAddress: "10.0.0.5", status: "Normal" },
  { id: "7", timestamp: "2026-03-03 14:23:35", user: "analyst01", action: "find", collection: "logs", ipAddress: "192.168.1.25", status: "Normal" },
  { id: "8", timestamp: "2026-03-03 14:23:41", user: "root", action: "updateMany", collection: "users", ipAddress: "203.45.67.89", status: "Suspicious" },
  { id: "9", timestamp: "2026-03-03 14:23:48", user: "api_user", action: "deleteMany", collection: "temp_data", ipAddress: "10.0.0.45", status: "Normal" },
  { id: "10", timestamp: "2026-03-03 14:23:55", user: "unknown", action: "listCollections", collection: "admin", ipAddress: "91.234.56.78", status: "Suspicious" },
  { id: "11", timestamp: "2026-03-03 14:24:02", user: "monitor", action: "serverStatus", collection: "admin", ipAddress: "10.0.0.1", status: "Normal" },
  { id: "12", timestamp: "2026-03-03 14:24:10", user: "db_service", action: "createIndex", collection: "products", ipAddress: "10.0.0.12", status: "Normal" },
];

export interface AnomalyEntry {
  id: string;
  riskLevel: "Low" | "Medium" | "High";
  explanation: string;
  baseline: string;
  timestamp: string;
  user: string;
  action: string;
}

export const anomalies: AnomalyEntry[] = [
  {
    id: "a1",
    riskLevel: "High",
    explanation: "User 'root' performed dropCollection on 'sessions' — this action has never been observed for this user in the past 90 days.",
    baseline: "0 drop operations expected; 1 detected",
    timestamp: "2026-03-03 14:23:12",
    user: "root",
    action: "dropCollection",
  },
  {
    id: "a2",
    riskLevel: "High",
    explanation: "Unregistered user 'unknown' accessed 'credentials' collection from external IP. Potential credential harvesting attempt.",
    baseline: "No external access expected; 1 detected",
    timestamp: "2026-03-03 14:23:22",
    user: "unknown",
    action: "find on credentials",
  },
  {
    id: "a3",
    riskLevel: "Medium",
    explanation: "User 'root' performed bulk updateMany on 'users' collection — 3x higher than normal hourly rate.",
    baseline: "Avg 2 updates/hr; 6 detected this hour",
    timestamp: "2026-03-03 14:23:41",
    user: "root",
    action: "updateMany",
  },
  {
    id: "a4",
    riskLevel: "Medium",
    explanation: "IP 91.234.56.78 is associated with known Tor exit node. User 'unknown' listing admin collections.",
    baseline: "0 admin queries from external IPs; 1 detected",
    timestamp: "2026-03-03 14:23:55",
    user: "unknown",
    action: "listCollections",
  },
  {
    id: "a5",
    riskLevel: "Low",
    explanation: "User 'api_user' deleteMany on 'temp_data' is within normal range but occurred outside maintenance window.",
    baseline: "Maintenance window: 02:00-04:00; action at 14:23",
    timestamp: "2026-03-03 14:23:48",
    user: "api_user",
    action: "deleteMany",
  },
];

export interface AlertEntry {
  id: string;
  level: "info" | "warning" | "critical";
  message: string;
  timestamp: string;
  dismissed: boolean;
}

export const alerts: AlertEntry[] = [
  { id: "al1", level: "critical", message: "Unauthorized access attempt on 'credentials' collection from external IP 185.22.33.44", timestamp: "2026-03-03 14:23:22", dismissed: false },
  { id: "al2", level: "critical", message: "Collection 'sessions' dropped by user 'root' — potential destructive operation", timestamp: "2026-03-03 14:23:12", dismissed: false },
  { id: "al3", level: "warning", message: "Anomalous bulk update detected on 'users' collection by 'root'", timestamp: "2026-03-03 14:23:41", dismissed: false },
  { id: "al4", level: "warning", message: "Tor exit node detected: IP 91.234.56.78 querying admin database", timestamp: "2026-03-03 14:23:55", dismissed: false },
  { id: "al5", level: "info", message: "Maintenance window violation: 'api_user' performed deleteMany outside scheduled hours", timestamp: "2026-03-03 14:23:48", dismissed: false },
  { id: "al6", level: "info", message: "New index created on 'products' collection by 'db_service'", timestamp: "2026-03-03 14:24:10", dismissed: false },
  { id: "al7", level: "critical", message: "Multiple failed authentication attempts from IP 203.45.67.89", timestamp: "2026-03-03 14:20:05", dismissed: false },
];
