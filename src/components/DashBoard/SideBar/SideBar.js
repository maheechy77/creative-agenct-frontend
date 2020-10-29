import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
	ShoppingCart,
	List,
	Comment,
	Add,
	GroupAdd,
	Home,
} from "@material-ui/icons";

import "./SideBar.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, deleteUserToken } from "../../../features/userSlice";
import { auth } from "../../../firebase";

const SideBar = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const history = useHistory();
	const signOut = () => {
		dispatch(deleteUserToken());
		sessionStorage.getItem("token") && sessionStorage.removeItem("token");
		auth.signOut();
		history.push("/");
	};

	return (
		<div className="sidebar">
			<img src="https://i.ibb.co/rcNwXR3/logo.png" />

			<div className="menus d-flex flex-column mt-5">
				{user?.isAdmin === false ? (
					<>
						<Link to="/dashboard" className="my-2">
							<ShoppingCart />
							Order
						</Link>
						<Link to={`/dashboard/servicelist/${user.uid}`} className="my-2">
							{" "}
							<List />
							Service List
						</Link>
						<Link to="/dashboard/review" className="my-2">
							<Comment />
							Review
						</Link>{" "}
						<Link className="text-warning" onClick={signOut}>
							Logout
						</Link>
					</>
				) : (
					<>
						<Link to="/dashboard" className="my-2">
							{" "}
							<List />
							User Taken Service List
						</Link>
						<Link to="/dashboard/addservices" className="my-2">
							<Add />
							Add Services
						</Link>
						<Link to="/dashboard/addadmin" className="my-2">
							<GroupAdd />
							Make Admin
						</Link>{" "}
						<Link className="text-warning" onClick={signOut}>
							Logout
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default SideBar;
