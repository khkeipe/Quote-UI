import { SUCCESSFUL_CONTACT_CREATION } from "../actions/action-types"

const initialState = {
	contactInfo: {}
}

export const quoteReducer = (state = initialState, action) => {
	switch(action.type) {
		case SUCCESSFUL_CONTACT_CREATION:
			return {
				...state,
				contactInfo: action.payload
			}
		default:
			return {
				...state
			}
	}
}