import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import TeamDetails from './components/TeamDetails/TeamDetails';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/home'>
          <Home/>
        </Route>

        <Router path='/team/:teamId'>
          <TeamDetails></TeamDetails>
        </Router>

        <Router path='*'>
          <NotFound/>
        </Router>
        
      </Switch>
    </Router>
  );
}

export default App;
