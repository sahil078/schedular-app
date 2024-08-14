// src/App.js

import React from 'react';
import MentorList from './components/MentorList';
import StudentList from './components/StudentList';
import SessionList from './components/SessionList';
import ScheduleForm from './components/ScheduleForm';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">1x1 Scheduler App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MentorList />
        <StudentList />
        <SessionList />
      </div>
      <ScheduleForm />
    </div>
  );
};

export default App;
