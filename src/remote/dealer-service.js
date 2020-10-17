import {client} from './user-client'

export async function getAllDealers() {

	let response = await client.get('/dealers');
	return response.data;
}

export async function getDealerByName(dealerName) {
	let response = await client.get(`/dealers`, dealerName);
	return response.data;
}

export async function createNewDealer(newDealer) {
	let response = await client.post(`/dealers`, 
	{
		dealerName: newDealer.dealerName,
		dealerCode: newDealer.dealerCode,
		phoneNumber: newDealer.phone, 
		email: newDealer.email,
		streetName: newDealer.street, 
		cityName: newDealer.city, 
		stateName: newDealer.state, 
		zipCode: newDealer.zip,
		users: [],
		quotes: []
	}
	);
	return response.data;
}

export async function getDealerById(id) {
	let response = await client.get(`/dealers/${id}`);
	return response.data;
}