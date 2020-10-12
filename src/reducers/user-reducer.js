import { SUCCESSFUL_SIGNUP,
	SUCCESSFUL_USER_CREATION, 
	FAILED_INVALID_REQUEST, 
	FAILED_BAD_REQUEST, 
	FAILED_INTERNAL_SERVER_ERROR, 
	USER_UPDATE } from '../actions/action-types';

const initialState = {
	authUser: null,
	user: null,
	errorMessage: ''
}

export const userReducer = (state = initialState, action) => {

	switch(action.type) {
		case USER_UPDATE:
			return {
				...state,
				user: action.payload
			}
		case SUCCESSFUL_USER_CREATION:
			return {
				...state,
				errorMessage: '',
			}
		case SUCCESSFUL_SIGNUP:
			return {
				...state,
				authUser: action.payload,
				errorMessage: ''
			}
		case FAILED_INVALID_REQUEST:
		case FAILED_BAD_REQUEST:
		case FAILED_INTERNAL_SERVER_ERROR:
			return {
				...state,
				errorMessage: action.payload
			}

		default:
			return {
			...state
			}
	}
}