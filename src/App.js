import React, { } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Routes from './Routes'

function App() {
  // Router will start in app or will live in route container for seperation of concerns.
  return (
    <div className="App">
      <header>Login/Register Header</header>
      {/*
        <h1>Hello. Start of login with router and hooks.</h1>
        <h2>Set-up form with state to process body content for fetch response to login & register</h2>
      */}
      <Router>
        <Routes />
      </Router>
      <footer>login/register footer</footer>
    </div>
  );
}

export default App;
