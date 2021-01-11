import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';

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
            admin
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
