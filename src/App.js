import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  state = {
    persons: [
      { id: 'asd1', name: 'Max', age: 28 },
      { id: 'euiiy1', name: 'Manu', age: 29 },
      { id: '7632ee', name: 'Stephnie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
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

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [
      ...this.state.persons
    ];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [ ...this.state.persons ];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const showPerson = this.state.showPersons;
    this.setState({
      showPersons: !showPerson
    });
  }

  render() {
    let persons = null;
    const btnClass = [ classes.Button ];

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <ErrorBoundary key={ person.id }>
                <Person 
                  click={ () => this.deletePersonsHandler(index) }
                  name={ person.name } 
                  age={ person.age }
                  changed={ (event) => this.nameChangedHandler(event, person.id) } />
              </ErrorBoundary>
            })
          }
        </div>
      );

      btnClass.push(classes.Red);
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={ classes.App }>
        <h1>This is react app</h1>
        <p className={ assignedClasses.join(' ') }>This is a paragraph</p>
        <button onClick={ this.togglePersonsHandler }
          className={ btnClass.join(' ') }>
          Toggle Persons
        </button>
        { persons }
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'This is from React.createElement'));
  }
}

export default App;
