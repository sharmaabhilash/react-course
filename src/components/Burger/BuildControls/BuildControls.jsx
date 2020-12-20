import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Tomato', type: 'tomato' },
    { label: 'Onion', type: 'onion' }
]

const buildControls = ( props ) => {
    return (
        <div className={ classes.BuildControls }>
            <p>
                Price: <strong>${ props.price.toFixed(2) }</strong>
            </p>
            {
                controls.map(ctrl => (
                    <BuildControl key={ ctrl.label } 
                        label={ ctrl.label }
                        added={ () => props.ingredientAdded(ctrl.type) } 
                        removed={ () => props.ingredientRemoved(ctrl.type) }
                        disabledInfo={ props.disabledInfo[ctrl.type] }></BuildControl>
                ))
            }
            <button
                className={ classes.OrderButton }
                disabled={ !props.purchasable }
                onClick={ props.ordered }>
                { props.isAuth ? 'ORDER NOW' : 'SIGNIN TO ORDER' }
            </button>
        </div>
    );
}

export default buildControls;