import React from 'react';

export default ({ context }) => {
	const authUser = context.authenticatedUser;

	return (
		<div className="bounds">
			<div className="grid-100">
				<h1>{authUser.firstName} is authenticated!</h1>
				<h2> Your username is {authUser.email}</h2>
			</div>
		</div>
	);
};
