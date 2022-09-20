import * as types from '../ActionNames/ActionTypes';

const initialState = {
  categories : [],
  category : {},
  isLoading : false
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        isLoading: false
      }
      case types.GET_SINGLE_CATEGORY:
        return {
          ...state,
          category: action.payload,
          isLoading: false
        }
  
    default:
      return state;
  }
}

export default categoryReducer;