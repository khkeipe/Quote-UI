import { userClient } from './UserClient';

export async function authenticate(email, password) {
	let response = await userClient.post('/auth', (email, password));
	return await response.data;
}