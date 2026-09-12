import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  X, 
  LayoutDashboard, 
  CheckSquare, 
  Calendar, 
  Timer, 
  BookOpen,
  BarChart3,
  FileText,
  Settings
} from 'lucide-react';
import Sidebar from './Sidebar';

export default function MobileNav({ isOpen, onClose }) {
  const bottomNavItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Subjects', path: '/subjects', icon: BookOpen },
    { name: 'Tasks', path: '/tasks', icon: CheckSquare },
    { name: 'Planner', path: '/planner', icon: Calendar },
    { name: 'Focus', path: '/focus', icon: Timer },
  ];

  return (
    <>
      {/* Slide-out Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="relative z-10 w-72 max-w-[80vw] h-full bg-white dark:bg-slate-900 shadow-2xl flex flex-col">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
            <Sidebar onItemClick={onClose} />
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-2 py-1 flex items-center justify-around">
        {bottomNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center py-1.5 px-3 rounded-xl text-[10px] font-medium transition-colors ${
                  isActive
                    ? 'text-primary-600 dark:text-primary-400 font-semibold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`
              }
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
}
