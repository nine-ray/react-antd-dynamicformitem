import React from 'react';
import logo from './logo.svg';
import FormTest from "./components/FormTest"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <FormTest/>
      </header>
    </div>
  );
}

export default App;
