import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { getProductsReducer } from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    getProducts: getProductsReducer,
})
const middleware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;