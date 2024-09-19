import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Calendar from './Calendar';
import Charts from './Charts';
import Events from './Events';
import Emails from './Emails';
import Supplies from './Supplies';

const AdminDashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '250px', padding: '20px', flex: 1 }}>
        <h1>Admin Dashboard</h1>
        <Switch>
          <Route path="/dashboard/calendar" component={Calendar} />
          <Route path="/dashboard/charts" component={Charts} />
          <Route path="/dashboard/events" component={Events} />
          <Route path="/dashboard/emails" component={Emails} />
          <Route path="/dashboard/supplies" component={Supplies} />
          <Route path="/dashboard" exact>
            <h2>Welcome to the Admin Dashboard!</h2>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default AdminDashboard;
