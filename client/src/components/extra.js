// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { withContext } from '../Context';
// import Form from './Form';

// const UserSignUp = ({ context, history }) => {
// 	const [formData, setFormData] = useState({
// 		firstName: '',
// 		lastName: '',
// 		email: '',
// 		password: '',
// 		confirmedPassword: '',
// 		errors: [],
// 	});

// 	const { firstName, lastName, email, password, confirmedPassword, errors } =
// 		formData;

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData((prevState) => ({
// 			...prevState,
// 			[name]: value,
// 		}));
// 	};

// 	const handleSubmit = () => {
// 		// New user payload
// 		const user = {
// 			firstName,
// 			lastName,
// 			email,
// 			password,
// 			confirmedPassword,
// 		};

// 		// console.log(context.data.createUser);

// 		context.data
// 			.createUser(user)
// 			.then(() => {
// 				console.log(
// 					`${username} is successfully signed up and authenticated!`
// 				);
// 			})
// 			.catch((err) => {
// 				// handle rejected promises
// 				console.log('here', err.response.data);
// 				if (err.response.status === 400) {
// 					console.log('problems here');
// 					setFormData((prevState) => ({
// 						...prevState,
// 						errors: err.response.data['Server validation error'],
// 					}));
// 					console.log('Sign up failed', err.response.data);
// 					console.log(formData);
// 				} else {
// 					console.log('Sign up failed', err);
// 				}
// 				// history.push('/error'); // push to history stack
// 			});
// 	};

// 	const handleCancel = () => {
// 		history.push('/');
// 	};

// 	return (
// 		<div className="bounds">
// 			<div className="grid-33 centered signin">
// 				<h1>Sign Up</h1>
// 				<Form
// 					cancel={handleCancel}
// 					errors={errors}
// 					submit={(e) => handleSubmit(e)}
// 					submitButtonText="Sign Up"
// 					elements={() => (
// 						<>
// 							<input
// 								id="firstName"
// 								name="firstName"
// 								type="text"
// 								value={firstName}
// 								onChange={(e) => handleChange(e)}
// 								placeholder="First Name"
// 							/>
// 							<input
// 								id="lastName"
// 								name="lastName"
// 								type="text"
// 								value={lastName}
// 								onChange={(e) => handleChange(e)}
// 								placeholder="Last Name"
// 							/>
// 							<input
// 								id="email"
// 								name="email"
// 								type="text"
// 								value={email}
// 								onChange={(e) => handleChange(e)}
// 								placeholder="email"
// 							/>
// 							<input
// 								id="password"
// 								name="password"
// 								type="password"
// 								value={password}
// 								onChange={(e) => handleChange(e)}
// 								placeholder="Password"
// 							/>
// 							<input
// 								id="confirmedPassword"
// 								name="confirmedPassword"
// 								type="password"
// 								value={confirmedPassword}
// 								onChange={(e) => handleChange(e)}
// 								placeholder="confirmedPassword"
// 							/>
// 						</>
// 					)}
// 				/>
// 				<p>
// 					Already have a user account? <Link to="/signin">Click here</Link>{' '}
// 					to sign in!
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

// export default withContext(UserSignUp);