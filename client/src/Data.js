import config from './config';
import axios from 'axios';

const Data = () => {
	const api = async (
		path,
		method = 'GET',
		body = null,
		requiresAuth = false,
		credentials = null
	) => {
		const url = config.apiBaseUrl + path;

		const options = {
			method,
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
		};

		if (requiresAuth) {
			const encodedCredentials = btoa(
				`${credentials.username}:${credentials.password}`
			);

			options.headers['Authorization'] = `Basic ${encodedCredentials}`;
		}

		return axios.post(url, {
			name: 'aaron',
			username: 'randomness@hotmail.com',
			password: 'hello',
		});
	};

	const getUser = async (username, password) => {
		const response = await api(`/users`, 'GET', null, true, {
			username,
			password,
		});
		if (response.status === 200) {
			return response.json().then((data) => data);
		} else if (response.status === 401) {
			return null;
		} else {
			throw new Error();
		}
	};

	const createUser = async (user) => {
		const response = await axios.post(
			'http://localhost:5000/api/users',
			user
		);
		if (response.status === 201) {
			return [];
		} else if (response.status === 400) {
			return response.json().then((data) => {
				return data.errors;
			});
		} else {
			throw new Error();
		}
	};

	return { api, getUser, createUser };
};

export default Data;
