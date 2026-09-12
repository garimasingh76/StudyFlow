import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle2, Clock, ListChecks } from 'lucide-react';

export default function SubjectDetails() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      {/* Back Link */}
      <div>
        <Link
          to="/subjects"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Subjects</span>
        </Link>
      </div>

      {/* Header */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              Subject Details: {id}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Syllabus progress, topic checklists, and associated tasks
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs text-center">
        <ListChecks className="w-8 h-8 text-slate-400 mx-auto mb-2" />
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Topics & Progress View
        </p>
        <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
          Full topic creation, completion toggles, and dynamic progress bar calculations will be implemented in Phase 5.
        </p>
      </div>
    </div>
  );
}
