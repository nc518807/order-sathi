import * as types from '../ActionNames/ActionTypes';

const initialState = {
  contacts : [],
  contact : {},
  isLoading: false
}

export const ContactReducer = (state =  initialState, action) => {
  switch (action.type) {
    case types.POST_MESSAGE:
      return {
        ...state,
        isLoading: false
      }
  
    default:
      return state
  }
}

export default ContactReducer;