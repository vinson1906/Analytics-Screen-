import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';


const colorVariants = {
  blue: {
    bg: 'from-blue-50 to-blue-100/50',
    iconBg: 'bg-blue-500',
    text: 'text-blue-600',
    border: 'border-blue-200'
  },
  green: {
    bg: 'from-emerald-50 to-emerald-100/50',
    iconBg: 'bg-emerald-500',
    text: 'text-emerald-600',
    border: 'border-emerald-200'
  },
  purple: {
    bg: 'from-purple-50 to-purple-100/50',
    iconBg: 'bg-purple-500',
    text: 'text-purple-600',
    border: 'border-purple-200'
  },
  amber: {
    bg: 'from-amber-50 to-amber-100/50',
    iconBg: 'bg-amber-500',
    text: 'text-amber-600',
    border: 'border-amber-200'
  },
  red: {
    bg: 'from-red-50 to-red-100/50',
    iconBg: 'bg-red-500',
    text: 'text-red-600',
    border: 'border-red-200'
  }
};

export function KPICard({ 
  title, 
  value, 
  change, 
  changeLabel, 
  icon: Icon, 
  color, 
  trend = 'neutral' 
}) {
  const colors = colorVariants[color];
  const isPositive = trend === 'up' || (trend === 'neutral' && change > 0);
  
  return (
    <div className={`relative group bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer`}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 ${colors.iconBg} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-200`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className={`text-sm font-medium px-3 py-1 rounded-full ${isPositive ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
            {isPositive ? '↗' : '↘'} {Math.abs(change)}%
          </div>
        </div>
        
        {/* Main content */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">{title}</h3>
          <p className="text-3xl font-bold text-gray-900 group-hover:scale-105 transition-transform duration-200">
            {value}
          </p>
          <p className="text-sm text-gray-500">{changeLabel}</p>
        </div>
        
        {/* Progress indicator */}
        <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full ${colors.iconBg} rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${Math.min(Math.abs(change) * 2, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}