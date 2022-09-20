import * as types from '../ActionNames/ActionTypes';

const initialState = {
  logins: [],
  login: {},
  isLoading: false,
}

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_LOGIN:
      return {
        ...state,
        isLoading: false
      }
      case types.LOGOUT:
        return {
          ...state,
          isLoading: false
        }
     
    default:
      return state
  }
}

export default LoginReducer;