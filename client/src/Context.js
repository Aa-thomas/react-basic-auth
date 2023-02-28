import React, { useState } from 'react';
import Data from './Data';

export const Context = React.createContext();

const Provider = ({ children }) => {
	const [data] = useState(Data());

	const value = {
		data,
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
