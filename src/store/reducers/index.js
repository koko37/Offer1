import { combineReducers } from 'redux';
import homes from './homes';
import home from './home';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
  homes,
  home
});

export default rootReducer;
