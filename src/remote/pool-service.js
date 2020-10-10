import {client} from './user-client'

export async function getAllPools() {

	let response = await client.get('/pools');
	return response.data;
}

export async function createPool(length, width, wallHeight) {
	let response = await client.post('/pools', {
		length: length, 
		width: width, 
		wallHeight: wallHeight
	});
	return response.data;
}