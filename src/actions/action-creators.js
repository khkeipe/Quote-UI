import { SUCCESSFUL_LOGIN, FAILED_BAD_REQUEST, FAILED_INVALID_REQUEST, FAILED_INTERNAL_SERVER_ERROR, SUCCESSFUL_LOGOUT, SUCCESSFUL_QUOTE_CREATION, QUOTE_UPDATE } from "./action-types";

import { authenticate } from '../remote/auth-service';
import { createNewUser } from "../remote/user-service";
import { saveQuote } from '../remote/quote-service';

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

export const signUpAction = (email, password, passwordVerification) => async (dispatch) => {
	
	try {
	let result = await createNewUser(email, password, passwordVerification);
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

export const quoteUpdateAction = (quote) => async (dispatch) => {
	dispatch({
		type: QUOTE_UPDATE,
		payload: quote
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

