import { createContext, useState } from 'react';
import Data from './Data';

export const Context = createContext();

const Provider = ({ children }) => {
	const [data] = useState(Data());
	const [authenticatedUser, setAuthenticatedUser] = useState(null);

	const signIn = async (email, password) => {
		const user = await data.getUser(email, password);

		if (user !== null) {
			setAuthenticatedUser(user);
			return user;
		}
	};

	const value = {
		authenticatedUser,
		data,
		actions: {
			signIn,
		},
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

const Consumer = Context.Consumer;

const withContext = (Component) => {
	return function ContextComponent(props) {
		return (
			<Context.Consumer>
				{(context) => <Component {...props} context={context} />}
			</Context.Consumer>
		);
	};
};

export { Provider, Consumer, withContext };
