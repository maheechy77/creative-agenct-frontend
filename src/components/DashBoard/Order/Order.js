import React from "react";
import "./Order.css";
import { useForm } from "react-hook-form";
import axios from "../../../axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser, selectServices } from "../../../features/userSlice";

const Order = () => {
	const { register, handleSubmit, errors } = useForm();
	const history = useHistory();
	const user = useSelector(selectUser);
	const service = useSelector(selectServices);

	const onSubmit = (data) => {
		if (data.image[0]) {
			const imgFrom = new FormData();
			imgFrom.append("file", data.image[0], data.image[0].name);
			axios
				.post("/upload/image", imgFrom, {
					headers: {
						accept: "application/json",
						"Accept-Language": "en-US,en;q=0.8",
						"Content-Type": `multipart/form-data; boundry=${imgFrom._boundary}`,
					},
				})
				.then((res) => {
					const postData = {
						uid: user.uid,
						email: data.email,
						name: data.username,
						title: data.title,
						imgName: res.data.filename,
						description: data.description,
						price: data.price,
						status: "pending",
					};

					orderService(postData);

					history.push(`/dashboard/servicelist/${user.uid}`);
				});
		}
	};

	const orderService = async (postData) => {
		await axios.post("/order/services", postData).then((res) => {
			console.log(res);
		});
	};
	return (
		<div className="order col-md-9 col-sm-9 px-5">
			<div className="order_username_title mt-3 d-flex justify-content-between">
				<h2>Order</h2>
				<h4>{user.displayName}</h4>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<input
						type="email"
						className="form-control"
						placeholder="Your Email address"
						value={user.email}
						name="email"
						ref={register({
							required: "Email is Required",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i,
								message: "Invalid Email Address",
							},
						})}
					/>
					{errors.email && (
						<span className="text-danger">{errors.email.message}</span>
					)}
				</div>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						placeholder="Your Name/Company Name"
						value={user.displayName}
						name="username"
						ref={register({
							required: "Description is Required",
							minLength: {
								value: 5,
								message: "Should be minimum 5 Characters long",
							},
						})}
					/>
					{errors.username && (
						<span className="text-danger">{errors.username.message}</span>
					)}
				</div>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						placeholder="Service Taken"
						//value={service.title}
						name="title"
						ref={register({
							required: "Title is Required",
							minLength: {
								value: 5,
								message: "Should be minimum 5 Characters long",
							},
						})}
					/>
					{errors.title && (
						<span className="text-danger">{errors.title.message}</span>
					)}
				</div>
				<div className="form-group">
					<textarea
						placeholder="Project Description"
						className="form-control"
						rows="5"
						cols="50"
						//value={service.description}
						name="description"
						ref={register({
							required: "Description is Required",
							minLength: {
								value: 20,
								message: "Should be minimum 20 Characters long",
							},
						})}
					></textarea>
					{errors.description && (
						<span className="text-danger">{errors.description.message}</span>
					)}
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<input
							type="text"
							className="form-control"
							placeholder="Price"
							id="exampleInputName1"
							name="price"
							ref={register({ required: "Price is Required" })}
						/>
						{errors.price && (
							<span className="text-danger">{errors.price.message}</span>
						)}
					</div>
					<div className="form-group col-md-6">
						<input
							type="file"
							className="form-control"
							placeholder="Image"
							id="exampleInputName1"
							name="image"
							ref={register({ required: "Image is Required" })}
						/>
						{errors.image && (
							<span className="text-danger">{errors.image.message}</span>
						)}
					</div>
				</div>

				<button type="submit" className="btn primary-button py-3 px-5">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Order;
