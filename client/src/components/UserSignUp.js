import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withContext } from '../Context';
import Form from './Form';

const UserSignUp = ({ context, history }) => {
	const [formData, setFormData] = useState({
		name: '',
		username: '',
		password: '',
		errors: [],
	});

	const { name, username, password, errors } = formData;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = () => {
		// New user payload
		const user = {
			name,
			username,
			password,
		};

		// console.log(context.data.createUser);

		context.data
			.createUser(user)
			.then((errors) => {
				if (errors.length) {
					setFormData((prevState) => ({ ...prevState, errors }));
				} else {
					console.log(
						`${username} is successfully signed up and authenticated!`
					);
				}
			})
			.catch((err) => {
				// handle rejected promises
				console.log(err);
				history.push('/error'); // push to history stack
			});
	};

	const handleCancel = () => {
		history.push('/');
	};

	return (
		<div className="bounds">
			<div className="grid-33 centered signin">
				<h1>Sign Up</h1>
				<Form
					cancel={handleCancel}
					errors={errors}
					submit={(e) => handleSubmit(e)}
					submitButtonText="Sign Up"
					elements={() => (
						<>
							<input
								id="name"
								name="name"
								type="text"
								value={name}
								onChange={(e) => handleChange(e)}
								placeholder="Name"
							/>
							<input
								id="username"
								name="username"
								type="text"
								value={username}
								onChange={(e) => handleChange(e)}
								placeholder="User Name"
							/>
							<input
								id="password"
								name="password"
								type="password"
								value={password}
								onChange={(e) => handleChange(e)}
								placeholder="Password"
							/>
						</>
					)}
				/>
				<p>
					Already have a user account? <Link to="/signin">Click here</Link>{' '}
					to sign in!
				</p>
			</div>
		</div>
	);
};

export default withContext(UserSignUp);
