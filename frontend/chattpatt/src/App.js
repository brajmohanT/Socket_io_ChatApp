import './App.css';

import {useState, useEffect} from 'react'
import io from 'socket.io-client'
import {nanoid} from "nanoid"
// using the client side documentation 
// using all with npm in docs

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ChattPatt App</h1>
      </header>
    </div>
  );
}

export default App;
