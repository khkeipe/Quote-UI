import { SUCCESSFUL_POOL_CREATION, 
	FAILED_INVALID_REQUEST, 
	FAILED_BAD_REQUEST, 
	FAILED_INTERNAL_SERVER_ERROR, 
	POOL_UPDATE } from '../actions/action-types';

const initialState = {
	authUser: null,
	pool: null,
	errorMessage: ''
}

export const poolReducer = (state = initialState, action) => {

	switch(action.type) {
		case POOL_UPDATE:
			return {
				...state,
				pool: action.payload
			}
		case SUCCESSFUL_POOL_CREATION:
			return {
				...state,
				pool: action.payload,
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