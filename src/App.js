import React from "react";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import DashBoard from "./components/DashBoard/DashBoard/DashBoard";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/user">
						<DashBoard />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
