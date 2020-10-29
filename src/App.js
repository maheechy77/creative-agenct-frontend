import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import DashBoard from "./components/DashBoard/DashBoard/DashBoard";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import axios from "./axios";

function App() {
	const dispatch = useDispatch();

	const getSetUser = async (user) => {
		await axios
			.get(`/get/${user?.email}`)
			.then((res) => {
				dispatch(
					login({
						uid: user.uid,
						photo: user.photoURL,
						email: user.email,
						displayName: user.displayName,
						isAdmin: res.data[0].isAdmin,
					})
				);
			})
			.catch((error) => alert(error.message));
	};
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				getSetUser(authUser);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);
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
					<ProtectedRoute path="/dashboard/">
						<DashBoard />
					</ProtectedRoute>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
