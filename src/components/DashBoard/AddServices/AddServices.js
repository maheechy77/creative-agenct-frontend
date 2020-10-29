import React from "react";
import "./AddServices.css";

import { useForm } from "react-hook-form";
import axios from "../../../axios";
import { useHistory } from "react-router-dom";

const AddServices = () => {
	const { register, handleSubmit, errors } = useForm();
	const history = useHistory();
	const onSubmit = (data) => {
		if (data.icon[0]) {
			const imgFrom = new FormData();
			imgFrom.append("file", data.icon[0], data.icon[0].name);
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
						title: data.service_name,
						imgName: res.data.filename,
						description: data.description,
					};

					saveService(postData);

					history.push("/dashboard");
				});
		} else {
			const postData = {
				title: data.service_name,
				imgName: "https://i.ibb.co/qBTyprn/service1.png",
				description: data.description,
			};
			saveService(postData);
			history.push("/dashboard");
		}
	};

	const saveService = async (postData) => {
		await axios.post("/add/services", postData).then((res) => {
			console.log(res);
		});
	};

	return (
		<div className="addServices col-md-9 col-sm-9 px-5">
			<div className="addServices_title_username mt-3 d-flex justify-content-between">
				<h2>Add Services</h2>
				<h4>Username</h4>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form_inputs mb-3">
					<div className="form-row">
						<div className="form-group col-md-6">
							<label htmlFor="serviceName" className="font-weight-bold">
								Service Name
							</label>
							<input
								type="text"
								className="form-control"
								id="serviceName"
								placeholder="Service Name"
								name="service_name"
								ref={register({
									required: "Service Name is Required",
									minLength: {
										value: 10,
										message: "Should be minimum 10 Characters long",
									},
								})}
							/>
							{errors.service_name && (
								<span className="text-danger">
									{errors.service_name.message}
								</span>
							)}
						</div>

						<div className="form-group col-md-6">
							<label htmlFor="icon" className="font-weight-bold">
								Icon
							</label>
							<input
								type="file"
								className="form-control "
								id="icon"
								name="icon"
								ref={register}
							/>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="description" className="font-weight-bold">
							Description
						</label>
						<textarea
							id="description"
							placeholder="Description"
							className="form-control"
							rows="5"
							cols="50"
							name="description"
							ref={register({
								required: "Description is Required",
								minLength: {
									value: 20,
									message: "Should be minimum 20 Characters long",
								},
							})}
						/>
						{errors.description && (
							<span className="text-danger">{errors.description.message}</span>
						)}
					</div>
				</div>

				<button type="submit" className="btn btn-success py-3 px-5">
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddServices;
