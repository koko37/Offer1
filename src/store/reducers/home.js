const initialState = {
  loading: false,
  errors: [],
  home: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'HOME/FETCH.START':
      return {
        ...state,
        loading: true,
        errors: [],
        home: {}
      }
    
    case 'HOME/FETCH.SUCCESS':
      return {
        ...state,
        loading: false,
        errors: [],
        home: action.payload
      }
    
    case 'HOME/FETCH.ERROR':
      return {
        ...state,
        loading: false,
        home: {},
        errors: action.payload.errors
      }
    
    default:
      return state;
  }
}
