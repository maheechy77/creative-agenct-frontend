import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { auth, googleProvider } from "../../firebase";
import "./Login.css";
import axios from "../../axios";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../features/userSlice";

const Login = () => {
	let history = useHistory();
	let location = useLocation();
	const dispatch = useDispatch();

	const signin = () => {
		auth
			.signInWithPopup(googleProvider)
			.then((res) => {
				axios
					.post("/add/user", {
						email: res.user.email,
						isAdmin: false,
					})
					.then((res) => {
						setToken();
						history.replace(from);
					})
					.catch((err) => alert(err.message));
			})
			.catch((err) => alert(err.message));
	};

	const setToken = () => {
		auth.currentUser
			.getIdToken(/* forceRefresh */ true)
			.then(function (idToken) {
				sessionStorage.setItem("token", idToken);
				dispatch(
					setUserToken({
						userToken: idToken,
					})
				);

				//sessionStorage.setItem("token", idToken);
			})
			.catch(function (error) {
				// Handle error
			});
	};

	let { from } = location.state || { from: { pathname: `/dashboard` } };
	return (
		<div className="login">
			<img src="https://i.ibb.co/rcNwXR3/logo.png" alt="logo" />
			<div className="login_container">
				<div className="login_form">
					<h2>Login With</h2>
					<button onClick={signin}>Continue with Google</button>
					<p>
						Go to <Link to="/">Home Page</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
