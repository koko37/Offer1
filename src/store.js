import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import promise from 'redux-promise-middleware';

import rootReducer from './store/reducers';

export const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(
      promise,
      createLogger()
    )
  )
);
