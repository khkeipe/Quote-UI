import { SUCCESSFUL_LOGIN, FAILED_BAD_REQUEST, FAILED_INVALID_REQUEST, FAILED_INTERNAL_SERVER_ERROR } from "./action-types";

import { authenticate } from '../remote/auth-service';

export const loginAction = (email, password) => async (dispatch) => {
 
	try {
	let authUser = authenticate(email, password);
		console.log(authUser);
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