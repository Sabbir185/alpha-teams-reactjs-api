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

        <Route path="/team/:teamId">
          <TeamDetails/>
        </Route>

        <Route path='*'>
          <NotFound/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
