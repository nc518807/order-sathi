import * as types from '../ActionNames/ActionTypes';

const initialState = {
    products:[],
    product: {},
    isloading: false
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCT:
            return {
                ...state,
                products: action.payload,
                isloading: false
            }
        case types.GET_SINGLE_PRODUCT:
            return{
                ...state,
                product: action.payload,
                isloading:false
            }
            default:
                return state
    }
}
export default productReducer;