import { SUCCESSFUL_SIGNUP,
	SUCCESSFUL_USER_CREATION, 
	USER_INVALID_REQUEST, 
	USER_BAD_REQUEST, 
	USER_INTERNAL_SERVER_ERROR, 
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
		case USER_INVALID_REQUEST:
		case USER_BAD_REQUEST:
		case USER_INTERNAL_SERVER_ERROR:
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