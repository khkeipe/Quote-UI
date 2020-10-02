import { combineReducers } from 'redux';
import { loginReducer } from './login-reducer';
import { createUserReducer } from './create-user-reducer';
import { quoteReducer } from './quote-reducer';

export const rootReducer = combineReducers({loginReducer, createUserReducer, quoteReducer})