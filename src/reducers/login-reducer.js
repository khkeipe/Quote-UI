import { SUCCESSFUL_LOGIN, FAILED_INVALID_REQUEST, FAILED_BAD_REQUEST, FAILED_INTERNAL_SERVER_ERROR } from '../actions/action-types';

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
		case FAILED_INVALID_REQUEST:
		case FAILED_BAD_REQUEST:
		case FAILED_INTERNAL_SERVER_ERROR:
			return {
				...state,
				errorMessage: action.payload
			}

		default:
			return state
	}
}