import { combineReducers } from 'redux';
import { loginReducer } from './login-reducer';
import { userReducer } from './user-reducer';
import { quoteReducer } from './quote-reducer';

export const rootReducer = combineReducers({loginReducer, userReducer, quoteReducer})