import React from "react";
import { Link } from "react-router-dom";

const Service = ({ title, imgName, description }) => {
	return (
		<Link to="/dashboard">
			<img
				src={
					imgName.startsWith("image-")
						? `http://localhost:9000/images/single?name=${imgName}`
						: `${imgName}`
				}
			/>

			<h5 className="font-weight-bold">{title}</h5>
			<p className="text-muted">{description}</p>
		</Link>
	);
};

export default Service;
