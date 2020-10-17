import { SUCCESSFUL_QUOTE_CREATION, QUOTE_BAD_REQUEST, QUOTE_INTERNAL_SERVER_ERROR, QUOTE_INVALID_REQUEST, QUOTE_UPDATE } from "../actions/action-types"

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
		case QUOTE_INVALID_REQUEST:
		case QUOTE_BAD_REQUEST:
		case QUOTE_INTERNAL_SERVER_ERROR:
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