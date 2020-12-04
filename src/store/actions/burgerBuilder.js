import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredients = ( name ) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredients = ( name ) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

const setIngredients = ( ingredients ) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () => {
    return ( dispatch ) => {
        axios.get('https://react-app-b362c.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch( setIngredients(response.data) );
            })
            .catch(error => {
                dispatch( fetchIngredientsFailed() );
            });
    }
}