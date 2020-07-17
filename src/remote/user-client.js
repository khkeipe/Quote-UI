import axios from 'axios';

export const userClient = axios.create({
	// baseURL: 'http://localhost:8080',
	baseURL: 'http://khkeipepoolapp-env-1.eba-r3vkk32y.us-east-1.elasticbeanstalk.com',
	headers: {
		'Content-Type': 'application/json'
	}
})