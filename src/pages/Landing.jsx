import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  CheckSquare, 
  Calendar, 
  Timer, 
  BarChart3, 
  FileText, 
  ArrowRight, 
  Sparkles,
  Flame,
  ShieldCheck,
  Zap,
  Target
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Subject & Topic Mastery',
    description: 'Break complex college curriculums down into structured topics with real-time completion tracking and progress bars.',
    color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800/60'
  },
  {
    icon: CheckSquare,
    title: 'Smart Task Prioritization',
    description: 'Keep track of assignments, PYQ revisions, and lab submissions with priority tags and due date filters.',
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/60'
  },
  {
    icon: Timer,
    title: 'Distraction-Free Focus',
    description: 'Customizable Pomodoro timer tailored for deep work sessions. Log completed intervals directly into study hours.',
    color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800/60'
  },
  {
    icon: Calendar,
    title: 'Daily & Weekly Planner',
    description: 'Schedule study slots for lectures, revisions, and mock tests with automatic duration calculation.',
    color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/60'
  },
  {
    icon: BarChart3,
    title: 'Productivity Analytics',
    description: 'Understand exactly where your time goes through interactive charts, weekly activity logs, and subject breakdowns.',
    color: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-800/60'
  },
  {
    icon: FileText,
    title: 'Subject Notes Archive',
    description: 'Store concise formulas, key concepts, and quick exam review notes organized seamlessly by subject.',
    color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800/60'
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      {/* Top Navigation */}
      <header className="max-w-7xl mx-auto w-full px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary-600 text-white flex items-center justify-center shadow-md shadow-primary-500/20">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
            StudyFlow
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-xl text-sm font-semibold bg-primary-600 hover:bg-primary-700 text-white shadow-sm transition-all duration-150 inline-flex items-center gap-2"
          >
            <span>Open Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20 text-center flex-1 flex flex-col justify-center items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 border border-primary-200/80 dark:border-primary-800/60 mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-primary-500" />
          <span>The Modern Student Productivity Dashboard</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-3xl leading-[1.15]">
          Study smarter. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-500 dark:from-primary-400 dark:to-indigo-300">
            Stay consistent.
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          StudyFlow helps engineering and college students organize subjects, track pending tasks, schedule focused study sessions, and visualize real academic progress.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            to="/dashboard"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-primary-600 hover:bg-primary-700 text-white shadow-md shadow-primary-500/25 transition-all duration-150 flex items-center justify-center gap-2"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/dashboard"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-all duration-150 flex items-center justify-center"
          >
            Explore Dashboard
          </Link>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-24 w-full text-left">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Everything you need to excel in your academics
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Designed specifically for engineering curriculum workflows and daily study habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border mb-4 ${feature.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Productivity Section */}
        <div className="mt-24 w-full bg-gradient-to-br from-primary-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white text-left relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-primary-200 border border-white/20 mb-4">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Real Momentum</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
              Convert daily study activity into measurable progress
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Unlike generic to-do apps, StudyFlow connects your Pomodoro focus intervals, completed assignments, and subject syllabus topics directly to your study hours and streak analytics.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-md"
            >
              <span>Launch Your Workspace</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary-600" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">StudyFlow</span>
            <span>— Student Study Management Dashboard</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/dashboard" className="hover:text-primary-600 dark:hover:text-primary-400">Dashboard</Link>
            <Link to="/subjects" className="hover:text-primary-600 dark:hover:text-primary-400">Subjects</Link>
            <Link to="/tasks" className="hover:text-primary-600 dark:hover:text-primary-400">Tasks</Link>
            <Link to="/focus" className="hover:text-primary-600 dark:hover:text-primary-400">Focus Timer</Link>
          </div>
          <p>© {new Date().getFullYear()} StudyFlow. Built for focused learning.</p>
        </div>
      </footer>
    </div>
  );
}
