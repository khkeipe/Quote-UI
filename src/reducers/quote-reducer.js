import { SUCCESSFUL_QUOTE_CREATION } from "../actions/action-types"

const initialState = {
		quote: {}
}

export const quoteReducer = (state = initialState, action) => {
	switch(action.type) {
		case SUCCESSFUL_QUOTE_CREATION: {
			return {
				...state,
				quote: action.payload
			}
		}
		default:
			return {
				...state
			}
	}
}