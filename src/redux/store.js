import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    rootReducer,
    composeEnhancers()
);

export default store;
