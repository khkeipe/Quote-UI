import { combineReducers } from 'redux';
import { loginReducer } from './login-reducer';
import { signUpReducer } from './signup-reducer';

export const rootReducer = combineReducers({loginReducer, signUpReducer})