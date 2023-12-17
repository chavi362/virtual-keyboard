import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';

// Configuración de Redux DevTools Extension
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Creación de la tienda sin Redux Thunk
const store = createStore(
  rootReducer,
  composeEnhancers(/* Aquí puedes agregar más middlewares si es necesario */)
);

export default store;
