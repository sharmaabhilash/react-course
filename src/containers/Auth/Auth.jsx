import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            }
        },
        isSignUp: true
    }

    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules && rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        
        if (rules && rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        
        return isValid;
    }

    inputChangedHandler = ( event, controlName ) => {
        const updateControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }

        this.setState({
            controls: updateControls
        });
    }

    onSubmitHandler = ( event ) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
    }

    switchSignUpHandler = () => {
        this.setState(prevState => {
            return {
                isSignUp: !prevState.isSignUp
            };
        });
    }

    render () {
        const formElements = [];
        for (let key in this.state.controls) {
            formElements.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        const form = formElements.map(formElement => {
            return <Input elementType={ formElement.config.elementType } 
                    elementConfig={ formElement.config.elementConfig } 
                    value={ formElement.config.value }
                    key={ formElement.id }
                    invalid={ !formElement.config.valid }
                    shouldValidate={ formElement.config.validation }
                    touched={ formElement.config.touched }
                    valueType={ formElement.id }
                    changed={ (event) => this.inputChangedHandler(event, formElement.id) } />
        })

        return (
            <div className={ classes.Auth }>
                <form onSubmit={ this.onSubmitHandler }>
                    { form }
                    <Button btnType="Success"
                        clicked={ this.orderHandler }>
                        SUBMIT
                    </Button>
                </form>
                <Button btnType="Danger"
                    clicked={ this.switchSignUpHandler }>
                    SWITCH TO { this.state.isSignUp ? 'SIGN IN' : 'SIGN UP' }
                </Button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, isSignUp ) => dispatch( actions.auth( email, password, isSignUp ) )
    }
}

export default connect(null, mapDispatchToProps)(Auth);
