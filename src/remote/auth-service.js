import { userClient } from './user-client';

export async function authenticate(email, password) {
	let response = await userClient.post('/auth', { email, password });
	return await response.data;
}