const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                persons: state.persons.concat({
                    id: Math.random(), // not really unique but good enough here!
                    name: action.personData.name,
                    age: action.personData.age
                })
            };
        case 'DELETE':
            const updatedPerson = state.persons.filter(per => per.id !== action.personId);
            return {
                ...state,
                persons: updatedPerson
            };
        default:
            return state;
    }
}

export default reducer;