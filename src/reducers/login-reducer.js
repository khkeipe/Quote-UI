import { SUCCESSFUL_LOGIN, LOGIN_INVALID_REQUEST, LOGIN_BAD_REQUEST, LOGIN_INTERNAL_SERVER_ERROR, SUCCESSFUL_LOGOUT } from '../actions/action-types';

const initialState = {
	authUser: null,
	errorMessage: ''
}

export const loginReducer = (state = initialState, action) => {

	switch(action.type) {
		case SUCCESSFUL_LOGIN:
			return {
				...state,
				authUser: action.payload,
				errorMessage: ''
			} 
		case SUCCESSFUL_LOGOUT:
			return {
				...state,
				authUser: null,
				errorMessage: ''
			}
		case LOGIN_INVALID_REQUEST:
		case LOGIN_BAD_REQUEST:
		case LOGIN_INTERNAL_SERVER_ERROR:
			return {
				...state,
				errorMessage: action.payload
			}

		default:
			return state
	}
}