import "./App.css";
import Layout from "./components/Layout/Layout";
import Resume from "./components/pages/Resume/Resume";
import CV from "./components/pages/CV/CV";

import { Route, Redirect, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Layout>
				<Switch>
					<Route path="/" exact>
						<Redirect to="/resume" />
					</Route>
					<Route path="/resume">
						<Resume />
					</Route>
					<Route path="/cv">
						<CV />
					</Route>
					<Route path="/*">
						<Redirect to="/resume" />
					</Route>
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
