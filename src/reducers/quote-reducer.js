import { SUCCESSFUL_QUOTE_CREATION, FAILED_BAD_REQUEST, FAILED_INTERNAL_SERVER_ERROR, FAILED_INVALID_REQUEST, QUOTE_UPDATE } from "../actions/action-types"

const initialState = {
		quote: {},
		errorMessage: ''
}

export const quoteReducer = (state = initialState, action) => {
	switch(action.type) {
		case QUOTE_UPDATE: {
			return {
				...state,
				quote: action.payload,
				errorMessage: ''
			}
		}
		case SUCCESSFUL_QUOTE_CREATION: {
			return {
				...state,
				quote: action.payload,
				errorMessage: ''
			}
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