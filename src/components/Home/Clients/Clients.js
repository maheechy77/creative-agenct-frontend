import React from "react";
import "./Clients.css";

const Clients = ({ name, imgName, designation, description }) => {
	return (
		<div className="client col-md-3 col-sm-6 mt-5 mx-2">
			<div className="client_info d-flex justify-content-start">
				<img src={imgName} />
				<div className="designation  ml-3">
					<h5>{name}</h5>
					<h6>{designation}</h6>
				</div>
			</div>
			<p>{description}</p>
		</div>
	);
};

export default Clients;
