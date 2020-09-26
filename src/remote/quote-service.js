import { client } from './user-client'; 

export async function saveQuote(newQuote) {

	let response = await client.post('/quote', newQuote);
	return response.data;
};