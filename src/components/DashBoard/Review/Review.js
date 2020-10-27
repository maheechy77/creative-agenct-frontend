import React from "react";
import "./Review.css";

const Review = () => {
	return (
		<div className="review col-md-9 col-sm-9 px-5">
			<div className="review_title_username mt-3 d-flex justify-content-between">
				<h2>Review</h2>
				<h4>Username</h4>
			</div>

			<form>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						placeholder="Your Name/Company Name"
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						placeholder="Designation"
					/>
				</div>
				<div className="form-group">
					<textarea
						placeholder="Your Message"
						className="form-control"
						rows="5"
						cols="50"
					/>
				</div>

				<button type="submit" className="btn primary-button py-3 px-5">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Review;
