import React from 'react';
import { KPICard } from './KPICards';
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  ShoppingCart, 
  Eye, 
  Target,
  Clock,
  Award
} from 'lucide-react';

const kpiData = [
  {
    title: 'Total Revenue',
    value: '$847,392',
    change: 12.5,
    changeLabel: 'vs last month',
    icon: DollarSign,
    color: 'green' ,
    trend: 'up' 
  },
  {
    title: 'Active Users',
    value: '23,847',
    change: 8.2,
    changeLabel: 'vs last month',
    icon: Users,
    color: 'blue' ,
    trend: 'up' 
  },
  {
    title: 'Conversion Rate',
    value: '3.24%',
    change: -2.1,
    changeLabel: 'vs last month',
    icon: Target,
    color: 'amber' ,
    trend: 'down' 
  },
  {
    title: 'Orders',
    value: '1,429',
    change: 15.3,
    changeLabel: 'vs last month',
    icon: ShoppingCart,
    color: 'purple' ,
    trend: 'up' 
  },
  {
    title: 'Page Views',
    value: '284,392',
    change: 7.8,
    changeLabel: 'vs last month',
    icon: Eye,
    color: 'blue' ,
    trend: 'up' 
  },
  {
    title: 'Growth Rate',
    value: '18.7%',
    change: 4.2,
    changeLabel: 'vs last quarter',
    icon: TrendingUp,
    color: 'green',
    trend: 'up' 
  },
  {
    title: 'Avg. Session',
    value: '4m 32s',
    change: -5.4,
    changeLabel: 'vs last month',
    icon: Clock,
    color: 'red' ,
    trend: 'down'
  },
  {
    title: 'Customer Score',
    value: '9.2/10',
    change: 0.8,
    changeLabel: 'vs last month',
    icon: Award,
    color: 'green' ,
    trend: 'up' 
  }
];

export function KPIDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Analytics</h1>
        </div>
        <p className="text-gray-600">Real-time performance metrics and key indicators</p>
        
        {/* Status indicator */}
        <div className="flex items-center space-x-2 mt-4">
          <div className="h-3 w-3 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-500">Live data • Updated 2 minutes ago</span>
        </div>
      </div>
      
      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <div
            key={kpi.title}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <KPICard {...kpi} />
          </div>
        ))}
      </div>
      
      {/* Summary section */}
      <div className="mt-12 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600 mb-1">↗ 6/8</div>
            <div className="text-sm text-gray-600">Metrics Trending Up</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">94.2%</div>
            <div className="text-sm text-gray-600">Overall Health Score</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">$2.4M</div>
            <div className="text-sm text-gray-600">Projected Monthly Revenue</div>
          </div>
        </div>
      </div>
    </div>
  );
}