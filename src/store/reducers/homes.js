const initialState = {
  loading: false,
  errors: [],
  homes: [],
  pages: {
    count: 0,
    active: 0,
  },
  countPerPage: 30
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'HOME/SEARCH.START':
      return {
        ...state,
        loading: true,
        errors: [],
        homes: []
      }
    case 'HOME/SEARCH.SUCCESS':
      return {
        ...state,
        loading: false,
        homes: action.payload.homes,
        pages: {
          count: action.payload.pageCount,
          active: action.payload.pageNo
        }
      }
    case 'HOME/SEARCH.ERROR':
      return {
        ...state,
        loading: false,
        homes: [],
        errors: action.payload.errors
      }
    default:
      return state;
  }
}
