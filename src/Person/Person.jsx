import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {

    const styles = {
        '@media (min-width: 500px)': {
            width: '500px'
        }
    };

    // return <p>I'm a Person!!! And I'm { Math.floor(Math.random() * 30) } year's old!</p>
    return (
        <div className="Person" style={ styles }>
            <p onClick={ props.click }>I'm { props.name } and I'm { props.age } year's old!</p>
            <p>{ props.children }</p>
            <input type="text" onChange={ props.changed } value={ props.name } />
        </div>
    );
}

export default Radium(person);