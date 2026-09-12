import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  CheckSquare, 
  Calendar, 
  Timer, 
  BarChart3, 
  FileText, 
  Settings,
  GraduationCap,
  Sparkles
} from 'lucide-react';

const navigationItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Subjects', path: '/subjects', icon: BookOpen },
  { name: 'Tasks', path: '/tasks', icon: CheckSquare },
  { name: 'Planner', path: '/planner', icon: Calendar },
  { name: 'Focus Timer', path: '/focus', icon: Timer },
  { name: 'Analytics', path: '/analytics', icon: BarChart3 },
  { name: 'Notes', path: '/notes', icon: FileText },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar({ onItemClick }) {
  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-full select-none">
      {/* Brand Header */}
      <div className="h-16 px-6 flex items-center gap-3 border-b border-slate-100 dark:border-slate-800/80">
        <div className="w-9 h-9 rounded-xl bg-primary-600 text-white flex items-center justify-center shadow-md shadow-primary-500/20">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
            StudyFlow
            <span className="text-[10px] px-1.5 py-0.5 rounded-full font-semibold uppercase tracking-wider bg-primary-50 text-primary-600 dark:bg-primary-950/70 dark:text-primary-400 border border-primary-200/50 dark:border-primary-800/50">
              Pro
            </span>
          </span>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">Academic Workspace</p>
        </div>
      </div>

      {/* Navigation List */}
      <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Main Menu
        </div>
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onItemClick}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-primary-50 text-primary-700 dark:bg-primary-950/60 dark:text-primary-300 shadow-sm border border-primary-100 dark:border-primary-900/50 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-800/60'
                }`
              }
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </div>

      {/* Student Profile & Quick Info Card */}
      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 flex items-center justify-center font-semibold text-xs border border-primary-300/40 dark:border-primary-700/40">
            ST
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
              Student
            </p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
              B.Tech IT
            </p>
          </div>
          <GraduationCap className="w-4 h-4 text-slate-400 flex-shrink-0" />
        </div>
      </div>
    </aside>
  );
}
