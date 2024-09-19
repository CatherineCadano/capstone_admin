// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './components/Admin';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Admin} />
        <Route path="/dashboard" component={AdminDashboard} />
        
        {/* Add a catch-all route for 404 errors */}
        <Route>
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
