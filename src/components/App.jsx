import React from 'react';
import logo from '../images/ttt_logo.svg';
import Announcement from './Announcement';
import Board from './Board';
import './App.css';

const App = () => (
  <div className="app">
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <h1 className="app-title">Tic Tac Toe</h1>
    </header>
    <div className="app-intro">
      <Announcement />
      <Board />
    </div>
  </div>
);

export default App;
