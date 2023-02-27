import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const UserSignIn = () => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
		errors: [],
	});

	const { username, password, errors } = formData;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = () => {};

	const handleCancel = () => {};

	return (
		<div className="bounds">
			<div className="grid-33 centered signin">
				<h1>Sign In</h1>
				<Form
					cancel={handleCancel}
					errors={errors}
					submit={handleSubmit}
					submitButtonText="Sign In"
					elements={() => (
						<>
							<input
								id="username"
								name="username"
								type="text"
								value={username}
								onChange={handleChange}
								placeholder="User Name"
							/>
							<input
								id="password"
								name="password"
								type="password"
								value={password}
								onChange={handleChange}
								placeholder="Password"
							/>
						</>
					)}
				/>
				<p>
					Don't have a user account? <Link to="/signup">Click here</Link>{' '}
					to sign up!
				</p>
			</div>
		</div>
	);
};

export default UserSignIn;
