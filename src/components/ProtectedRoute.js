import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { selectUser } from "./features/user/userSlice";

const ProtectedRoute = ({ children, ...rest }) => {
	const user = useSelector(selectUser);

	return (
		<Route
			{...rest}
			render={({ location }) =>
				user || sessionStorage.getItem("token") ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default ProtectedRoute;
