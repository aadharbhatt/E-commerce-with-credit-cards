import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createDebounce from 'redux-debounce';
import Cart from '../Cart/Cart.reducer';
import Inventory from './Inventory.reducer';

const rootReducer = combineReducers({
    Cart,
    Inventory
})

export default () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(createDebounce(), thunk)
    );
    return store
};
