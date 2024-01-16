import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChipInput from './Components/ChipInput';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center",marginBottom:"100px",color:"#2656cf"}}>Pick Users</h1>
      <ChipInput/>
    </div>
  );
}

export default App;
