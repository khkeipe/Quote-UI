import {client} from './user-client'

export async function getAllPools() {

	let response = await client.get('/pools');
	return response.data;
}

export async function createPool(poolType, poolCode, length, width, height, hopperSize) {
	let response = await client.post('/pools', {
		poolType: poolType,
		poolCode: poolCode,
		length: length, 
		width: width, 
		height: height,
		hopperSize: hopperSize
	});
	return response.data;
}