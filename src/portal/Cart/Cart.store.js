import { combineReducers, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import createDebounce from 'redux-debounce';
import Cart from './Cart.reducer';
import Inventory from '../Inventory/Inventory.reducer';

const rootReducer = combineReducers({
    Cart,
    Inventory
})

export default () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(createDebounce(), thunk, logger)
    );
    return store
};
