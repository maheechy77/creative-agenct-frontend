import React from "react";
import "./Review.css";
import { useForm } from "react-hook-form";
import axios from "../../../axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";

const Review = () => {
	const { register, handleSubmit, errors } = useForm();
	const history = useHistory();
	const user = useSelector(selectUser);
	const onSubmit = (data) => {
		axios
			.post("/add/reviews", {
				name: data.username,
				imgName: user.photo,
				designation: data.designation,
				description: data.message,
			})
			.then((res) => {
				history.push("/dashboard");
			})
			.catch((err) => alert(err.message));
	};
	return (
		<div className="review col-md-9 col-sm-9 px-5">
			<div className="review_title_username mt-3 d-flex justify-content-between">
				<h2>Review</h2>
				<h4>{user.displayName}</h4>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						placeholder="Your Name/Company Name"
						name="username"
						value={user.displayName}
						ref={register}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						placeholder="Designation"
						name="designation"
						ref={register({
							required: "Designation is Required",
						})}
					/>
					{errors.designation && (
						<span className="text-danger">{errors.designation.message}</span>
					)}
				</div>
				<div className="form-group">
					<textarea
						placeholder="Your Message"
						className="form-control"
						rows="5"
						cols="50"
						name="message"
						ref={register({
							required: "Message is Required",
							minLength: {
								value: 10,
								message: "Minimum 10 Characters Required",
							},
						})}
					/>
					{errors.message && (
						<span className="text-danger">{errors.message.message}</span>
					)}
				</div>

				<button type="submit" className="btn primary-button py-3 px-5">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Review;
