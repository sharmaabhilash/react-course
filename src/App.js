import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephnie', age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (firstName, lastName) => {
    // console.log('Was clicked');
    // DON'T DO THAT: this.state.persons[0].name = 'Abhilash';
    this.setState({
      persons: [
        { name: firstName + lastName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephnie', age: 28 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephnie', age: 28 }
      ]
    });
  }

  render() {

    const styles = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>This is react app</h1>
        <button onClick={() => this.switchNameHandler('Abhilash ', 'Sharma') }
          style={ styles }>
          Switch Name
        </button>
        <Person name={ this.state.persons[0].name } 
          age={ this.state.persons[0].age } />
        <Person name={ this.state.persons[1].name } 
          age={ this.state.persons[1].age }
          click={ this.switchNameHandler.bind(this, 'Sunny ', 'Sharma') }
          changed={ this.nameChangedHandler }>
          My hobbies: racing
        </Person>
        <Person name={ this.state.persons[2].name } 
          age={ this.state.persons[2].age } />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'This is from React.createElement'));
  }
}

export default App;
