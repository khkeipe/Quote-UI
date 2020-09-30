import {client} from './user-client'

export async function getAllPools() {

	let response = await client.get('/pools');
	return response.data;
}