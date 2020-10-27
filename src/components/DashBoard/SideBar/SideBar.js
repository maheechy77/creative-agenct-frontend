import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, List, Comment, Add, GroupAdd } from "@material-ui/icons";

import "./SideBar.css";

const SideBar = () => {
	return (
		<div className="sidebar">
			<img src="https://i.ibb.co/rcNwXR3/logo.png" />

			<div className="menus d-flex flex-column mt-5">
				<Link to="/user" className="my-2">
					<ShoppingCart />
					Order
				</Link>
				<Link to="/servicelist" className="my-2">
					{" "}
					<List />
					Service List
				</Link>
				<Link to="/review" className="my-2">
					<Comment />
					Review
				</Link>
				<Link to="/adminServicelist" className="my-2">
					{" "}
					<List />
					Admin Service List
				</Link>
				<Link to="/addservices" className="my-2">
					<Add />
					Add Services
				</Link>
				<Link to="/addadmin" className="my-2">
					<GroupAdd />
					Make Admin
				</Link>
			</div>
		</div>
	);
};

export default SideBar;
