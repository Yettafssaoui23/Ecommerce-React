/**
 * we need to do is add middleware to our store
 * whenever actions get fired or dispatched, 
 * we can catch them and then display them.
 *  the middleware, which is the peace in the middle between  actions firing and root reducer,
 */
import { createStore, applyMiddleware } from 'redux';
/**
 * it allows our browser to actually cache our store now depending 
 * on certain configuration options that we're going to set
 */
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
 
import rootReducer from './root-reducer';
 
const middlewares = [logger];
 
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
 
export default { store, persistor };



