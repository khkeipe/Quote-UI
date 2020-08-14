import { SUCCESSFUL_QUOTE_CREATION, SUCCESSFUL_CONTACT_CREATION } from "../actions/action-types"

const initialState = {
		contactInfo: {},
		quoteInfo: {}
}

export const quoteReducer = (state = initialState, action) => {
	switch(action.type) {
		case SUCCESSFUL_CONTACT_CREATION:
			return {
				...state,
				contactInfo: action.payload
			}
		case SUCCESSFUL_QUOTE_CREATION: {
			return {
				...state,
				quoteInfo: action.payload
			}
		}
		default:
			return {
				...state
			}
	}
}