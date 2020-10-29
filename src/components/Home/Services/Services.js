import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import axios from "../../../axios";
import Service from "../Service/Service";
import { serviceTaken } from "../../../features/userSlice";
import { useDispatch } from "react-redux";
import { BoxLoading } from "react-loadingg";

const Services = () => {
	const [servicesData, setServicesData] = useState([]);
	const dispatch = useDispatch();

	const syncService = () => {
		axios.get("/retrive/services").then((res) => {
			setServicesData(res.data);
		});
	};

	useEffect(() => {
		syncService();
	}, []);

	const dispatchData = (title, imgName, description) => {
		dispatch(
			serviceTaken({
				title: title,
				imgName: imgName,
				description: description,
			})
		);
	};
	return (
		<div className="services mb-5">
			<h2 className="text-center">
				Provide Awesome <span className="green">Services</span>
			</h2>
			{servicesData.length === 0 ? (
				<BoxLoading />
			) : (
				<div className="row d-flex align-items-center mt-5">
					{servicesData.map((entry) => (
						<div
							className="col-md-3 col-sm-6 col-12 text-center box"
							onClick={() =>
								dispatchData(entry.title, entry.imgName, entry.description)
							}
						>
							<Service
								key={entry._id}
								title={entry.title}
								imgName={entry.imgName}
								description={entry.description}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Services;
