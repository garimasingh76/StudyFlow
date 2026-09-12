import React from 'react';
import { 
  BookOpen, 
  CheckSquare, 
  Clock, 
  Flame, 
  Plus, 
  Play, 
  Calendar, 
  FileText,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Greeting Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Good morning, Student
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Here is your academic overview for today. Stay consistent and keep flowing!
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/focus"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-primary-600 hover:bg-primary-700 text-white shadow-xs transition-colors"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Start Focus Timer</span>
          </Link>
        </div>
      </div>

      {/* Statistics Cards Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Subjects</span>
            <BookOpen className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white">4</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Active enrolled</div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Pending Tasks</span>
            <CheckSquare className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white">6</div>
          <div className="text-[11px] text-amber-600 dark:text-amber-400 mt-1 font-medium">3 due today</div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Completed</span>
            <CheckSquare className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white">18</div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-medium">This month</div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Study Hours</span>
            <Clock className="w-4 h-4 text-violet-500" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white">24.5h</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Logged total</div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Streak</span>
            <Flame className="w-4 h-4 text-rose-500 fill-rose-500" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white">5 Days</div>
          <div className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 font-medium">Keep it alive!</div>
        </div>
      </div>

      {/* Quick Actions Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-2.5">
          <Link
            to="/subjects"
            className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5 text-primary-600" />
            <span>Add Subject</span>
          </Link>
          <Link
            to="/tasks"
            className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5 text-emerald-600" />
            <span>Add Task</span>
          </Link>
          <Link
            to="/planner"
            className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>Schedule Session</span>
          </Link>
          <Link
            to="/focus"
            className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 text-rose-600" />
            <span>Start Focus Session</span>
          </Link>
          <Link
            to="/notes"
            className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-600" />
            <span>Add Note</span>
          </Link>
        </div>
      </div>

      {/* Main Dashboard Sections Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Tasks */}
        <div className="lg:col-span-2 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Today's Tasks
            </h2>
            <Link to="/tasks" className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center gap-1">
              <span>View all</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="p-8 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-200 dark:border-slate-700 text-center">
            <CheckSquare className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Interactive tasks dashboard will be integrated in Phase 4 & Phase 7
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Supports inline completion checkboxes, priority indicators, and subject tags.
            </p>
          </div>
        </div>

        {/* Today's Study Plan & Progress */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Today's Study Plan
            </h2>
            <Link to="/planner" className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center gap-1">
              <span>Planner</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="p-8 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-200 dark:border-slate-700 text-center">
            <Calendar className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Study sessions timeline
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Displays scheduled lectures, revisions, and PYQ sessions for today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
