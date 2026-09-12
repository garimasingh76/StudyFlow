import React from 'react';
import { Settings as SettingsIcon, User, Moon, Sun, Timer, Download, Trash2 } from 'lucide-react';

export default function Settings() {
  return (
    <div className="max-w-3xl space-y-6">
      <div className="pb-2 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Settings & Preferences
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
          Manage your student profile, theme preferences, Pomodoro defaults, and data backups.
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs text-center">
        <SettingsIcon className="w-8 h-8 text-slate-400 mx-auto mb-2" />
        <h2 className="text-base font-bold text-slate-900 dark:text-white mb-1">
          Settings System
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          In Phase 13, this page will handle profile customization (Student, B.Tech Information Technology), theme switching, timer customization, JSON data export, and safe data reset.
        </p>
      </div>
    </div>
  );
}
