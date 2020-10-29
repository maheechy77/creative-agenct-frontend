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
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import ProtectedRoute from "../../../ProtectedRoute";

const DashBoard = () => {
	const user = useSelector(selectUser);

	return (
		<div className="userDashBoard row ml-3 mt-3 ">
			<Router>
				<div className="col-md-3 col-sm-3 col-3 ">
					<SideBar />
				</div>
				<Switch>
					{user?.isAdmin === false ? (
						<>
							<Route exact path="/dashboard/">
								<Order />
							</Route>
							<ProtectedRoute path="/dashboard/servicelist/:userId">
								<ServiceTaken />
							</ProtectedRoute>
							<ProtectedRoute path="/dashboard/review">
								<Review />
							</ProtectedRoute>
						</>
					) : (
						<>
							<Route exact path="/dashboard/">
								<AdminServiceList />
							</Route>
							<ProtectedRoute path="/dashboard/addservices">
								<AddServices />
							</ProtectedRoute>
							<ProtectedRoute path="/dashboard/addadmin">
								<AddAdmin />
							</ProtectedRoute>
						</>
					)}
				</Switch>
			</Router>
		</div>
	);
};

export default DashBoard;
