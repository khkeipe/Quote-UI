import { combineReducers } from 'redux';
import { loginReducer } from './login-reducer';
import { signUpReducer } from './signup-reducer';
import { quoteReducer } from './quote-reducer';

export const rootReducer = combineReducers({loginReducer, signUpReducer, quoteReducer})