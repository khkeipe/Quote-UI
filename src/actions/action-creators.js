import { SUCCESSFUL_LOGIN, FAILED_BAD_REQUEST, FAILED_INVALID_REQUEST, FAILED_INTERNAL_SERVER_ERROR, SUCCESSFUL_LOGOUT, SUCCESSFUL_QUOTE_CREATION, SUCCESSFUL_CONTACT_CREATION } from "./action-types";

import { authenticate } from '../remote/auth-service';
import { createNewUser } from "../remote/user-service";

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

export const contactCreatorAction = (contactInfo) => async (dispatch) => {
	
	dispatch({
		type: SUCCESSFUL_CONTACT_CREATION,
		payload: contactInfo
	})
}

export const quoteCreatorAction = (quoteInfo) => async (dispatch) => {

	dispatch({
		type: SUCCESSFUL_QUOTE_CREATION,
		payload: quoteInfo
	})
}

