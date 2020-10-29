import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUserToken, selectUser } from "../../../features/userSlice";
import "./Service-Taken.css";
import axios from "../../../axios";
import { BoxLoading } from "react-loadingg";

const ServiceTaken = () => {
	const [services, setServices] = useState([]);
	const user = useSelector(selectUser);
	const token = useSelector(selectUserToken);

	const getActivities = () => {
		axios
			.get(`/get/userServiceList/${user?.uid}`, {
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${
						token?.userToken || sessionStorage.getItem("token")
					}`,
				},
			})
			.then((res) => {
				setServices(res.data);
			});
	};

	useEffect(() => {
		getActivities();
	}, [user]);
	return (
		<div className="servicesTaken col-md-9 col-sm-9 px-5 ">
			<div className="servicesTaken_title_username mt-3 d-flex justify-content-between">
				<h2>Service Taken</h2>
				<h5>{user.displayName}</h5>
			</div>
			{services.length === 0 ? (
				<BoxLoading />
			) : (
				<div className="servicesTaken_list row mt-5">
					<div className="col-md-3 col-sm-6 serviceTaken mx-5">
						{services.map((service) => (
							<>
								<div className="serviceTaken_img_button d-flex justify-content-between align-items-center  mb-3">
									<img
										src={
											service?.photoURL.startsWith("image-")
												? `http://localhost:9000/images/single?name=${service.photoURL}`
												: `${service.photoURL}`
										}
									/>
									<button
										className={`btn ${
											service.status === "pending"
												? "btn-danger"
												: service.status === "ongoing"
												? "btn-warning"
												: "btn-success"
										} `}
									>
										{service.status}
									</button>
								</div>
								<h5 className="font-weight-bold">{service.title}</h5>
								<p className="text-muted">{service.description}</p>
							</>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default ServiceTaken;
