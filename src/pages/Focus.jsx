import React from 'react';
import { Timer, Play, RotateCcw, FastForward, Sparkles } from 'lucide-react';

export default function Focus() {
  const modes = [
    { label: 'Focus', time: '25:00', active: true },
    { label: 'Short Break', time: '05:00', active: false },
    { label: 'Long Break', time: '15:00', active: false },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center pb-2 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Focus Pomodoro Timer
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
          Eliminate distractions, maintain deep focus intervals, and log study time.
        </p>
      </div>

      {/* Mode Selector */}
      <div className="flex justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 max-w-sm mx-auto">
        {modes.map((m) => (
          <button
            key={m.label}
            type="button"
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
              m.active
                ? 'bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Timer Container Card */}
      <div className="p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md text-center space-y-8">
        <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full border-4 border-primary-500/20 flex flex-col items-center justify-center relative shadow-inner">
          <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-mono">
            25:00
          </span>
          <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 mt-1 uppercase tracking-widest">
            Focus Session
          </span>
        </div>

        {/* Controls Preview */}
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            className="w-11 h-11 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="px-8 py-3 rounded-2xl bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm shadow-md shadow-primary-500/25 transition-all flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Start Focus</span>
          </button>
          <button
            type="button"
            className="w-11 h-11 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Skip"
          >
            <FastForward className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-400">
          In Phase 9, this timer will count down in real-time, link to your active subjects, and contribute completed minutes to study hours and streak analytics.
        </p>
      </div>
    </div>
  );
}
