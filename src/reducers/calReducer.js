import actionTypes from '../actionTypes'

const initialState = {
    value: 0
}

const calReducer = (state = initialState, action) => {
    let value = state.value;
    switch (action.type) {
        case actionTypes.CLICK_ADD:
            return { ...state, value: value + 1 };
        case actionTypes.CLICK_SUBSTRACT:
            return { ...state, value: value - 1 };
        default:
            return state;
    }
}

export default calReducer;