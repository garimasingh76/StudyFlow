import React from 'react';
import { BarChart3, TrendingUp, PieChart, Calendar, Clock } from 'lucide-react';

export default function Analytics() {
  const timeframes = ['Day', 'Week', 'Month'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Productivity Analytics
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Visualize study patterns, subject distribution, and task completion metrics.
          </p>
        </div>
        <div className="flex gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 self-start sm:self-auto">
          {timeframes.map((tf, idx) => (
            <button
              key={tf}
              type="button"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                idx === 1 
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs' 
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs text-center">
        <BarChart3 className="w-8 h-8 text-slate-400 mx-auto mb-2" />
        <h2 className="text-base font-bold text-slate-900 dark:text-white mb-1">
          Real Chart.js Analytics Dashboard
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          In Phase 11, this dashboard will compute live statistics from your subjects, tasks, and focus sessions, rendering interactive Chart.js bar and doughnut charts.
        </p>
      </div>
    </div>
  );
}
