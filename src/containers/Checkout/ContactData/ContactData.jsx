import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipcode: '',
            country: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        
        const data = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Abhilash',
                email: 'test@text.com',
                address: {
                    street: 'test',
                    zipcode: '451454',
                    country: 'Bharat'
                }
            }
        };

        axios.post('/order.json', data)
            .then(response => {
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({
                    loading: false
                });
            });
    }

    render () {
        let form = (
            <form>
                <input className={ classes.Input } type="text" name="name" placeholder="Your Name" />
                <input className={ classes.Input } type="email" name="email" placeholder="Your Email" />
                <input className={ classes.Input } type="text" name="street" placeholder="Your Street" />
                <input className={ classes.Input } type="text" name="postal" placeholder="Your Postal Code" />
                <Button btnType="Success"
                    clicked={ this.orderHandler }>
                    ORDER
                </Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={ classes.ContactData }>
                <h4>Enter your Contact Data</h4>
                { form }
            </div>
        );
    }
}

export default ContactData;