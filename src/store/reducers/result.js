import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0,
    result: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, { result: state.result.concat({ id: new Date(), value: action.counter }) });
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [ ...state.result ];
            // newArray.splice(id, 1);
            const updatedResult = state.result.filter(result => result.id !== action.resultElId);
            return updateObject(state, { result: updatedResult });
        default:
            return state;
    }
}

export default reducer;