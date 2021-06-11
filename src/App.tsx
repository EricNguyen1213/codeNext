import React, { ChangeEvent, FormEvent, FormEventHandler } from 'react';
import { formatDiagnostic } from 'typescript';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Landing} from './Landing';
import {EULA} from './RedirectToEula';
import {Rock} from './Rock';
import {Paper} from './Paper';
import {Scissors} from './Scissors';

function App() {
  
  return (
    <Router> 
      <div className="App">
        <Switch>
          <Route path="/eula">
            <EULA></EULA>
          </Route>
          <Route path="/rock">
            <Rock></Rock>
          </Route>
          <Route path="/paper">
            <Paper></Paper>
          </Route>
          <Route path="/scissors">
            <Scissors></Scissors>
          </Route>
          <Route path="/feed">
            <Landing></Landing>
          </Route>
          <Route path="/">
            <Landing></Landing>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;


















