import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Switch>

        <Route path='/'>
          <Home/>
        </Route>

        <Route path='/home'>
          <Home/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
