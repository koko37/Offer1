import { combineReducers } from 'redux';
import homes from './homes';
import home from './home';

const rootReducer = combineReducers({
  homes,
  home
});

export default rootReducer;
