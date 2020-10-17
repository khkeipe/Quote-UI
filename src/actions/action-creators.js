import { SUCCESSFUL_LOGIN, 
	LOGIN_BAD_REQUEST, 
	LOGIN_INVALID_REQUEST, 
	LOGIN_INTERNAL_SERVER_ERROR,
	POOL_BAD_REQUEST, 
	POOL_INVALID_REQUEST, 
	POOL_INTERNAL_SERVER_ERROR, 
	USER_BAD_REQUEST, 
	USER_INVALID_REQUEST, 
	USER_INTERNAL_SERVER_ERROR, 
	DEALER_BAD_REQUEST, 
	DEALER_INVALID_REQUEST, 
	DEALER_INTERNAL_SERVER_ERROR, 
	QUOTE_BAD_REQUEST, 
	QUOTE_INVALID_REQUEST, 
	QUOTE_INTERNAL_SERVER_ERROR, 
	SUCCESSFUL_LOGOUT, 
	SUCCESSFUL_QUOTE_CREATION, 
	SUCCESSFUL_DEALER_CREATION,
	QUOTE_UPDATE, 
	USER_UPDATE,
	DEALER_UPDATE,
	SUCCESSFUL_POOL_CREATION,
	POOL_UPDATE,
	SUCCESSFUL_USER_CREATION
	} from "./action-types";

import { authenticate } from '../remote/auth-service';
import { createNewUser } from "../remote/user-service";
import { saveQuote } from '../remote/quote-service';
import { createNewDealer } from "../remote/dealer-service";
import { createPool } from "../remote/pool-service";

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
				type: LOGIN_BAD_REQUEST,
				payload: e.response?.data.message
			});
		} else if (status === 401) {
			dispatch({
				type: LOGIN_INVALID_REQUEST,
				payload: e.response?.data.message
			});
		} else {
			dispatch({
				type: LOGIN_INTERNAL_SERVER_ERROR,
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
		type: SUCCESSFUL_USER_CREATION,
		payload: result
	});
	} catch (e) {

		let status = e.response?.status;
		if(status === 400) {
			dispatch({
				type: USER_BAD_REQUEST,
				payload: e.response?.data.message
			});
		} else if (status === 401) {
			dispatch({
				type: USER_INVALID_REQUEST,
				payload: e.response?.data.message
			});
		} else {
			dispatch({
				type: USER_INTERNAL_SERVER_ERROR,
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
				type: DEALER_BAD_REQUEST,
				payload: e.response?.data.message
			});
		} else if (status === 401) {
			dispatch({
				type: DEALER_INVALID_REQUEST,
				payload: e.response?.data.message
			});
		} else {
			dispatch({
				type: DEALER_INTERNAL_SERVER_ERROR,
				payload: e.response?.data.message || 'Error: server could not be reached'
			});
		}
	}
}

export const createPoolAction = (poolType, poolCode, length, width, height, hopperSize) => async (dispatch) => {
	try {
		let result = await createPool(poolType, poolCode, length, width, height, hopperSize);
		dispatch({
			type: SUCCESSFUL_POOL_CREATION,
			payload: result
		});
	} catch (e) {

		let status = e.response?.status;
		if(status === 400) {
			dispatch({
				type: POOL_BAD_REQUEST,
				payload: e.response?.data.message
			});
		} else if (status === 401) {
			dispatch({
				type: POOL_INVALID_REQUEST,
				payload: e.response?.data.message
			});
		} else {
			dispatch({
				type: POOL_INTERNAL_SERVER_ERROR,
				payload: e.response?.data.message || 'Error: server could not be reached'
			});
		}
	}
};

export const quoteUpdateAction = (quote) => async (dispatch) => {
	dispatch({
		type: QUOTE_UPDATE,
		payload: quote
	});
}

export const poolUpdateAction = (pool) => async (dispatch) => {
	dispatch({
		type: POOL_UPDATE,
		payload: pool
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
				type: QUOTE_BAD_REQUEST,
				payload: e.response?.data.message
			});
		} else if(status === 401) {
			dispatch({
				type: QUOTE_INVALID_REQUEST,
				payload: e.response?.data.message
			});
		} else {
			dispatch({
				type: QUOTE_INTERNAL_SERVER_ERROR,
				payload: e.response?.data.message || 'Error: server could not be reached'
			});
		}
	}
}

