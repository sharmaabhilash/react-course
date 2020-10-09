import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('Person.js render');
        
        // return <p>I'm a Person!!! And I'm { Math.floor(Math.random() * 30) } year's old!</p>

        return (
            <Auxiliary>
                { this.context.authenticated ? <p>Authenticated</p> : <p>Please login</p> }
                <p onClick={ this.props.click }
                    key="i1">
                    I'm { this.props.name } and I'm { this.props.age } year's old!
                </p>
                <p key="i2">{ this.props.children }</p>
                <input type="text" 
                    key="i3"
                    // ref={ (inputEl) => { this.inputElement = inputEl } }
                    ref={ this.inputElementRef }
                    onChange={ this.props.changed } 
                    value={ this.props.name } />
            </Auxiliary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);