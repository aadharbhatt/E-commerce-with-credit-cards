import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import createDebounce from 'redux-debounce';
import portalReducer from './portal/portal.reducer';
// import commonReducer from './common/common.reducer';

const composeEnhancers = compose;

export default () => {
  console.log(portalReducer);
  const allReducers = { ...portalReducer };
  const rootReducer = combineReducers(allReducers);
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(createDebounce(), thunk, logger))
  );
  return store;
};
