import {client} from './user-client'

export async function getDealers() {

	let response = await client.get('/dealers');
	return response.data;
}