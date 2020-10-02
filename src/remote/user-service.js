import  { client } from './user-client';

export async function getAllUsers() {

	let response = await client.get('/users');
	console.log(response.data);
	
	return response.data;
}

export async function createNewUser(email, password, passwordVerification) {
	let response = await client.post('/users', {
		email: email,
		password: password,
		passwordVerification: passwordVerification
	});
	console.log(response.data);

	return response.data;
}

export async function getUserById(id) {
	let response = await client.get(`/users/${id}`);
	return response.data;
}