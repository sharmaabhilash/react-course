import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
}

const INGREDIENTS_PRICES = {
    salad: 0.5,
    tomato: 1.5,
    cheese: 0.6,
    onion: 0.9
}

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngredients = updateObject( state.ingredients, updatedIngredient );
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
    };
    return updateObject( state, updatedState );
}

const removeIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
    const updatedIngredients = updateObject( state.ingredients, updatedIngredient );
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.ingredientName]
    };
    return updateObject( state, updatedState );
}

const setIngredient = (state, action) => {
    const updatedState = {
        ingredients: action.ingredients,
        totalPrice: 4,
        error: false
    }
    return updateObject(state, updatedState);
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionType.ADD_INGREDIENT: 
            return addIngredient(state, action);
        case actionType.REMOVE_INGREDIENT: 
            return removeIngredient(state, action);
        case actionType.SET_INGREDIENTS:
            return setIngredient(state, action);
        case actionType.FETCH_INGREDIENTS_FAILED: 
            return updateObject(state, { error: true });
        default: 
            return state;
    }
}

export default reducer;