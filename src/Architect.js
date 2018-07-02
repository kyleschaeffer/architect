import React, { Component } from 'react';
import './Architect.css';
import logo from './tool.svg';
import Legend from './components/Legend.js';
import DrawingBoard from './components/DrawingBoard.js';



class App extends Component {
  render() {
    return (
      <div className="architect">
        <header className="architect-header">
          <h1 className="architect-title">Welcome to <img src={logo} className="architect-logo" alt="logo" />rchitect</h1>
        </header>
        <div className="blueprint" style={{display:"flex"}}>
          <DrawingBoard style={{flex:"3"}}></DrawingBoard>
          <Legend style={{flex:"1"}}></Legend>
        </div>
        <div>
          
        </div>
      </div>
    );
  }
}

export default App;