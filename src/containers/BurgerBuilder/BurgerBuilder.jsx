import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionType from '../../store/actions';

class BurgerBuilder extends Component {

    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount = () => {
        // axios.get('https://react-app-b362c.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({
        //             ingredients: response.data
        //         });
        //     })
        //     .catch(error => {
        //         this.setState({
        //             error: true
        //         });
        //     });
    }

    updatePurchaseState = () => {
        const sum = Object.keys(this.props.ings)
            .map(igKey => {
                return this.props.ings[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
            
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        });
    }

    purchaseContinueHandler = () => {
        // const queryParams = [];
        // for (let i in this.props.ings) {
        //     queryParams.push(
        //         encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings[i])
        //     );
        // }
        // queryParams.push('price=' + this.props.ttlPrice);

        // this.props.history.push({
        //     pathname: '/checkout',
        //     search: '?' + queryParams.join('&')
        // });
        
        this.props.history.push({
            pathname: '/checkout'
        });
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let order = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        if (this.props.ings) {

            burger = (
                <Aux>
                    <Burger ingredients={ this.props.ings } />
                    <BuildControls 
                        ingredientAdded={ this.props.onIngredientsAdded } 
                        ingredientRemoved={ this.props.onIngredientsRemoved } 
                        disabledInfo={ disabledInfo }
                        price={ this.props.ttlPrice }
                        purchasable={ this.updatePurchaseState() }
                        ordered={ this.purchaseHandler } />
                </Aux>
            );

            order = <OrderSummary ingredients={ this.props.ings }
                price={ this.props.ttlPrice }
                purchaseCancelled={ this.purchaseCancelHandler }
                purchaseContinued={ this.purchaseContinueHandler } />;
        }

        if (this.state.loading) {
            order = <Spinner />;
        }

        return (
            <Aux>
                <Modal show={ this.state.purchasing }
                    modalClosed={ this.purchaseCancelHandler }>
                    { order }
                </Modal>
                { burger }
            </Aux>
        );
    };
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        ttlPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientsAdded: (ingName) => dispatch({ type: actionType.ADD_INGREDIENT, ingredientName: ingName }),
        onIngredientsRemoved: (ingName) => dispatch({ type: actionType.REMOVE_INGREDIENT, ingredientName: ingName })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));