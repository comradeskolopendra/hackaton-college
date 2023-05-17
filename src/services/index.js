import axios from 'axios';
import { SERVICE_CONFIG } from './config';

export const getColleges = async () => {
	try {
		const { data } = await axios.get(`${SERVICE_CONFIG.API}/export/?token=${SERVICE_CONFIG.TOKEN}`);

		return data;
	} catch (err) {
		console.error(err);
	}
};

export const getCollegeById = async id => {
	try {
		const { data } = await axios.get(`${SERVICE_CONFIG.API}/export/${id}/?token=${SERVICE_CONFIG.TOKEN}`);

		return data;
	} catch (err) {
		console.error(err);
	}
};
