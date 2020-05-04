import React from 'react';
import './App.css';
import Router from './Router'
// import Homepage from './Pages/Homepage';
import Header from './header/header'

function App() {
  return (
    <div>
       <Header></Header>     
    {/* <Homepage></Homepage> */}
    <Router></Router>
    </div>
  );
}

export default App;
