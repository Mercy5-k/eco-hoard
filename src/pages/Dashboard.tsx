import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Footer from "@/components/Footer";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import {
  Server,
  Users,
  HardDrive,
  Activity,
  Cloud,
  Shield,
  Zap,
  Download,
  Upload,
  Settings
} from "lucide-react";

const Dashboard = () => {
  // Sample data for charts
  const storageData = [
    { name: 'Jan', usage: 12 },
    { name: 'Feb', usage: 19 },
    { name: 'Mar', usage: 15 },
    { name: 'Apr', usage: 25 },
    { name: 'May', usage: 22 },
    { name: 'Jun', usage: 35 },
  ];

  const distributionData = [
    { name: 'Documents', value: 45, color: 'hsl(158, 64%, 52%)' },
    { name: 'Images', value: 30, color: 'hsl(188, 95%, 68%)' },
    { name: 'Videos', value: 15, color: 'hsl(158, 64%, 65%)' },
    { name: 'Other', value: 10, color: 'hsl(220, 20%, 16%)' },
  ];

  const storageNodes = [
    { id: 1, name: 'Primary Node - US East', status: 'online', usage: 85, capacity: '50TB' },
    { id: 2, name: 'Secondary Node - EU West', status: 'online', usage: 62, capacity: '50TB' },
    { id: 3, name: 'Backup Node - Asia Pacific', status: 'online', usage: 28, capacity: '25TB' },
    { id: 4, name: 'Emergency Node - US West', status: 'maintenance', usage: 0, capacity: '25TB' },
  ];

  const stats = [
    { label: 'Total Storage', value: '125TB', icon: HardDrive, color: 'text-ngo-green' },
    { label: 'Active Users', value: '1,247', icon: Users, color: 'text-tech-cyan' },
    { label: 'Files Stored', value: '45.2K', icon: Cloud, color: 'text-ngo-green-light' },
    { label: 'Uptime', value: '99.9%', icon: Activity, color: 'text-tech-cyan' },
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-hero border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                NGO Cloud Dashboard
              </h1>
              <p className="text-muted-foreground">
                Monitor and manage your organization&apos;s cloud infrastructure
              </p>
            </div>
            <Button variant="hero" size="lg" className="group">
              <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              Settings
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-gradient-card border-border/50 hover:border-ngo-green/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-dark-surface-hover rounded-lg">
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Storage Usage Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart className="w-5 h-5 text-ngo-green" />
                  <span>Storage Usage Trend</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={storageData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 20%)" />
                    <XAxis dataKey="name" stroke="hsl(180, 20%, 65%)" />
                    <YAxis stroke="hsl(180, 20%, 65%)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(220, 20%, 12%)', 
                        border: '1px solid hsl(220, 15%, 20%)',
                        borderRadius: '8px'
                      }} 
                    />
                    <Bar dataKey="usage" fill="hsl(158, 64%, 52%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Data Distribution Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="w-5 h-5 text-tech-cyan" />
                  <span>Data Distribution</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={distributionData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {distributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Storage Nodes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Server className="w-5 h-5 text-ngo-green" />
                <span>Storage Nodes</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {storageNodes.map((node) => (
                  <div key={node.id} className="flex items-center justify-between p-4 bg-dark-surface rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        node.status === 'online' ? 'bg-ngo-green' : 
                        node.status === 'maintenance' ? 'bg-yellow-500' : 'bg-red-500'
                      }`} />
                      <div>
                        <h3 className="font-medium text-foreground">{node.name}</h3>
                        <p className="text-sm text-muted-foreground capitalize">{node.status}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{node.capacity}</p>
                        <p className="text-xs text-muted-foreground">Capacity</p>
                      </div>
                      <div className="w-32">
                        <Progress 
                          value={node.usage} 
                          className="h-2"
                        />
                        <p className="text-xs text-muted-foreground mt-1">{node.usage}% used</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Upload className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;