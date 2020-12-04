import * as actionType from '../actions/actionTypes';

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

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionType.ADD_INGREDIENT: 
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
            };
        case actionType.REMOVE_INGREDIENT: 
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.ingredientName]
            };
        case actionType.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: 4,
                error: false
            };
        case actionType.FETCH_INGREDIENTS_FAILED: 
            return {
                ...state,
                error: true
            };
        default: 
            return state;
    }
}

export default reducer;