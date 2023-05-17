import axios from 'axios';
import { SERVER_CONFIG } from './config';

export const getColleges = async () => {
	const { data } = await axios.get(`${SERVER_CONFIG.API}/export/${SERVER_CONFIG.TOKEN}`, {
		headers: {
			'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
			'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
			'Access-Control-Allow-Origin': 'http://10.33.0.34:8000',
			'Access-Control-Allow-Credentials': true,
		},
	});

	return data;
};

export const getCollegeById = async id => {
	const { data } = await axios.get(`${SERVER_CONFIG.API}/getById/${id}`);

	return data;
};
