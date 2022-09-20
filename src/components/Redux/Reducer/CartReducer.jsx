import * as types from '../ActionNames/ActionTypes';

const initialState = {
  carts: [],
  cart: {},
  isLoading: false
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_CART:
      return {
        ...state,
        carts: [...state.carts, action.payload],
        isLoading: false
      }
      case types.GET_CART:
        return {
          ...state,
          carts:action.payload,
          isLoading: false
        }
      case types.DELETE_CART:
        return {
          ...state,
          isLoading: false
        }
  
    default:
      return state
  }
}

export default cartReducer;