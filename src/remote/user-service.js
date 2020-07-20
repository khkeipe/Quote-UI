import  { userClient } from './user-client';

export async function getAllUsers() {

	let response = await userClient.get('/users');
	console.log(response.data);
	
	return response.data;
}

export async function createNewUser(email, password, passwordVerification) {
	let response = await userClient.post('/users', {
		email: email,
		password: password,
		passwordVerification: passwordVerification
	});
	console.log(response.data);

	return response.data;
}