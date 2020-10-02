import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    
    const btnClass = [];

    if (props.showPersons) {
        btnClass.push(classes.Red);
    }

    const assignedClasses = [];

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={ classes.Cockpit }>
            <h1>This is react app</h1>
            <p className={ assignedClasses.join(' ') }>This is a paragraph</p>
            <button onClick={ props.clicked }
                className={ btnClass.join(' ') }>
                Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;