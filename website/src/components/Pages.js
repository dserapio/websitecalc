import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Home from './Home';
import Information from './Info';
import Calculator from './Calculator';
import FindRecycler from './FindRecycler';
import Error from './Error';

import '../App.css';

const Pages = () => {
	const paths = [
		{path: "/", Component: Home},
		{path: "/information", Component: Information},
		{path: "/calculator", Component: Calculator},
		{path: "/find-recycler", Component: FindRecycler},
		{path: "/error", Component: Error} //not used well
	]

	return (
		<>
			{paths.map(({ path, Component }) => (
				<Route key={path} exact path={path}>
					{({ match }) => (
						<CSSTransition
							in={match != null}
							timeout={350}
							classNames={Component===Home ? "zoom" : "fade"}
							unmountOnExit
						>
							<div className={Component!==FindRecycler ? "trans" : ""}>
								<Component />
							</div>
						</CSSTransition>
					)}
				</Route>
			))}
		</>
	);
};

export default Pages;
