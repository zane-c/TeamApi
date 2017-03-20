import React, { Component } from 'react';
import Member from './Member.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="action-icon">+</div>
            <div className="heading">
                <h1>Team members</h1>
                <h2>You have <span id="team-count">0</span> team members.</h2>
            </div>
        <hr className="line-style"/>
            {element}
        <br/>
      </div>
    );
  }
}

export default App;
