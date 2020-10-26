import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = ( props ) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={ igKey }>
                    <span style={{ textTransform: 'capitalize' }}>{ igKey }</span>: { props.ingredients[igKey] }
                </li>
            );
        })

    return (
        <Aux>
            <p>
                Your Order Summary
            </p>
            <p>
                Your delicious burger is ready with following ingredients
            </p>
            <ul>
                { ingredientsSummary }
            </ul>
            <p>
                Total Price: ${ props.price.toFixed(2) }
            </p>
            <p>
                Proceed to checkout?
            </p>
            <Button btnType="Danger"
                clicked={ props.purchaseCancelled }>
                CANCEL
            </Button>
            <Button btnType="Success"
                clicked={ props.purchaseContinued }>
                CONTINUE
            </Button>
        </Aux>
    );
}

export default orderSummary;