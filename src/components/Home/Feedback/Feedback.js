import React from "react";
import Clients from "../Clients/Clients";
import "./Feedback.css";

const Feedback = () => {
	return (
		<div className="feedback my-5 d-flex flex-column align-items-center">
			<h2 className="text-center mt-5">
				Clients <span className="green">Feedback</span>
			</h2>
			<Clients />
		</div>
	);
};

export default Feedback;
