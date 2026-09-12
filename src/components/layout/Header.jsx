import React from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, Flame, Calendar, Bell } from 'lucide-react';

const routeTitles = {
  '/dashboard': 'Dashboard',
  '/subjects': 'Subjects & Curriculum',
  '/tasks': 'Task Management',
  '/planner': 'Study Planner',
  '/focus': 'Focus Pomodoro Timer',
  '/analytics': 'Productivity Analytics',
  '/notes': 'Study Notes',
  '/settings': 'Settings & Preferences',
};

export default function Header({ onMobileMenuToggle }) {
  const location = useLocation();

  // Determine current page title
  const currentTitle = 
    routeTitles[location.pathname] || 
    (location.pathname.startsWith('/subjects/') ? 'Subject Details' : 'StudyFlow');

  // Today's formatted date
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <header className="h-16 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-20 px-4 md:px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={onMobileMenuToggle}
          aria-label="Open navigation menu"
          className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <h1 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            {currentTitle}
          </h1>
          <p className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{today}</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Streak indicator badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200/80 dark:border-amber-800/60 text-xs font-semibold shadow-xs">
          <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>Active Streak</span>
        </div>

        {/* Student Avatar */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
          <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
            S
          </div>
          <span className="hidden lg:inline text-xs font-medium text-slate-700 dark:text-slate-300">
            Student
          </span>
        </div>
      </div>
    </header>
  );
}
