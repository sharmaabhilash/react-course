import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is react app</h1>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">My hobbies: racing</Person>
        <Person name="Steph" age="26" />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'This is from React.createElement'));
  }
}

export default App;
