// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/dashboard/calendar">Calendar</Link></li>
        <li><Link to="/dashboard/charts">Charts</Link></li>
        <li><Link to="/dashboard/events">Events</Link></li>
        <li><Link to="/dashboard/emails">Emails</Link></li>
        <li><Link to="/dashboard/supplies">Supplies</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
