import  { userClient } from './UserClient';

export async function getAllUsers(){

	let response = await userClient.get('/users');
	console.log(response.data);
	
	return response.data;
}