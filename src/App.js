import React from 'react';
import './App.css'
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Homepage from './components/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Switch>
        <Route exact path="/">
        <Homepage/>
        </Route>
        <Route path="/users">
        <UserList/>
        </Route>
        </Switch>
        
      </div> 
    </Router>
  );
}

export default App;
