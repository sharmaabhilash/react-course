import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('Cockpit.js useEffect');
        toggleBtnRef.current.click();
        // setTimeout(() => {
        //     alert('Saved');
        // }, 1000);
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
                ref={ toggleBtnRef }
                className={ btnClass.join(' ') }>
                Toggle Persons
            </button>
            <button onClick={ authContext.login }>
                Login
            </button>
        </div>
    );
};

export default React.memo(cockpit);