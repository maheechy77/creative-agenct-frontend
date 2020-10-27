import React from "react";
import "./Service-Taken.css";

const ServiceTaken = () => {
	return (
		<div className="servicesTaken col-md-9 col-sm-9 px-5 ">
			<div className="servicesTaken_title_username mt-3 d-flex justify-content-between">
				<h2>Service Taken</h2>
				<h4>Username</h4>
			</div>
			<div className="servicesTaken_list row mt-5">
				<div className="col-md-3 col-sm-6 serviceTaken mx-5">
					<div className="serviceTaken_img_button d-flex justify-content-between align-items-center  mb-3">
						<img src="https://i.ibb.co/qBTyprn/service1.png" />
						<button className="btn btn-danger">Pending</button>
					</div>
					<h5 className="font-weight-bold">Web Design & Mobile Design</h5>
					<p className="text-muted">
						We provide stunning and amazing web ui using a well drafted ux to
						fit your project.
					</p>
				</div>
				<div className="col-md-3 col-sm-6 serviceTaken mx-5">
					<div className="serviceTaken_img_button d-flex justify-content-between align-items-center mb-3">
						<img src="https://i.ibb.co/qBTyprn/service1.png" />
						<button className="btn btn-success">Done</button>
					</div>
					<h5 className="font-weight-bold">Web Design & Mobile Design</h5>
					<p className="text-muted">
						We provide stunning and amazing web ui using a well drafted ux to
						fit your project.
					</p>
				</div>
				<div className="col-md-3 col-sm-6 serviceTaken mx-5">
					<div className="serviceTaken_img_button d-flex justify-content-between align-items-center mb-3">
						<img src="https://i.ibb.co/qBTyprn/service1.png" />
						<button className="btn btn-warning">Ongoing</button>
					</div>
					<h5 className="font-weight-bold">Web Design & Mobile Design</h5>
					<p className="text-muted">
						We provide stunning and amazing web ui using a well drafted ux to
						fit your project.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceTaken;
