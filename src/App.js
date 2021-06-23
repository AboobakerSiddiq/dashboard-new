import React from 'react';
import './App.css'
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Homepage/>
      </div> 
      </div>
    
  );
}

export default App;
