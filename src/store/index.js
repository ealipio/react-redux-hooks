import { combineReducers } from 'redux';
import { createStore } from 'redux';

import lordReducer from '../reducers';

const rootReducer = combineReducers({ lordReducer });

const store = createStore(rootReducer);

export default store;
