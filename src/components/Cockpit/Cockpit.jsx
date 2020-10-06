import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    console.log('Cockpit.js render');

    useEffect(() => {
        console.log('Cockpit.js useEffect');
        setTimeout(() => {
            alert('Saved');
        }, 1000);
    }, [ props.persons ]);
    
    const btnClass = [];

    if (props.showPersons) {
        btnClass.push(classes.Red);
    }

    const assignedClasses = [];

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={ classes.Cockpit }>
            <h1>{ props.title }</h1>
            <p className={ assignedClasses.join(' ') }>This is a paragraph</p>
            <button onClick={ props.clicked }
                className={ btnClass.join(' ') }>
                Toggle Persons
            </button>
        </div>
    );
};

export default React.memo(cockpit);