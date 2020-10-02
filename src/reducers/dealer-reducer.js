import {
	FAILED_INVALID_REQUEST, 
	FAILED_BAD_REQUEST, 
	FAILED_INTERNAL_SERVER_ERROR, 
	DEALER_UPDATE, SUCCESSFUL_DEALER_CREATION } from '../actions/action-types';

const initialState = {
	dealer: null,
	errorMessage: ''
}

export const dealerReducer = (state = initialState, action) => {

	switch(action.type) {
		case DEALER_UPDATE:
			return {
				...state,
				dealer: action.payload
			}
		case SUCCESSFUL_DEALER_CREATION:
			return {
				...state,
				dealer: action.payload,
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