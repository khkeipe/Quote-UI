import { SUCCESSFUL_LOGIN, 
	FAILED_BAD_REQUEST, 
	FAILED_INVALID_REQUEST, 
	FAILED_INTERNAL_SERVER_ERROR, 
	SUCCESSFUL_LOGOUT, 
	SUCCESSFUL_QUOTE_CREATION, 
	SUCCESSFUL_DEALER_CREATION,
	QUOTE_UPDATE, 
	USER_UPDATE,
	DEALER_UPDATE
	} from "./action-types";

import { authenticate } from '../remote/auth-service';
import { createNewUser } from "../remote/user-service";
import { saveQuote } from '../remote/quote-service';
import { createNewDealer } from "../remote/dealer-service";

export const loginAction = (email, password) => async (dispatch) => {
	
	try {
	let authUser = await authenticate(email, password);
	dispatch({
		type: SUCCESSFUL_LOGIN,
		payload: authUser
	});
	} catch (e) {

		let status = e.response?.status;
		if(status === 400) {
			dispatch({
				type: FAILED_BAD_REQUEST,
				payload: e.response?.data.message
			});
		} else if (status === 401) {
			dispatch({
				type: FAILED_INVALID_REQUEST,
				payload: e.response?.data.message
			});
		} else {
			dispatch({
				type: FAILED_INTERNAL_SERVER_ERROR,
				payload: e.response?.data.message || 'Error: server could not be reached'
			});
		}
	}
}

export const logoutAction = () => async (dispatch) => {
	dispatch({
		type: SUCCESSFUL_LOGOUT ,
		payload: null
	})
}

export const createUserAction = (email, password, role, dealer) => async (dispatch) => {
	
	try {
	let result = await createNewUser(email, password, role, dealer);
	dispatch({
		type: SUCCESSFUL_LOGIN,
		payload: result
	});
	} catch (e) {

		let status = e.response?.status;
		if(status === 400) {
			dispatch({
				type: FAILED_BAD_REQUEST,
				payload: e.response?.data.message
			});
		} else if (status === 401) {
			dispatch({
				type: FAILED_INVALID_REQUEST,
				payload: e.response?.data.message
			});
		} else {
			dispatch({
				type: FAILED_INTERNAL_SERVER_ERROR,
				payload: e.response?.data.message || 'Error: server could not be reached'
			});
		}
	}
}

export const createDealerAction = (dealerName, dealerCode, phone, email, street, city, state, zip) => async (dispatch) => {
	
	try {
	let result = await createNewDealer(dealerName, dealerCode, phone, email, street, city, state, zip);
	dispatch({
		type: SUCCESSFUL_DEALER_CREATION,
		payload: result
	});
	} catch (e) {

		let status = e.response?.status;
		if(status === 400) {
			dispatch({
				type: FAILED_BAD_REQUEST,
				payload: e.response?.data.message
			});
		} else if (status === 401) {
			dispatch({
				type: FAILED_INVALID_REQUEST,
				payload: e.response?.data.message
			});
		} else {
			dispatch({
				type: FAILED_INTERNAL_SERVER_ERROR,
				payload: e.response?.data.message || 'Error: server could not be reached'
			});
		}
	}
}

export const quoteUpdateAction = (quote) => async (dispatch) => {
	dispatch({
		type: QUOTE_UPDATE,
		payload: quote
	});
}

export const userUpdateAction = (user) => async (dispatch) => {
	dispatch({
		type: USER_UPDATE,
		payload: user
	});
}

export const dealerUpdateAction = (dealer) => async (dispatch) => {
	dispatch({
		type: DEALER_UPDATE,
		payload: dealer
	});
}

export const quoteCreatorAction = (quote) => async (dispatch) => {

	try{
		await saveQuote(quote);
	dispatch({
		type: SUCCESSFUL_QUOTE_CREATION,
		payload: 'Your quote has been submitted successfully'
	});
	} catch (e) {
		let status = e.response?.status;
		if(status === 400) {
			dispatch({
				type: FAILED_BAD_REQUEST,
				payload: e.response?.data.message
			});
		} else if(status === 401) {
			dispatch({
				type: FAILED_INVALID_REQUEST,
				payload: e.response?.data.message
			});
		} else {
			dispatch({
				type: FAILED_INTERNAL_SERVER_ERROR,
				payload: e.response?.data.message || 'Error: server could not be reached'
			});
		}
	}
}

