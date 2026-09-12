import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout
import AppLayout from './components/layout/AppLayout';

// Pages
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Subjects from './pages/Subjects';
import SubjectDetails from './pages/SubjectDetails';
import Tasks from './pages/Tasks';
import Planner from './pages/Planner';
import Focus from './pages/Focus';
import Analytics from './pages/Analytics';
import Notes from './pages/Notes';
import Settings from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Authenticated/Dashboard Shell with AppLayout */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/subjects/:id" element={<SubjectDetails />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/focus" element={<Focus />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
