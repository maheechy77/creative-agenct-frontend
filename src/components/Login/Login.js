import React from "react";
import { useHistory, useLocation } from "react-router-dom";
//import { auth, googleProvider } from "../../firebase";
import "./Login.css";

const Login = () => {
	let history = useHistory();
	let location = useLocation();
	// const signin = () => {
	// 	auth
	// 		.signInWithPopup(googleProvider)
	// 		.then((res) => {
	// 			setToken();
	// 			history.replace(from);
	// 		})
	// 		.catch((err) => alert(err.message));
	// };

	// const setToken = () => {
	// 	auth.currentUser
	// 		.getIdToken(/* forceRefresh */ true)
	// 		.then(function (idToken) {
	// 			sessionStorage.setItem("token", idToken);
	// 		})
	// 		.catch(function (error) {
	// 			// Handle error
	// 		});
	// }; onClick={signin}

	//let { from } = location.state || { from: { pathname: `/` } };
	return (
		<div className="login">
			<img src="https://i.ibb.co/rcNwXR3/logo.png" alt="logo" />
			<div className="login_container">
				<div className="login_form">
					<h2>Login With</h2>
					<button>Continue with Google</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
