import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Clients from "../Clients/Clients";
import axios from "../../../axios";
import "./Feedback.css";

const Feedback = () => {
	const [reviews, setReviews] = useState([]);

	const syncReview = () => {
		axios.get("/retrive/reviews").then((res) => {
			setReviews(res.data);
		});
	};

	useEffect(() => {
		syncReview();
	}, []);

	return (
		<div className="feedback my-5 d-flex flex-column align-items-center">
			<h2 className="text-center mt-5">
				Clients <span className="green">Feedback</span>
			</h2>
			<div className="clients row d-flex justify-content-start mb-5 ">
				{reviews.map((review) => (
					<Clients
						name={review.name}
						imgName={review.imgName}
						designation={review.designation}
						description={review.description}
					/>
				))}
			</div>
		</div>
	);
};

export default Feedback;
