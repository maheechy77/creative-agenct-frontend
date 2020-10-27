import React from "react";
import SideBar from "../SideBar/SideBar";
import "./DashBoard.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Order from "../Order/Order";
import ServiceTaken from "../Service-Taken/Service-Taken";
import Review from "../Review/Review";
import AdminServiceList from "../AdminServiceList/AdminServiceList";
import AddServices from "../AddServices/AddServices";
import AddAdmin from "../AddAdmin/AddAdmin";

const DashBoard = () => {
	return (
		<div className="userDashBoard row ml-3 mt-3 ">
			<Router>
				<div className="col-md-3 col-sm-3 col-3 ">
					<SideBar />
				</div>
				<Switch>
					<Route path="/user">
						<Order />
					</Route>
					<Route path="/servicelist">
						<ServiceTaken />
					</Route>
					<Route path="/review">
						<Review />
					</Route>
					<Route path="/adminServicelist">
						<AdminServiceList />
					</Route>
					<Route path="/addservices">
						<AddServices />
					</Route>
					<Route path="/addadmin">
						<AddAdmin />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default DashBoard;
