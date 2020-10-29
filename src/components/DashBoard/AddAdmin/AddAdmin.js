import React from "react";
import "./AddAdmin.css";
import { useForm } from "react-hook-form";
import axios from "../../../axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";

const AddAdmin = () => {
	const { register, handleSubmit, errors } = useForm();
	const history = useHistory();
	const user = useSelector(selectUser);
	const onSubmit = (data) => {
		axios
			.patch("/update/user", {
				email: data.email,
			})
			.then((res) => {
				history.push("/dashboard");
			})
			.catch((err) => alert(err.message));
	};

	return (
		<div className="addAdmin col-md-9 col-sm-9 col-9 px-5">
			<div className="addAdmin_title_username mt-3 d-flex justify-content-between">
				<h2>Add Admin</h2>
				<h4>{user.displayName}</h4>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form_inputs mb-3">
					<div className="form-row d-flex  align-items-end">
						<div className="form-group col-md-9 pr-4">
							<label htmlFor="adminEmail" className="font-weight-bold">
								Admin Email
							</label>
							<input
								type="email"
								className="form-control"
								id="adminEmail"
								placeholder="Admin Email"
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

						<div className="form-group col-md-3 pl-4">
							<button type="submit" className="btn btn-success py-3 px-5">
								Submit
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddAdmin;
