import * as actionType from '../actions';

const initialState = {
    ingredients: {
        salad: 0,
        tomato: 0,
        onion: 0,
        cheese: 0
    },
    totalPrice: 4,
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
        default: 
            return state;
    }
}

export default reducer;