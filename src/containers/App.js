import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('App.js Constructor');
  }

  state = {
    persons: [
      { id: 'asd1', name: 'Max', age: 28 },
      { id: 'euiiy1', name: 'Manu', age: 29 },
      { id: '7632ee', name: 'Stephnie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getderivedstatefromprops', props);
    return state;
  }

  componentDidMount() {
    console.log('App.js componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('App.js componentDidUpdate')
    console.log(snapshot);
  }

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
    console.log('App.js render');

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={ this.state.persons }
            clicked={ this.deletePersonsHandler }
            changed={ this.nameChangedHandler } />
        </div>
      );
    }

    return (
      <div className={ classes.App }>
        <Cockpit
          title={ this.props.appTitle }
          personsLength={ this.state.persons.length }
          showPersons={ this.state.showPersons }
          clicked={ this.togglePersonsHandler } />
        { persons }
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'This is from React.createElement'));
  }
}

export default App;
