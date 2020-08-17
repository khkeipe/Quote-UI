import { client } from './user-client';

export async function authenticate(email, password) {
	let response = await client.post('/auth', { email, password });
	return await response.data;
}