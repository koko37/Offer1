const initialState = {
  pending: false,
  loginStatus: false,
  errors: [],
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'AUTH/LOGIN.START':
      return {
        ...state,
        pending: true,
        loginStatus: false,
        errors: []
      }

    case 'AUTH/LOGIN.SUCCESS':
      return {
        ...state,
        pending: false,
        loginStatus: action.payload,
        errors: []
      }

    case 'AUTH/LOGIN.ERROR':
      return {
        ...state,
        pending: false,
        loginStatus: false,
        errors: action.payload
      }

    case 'AUTH/LOGOUT.SUCCESS':
      return {
        ...state,
        pending: false,
        loginStatus: false,
        errors: []
      }
    default:
      return state;
  }
}
