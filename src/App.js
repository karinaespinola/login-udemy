import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/" exact>
            Inicio
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
