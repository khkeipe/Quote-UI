import {client} from './user-client'

export async function getAllDealers() {

	let response = await client.get('/dealers');
	return response.data;
}

export async function getDealerByName(dealerName) {
	let response = await client.get(`/dealers`, dealerName);
	return response.data;
}