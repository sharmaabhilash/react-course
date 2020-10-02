import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = () => {

    const [ personState, setPersonState ] = useState({
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephnie', age: 26 }
        ]
    });

    const switchNameHandler = () => {
        // console.log('Was clicked');
        // DON'T DO THAT: this.state.persons[0].name = 'Abhilash';
        setPersonState({
            persons: [
            { name: 'Abhilash', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephnie', age: 28 }
            ]
        });
    }

    return (
        <div className="App">
        <h1>This is react app</h1>
        <button onClick={ switchNameHandler }>
            Switch Name
        </button>
        <Person name={ personState.persons[0].name } 
            age={ personState.persons[0].age } />
        <Person name={ personState.persons[1].name } 
            age={ personState.persons[1].age }>
            My hobbies: racing
        </Person>
        <Person name={ personState.persons[2].name } 
            age={ personState.persons[2].age } />
        </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'This is from React.createElement'));
}
    
export default app;