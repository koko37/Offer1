import { combineReducers } from 'redux';
import homes from './homes';

const rootReducer = combineReducers({
  homes: homes
});

export default rootReducer;
