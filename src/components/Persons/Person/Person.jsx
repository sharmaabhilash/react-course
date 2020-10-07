import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('Person.js render');
        
        // return <p>I'm a Person!!! And I'm { Math.floor(Math.random() * 30) } year's old!</p>

        return (
            <Auxiliary>
                <p onClick={ this.props.click }>
                    I'm { this.props.name } and I'm { this.props.age } year's old!
                </p>
                <p>{ this.props.children }</p>
                <input type="text" 
                    onChange={ this.props.changed } 
                    value={ this.props.name } />
            </Auxiliary>
        );
    }
}

export default Person;