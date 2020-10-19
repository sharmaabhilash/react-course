import React from 'react';

import Aux from '../../../hoc/Auxiliary';

const orderSummary = ( props ) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li>
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
                Price: ${ props.price }
            </p>
            <p>
                Proceed to checkout?
            </p>
        </Aux>
    );
}

export default orderSummary;