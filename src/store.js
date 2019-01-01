import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';


const initialState = {};

const middleware = [thunk];

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);
