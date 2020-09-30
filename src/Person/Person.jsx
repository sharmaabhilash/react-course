import React from 'react';
import classes from './Person.css';

const person = (props) => {

    const math = Math.random();

    if (math > 0.7) {
        throw new Error('Something went wrong');
    }

    // return <p>I'm a Person!!! And I'm { Math.floor(Math.random() * 30) } year's old!</p>
    return (
        <div className={ classes.Person }>
            <p onClick={ props.click }>I'm { props.name } and I'm { props.age } year's old!</p>
            <p>{ props.children }</p>
            <input type="text" onChange={ props.changed } value={ props.name } />
        </div>
    );
}

export default person;