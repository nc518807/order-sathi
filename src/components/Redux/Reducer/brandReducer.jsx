import * as types from '../ActionNames/ActionTypes';

const initialState = {
    brands:[],
    brand: {},
    isloading: false
}

const brandReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_BRAND:
            return {
                ...state,
                brands:action.payload,
                isloading: false
            }
        case types.GET_SINGLE_BRAND:
            return{
                ...state,
                brand: action.payload,
                isloading: false
            }
            default:
                return state
    }
}
export default brandReducer;