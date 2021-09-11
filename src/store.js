import {createStore, compose, applyMiddleware} from 'redux'
import thunkMiddleWare from 'redux-thunk'
import rootReducer from './rootReducer';


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  
  applyMiddleware(thunkMiddleWare),
);

const store = createStore(rootReducer, enhancer)

export default store