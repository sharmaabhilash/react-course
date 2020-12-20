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
import * as burgerBuilderActions from '../../store/actions/index';

class BurgerBuilder extends Component {

    state = {
        purchasing: false
    }

    componentDidMount = () => {
        this.props.onInitIngredients();
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
        if ( this.props.isAuthenticated ) {
            this.setState({
                purchasing: true
            });
        }
        else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
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
        this.props.onPurchaseInit();
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
        let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

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
                        ordered={ this.purchaseHandler }
                        isAuth={ this.props.isAuthenticated } />
                </Aux>
            );

            order = <OrderSummary ingredients={ this.props.ings }
                price={ this.props.ttlPrice }
                purchaseCancelled={ this.purchaseCancelHandler }
                purchaseContinued={ this.purchaseContinueHandler } />;
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
        ings: state.burgerBuilder.ingredients,
        ttlPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientsAdded: ( ingName ) => dispatch( burgerBuilderActions.addIngredients( ingName ) ),
        onIngredientsRemoved: ( ingName ) => dispatch( burgerBuilderActions.removeIngredients( ingName ) ),
        onInitIngredients: () => dispatch( burgerBuilderActions.initIngredients() ),
        onPurchaseInit: () => dispatch( burgerBuilderActions.purchaseInit() ),
        onSetAuthRedirectPath: ( path ) => dispatch(burgerBuilderActions.setAuthRedirectPath( path ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));