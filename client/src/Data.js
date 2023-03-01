import config from './config';
import axios from 'axios';

const Data = () => {
	const api = async (
		path,
		method = 'GET',
		requiresAuth = false,
		credentials = null,
		data = null
	) => {
		let requestConfig = {
			url: config.apiBaseUrl + path,
			method,
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
			data,
		};

		if (requiresAuth) {
			const encodedCredentials = btoa(
				`${credentials.username}:${credentials.password}`
			);
			requestConfig.auth = { encodedCredentials };
		}

		return axios(requestConfig);
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
		const response = await api(`/users`, 'POST', false, null, user);
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
