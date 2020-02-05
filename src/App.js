import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import API from './Components/API';

function App() {

    return (
    <div className="App">
      <Nav />
      <API />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        
      </header>
    </div>
  );
        


}


export default App;