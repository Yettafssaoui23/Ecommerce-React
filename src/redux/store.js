/**
 * we need to do is add middleware to our store
 * whenever actions get fired or dispatched, 
 * we can catch them and then display them.
 *  the middleware, which is the peace in the middle between  actions firing and root reducer,
 */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
 
import rootReducer from './root-reducer';
 
const middlewares = [logger];
 
const store = createStore(rootReducer, applyMiddleware(...middlewares));
 
export default store;
