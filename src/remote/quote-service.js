import { client } from './user-client'; 

export async function saveQuote(newQuote) {

	let response = await client.post('/quotes', newQuote);
	return response.data;
};

export async function getAllQuotes() {
	let response = await client.get('/quotes');
	return response.data;
}