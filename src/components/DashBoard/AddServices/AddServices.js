import React from "react";
import "./AddServices.css";

const AddServices = () => {
	return (
		<div className="addServices col-md-9 col-sm-9 px-5">
			<div className="addServices_title_username mt-3 d-flex justify-content-between">
				<h2>Add Services</h2>
				<h4>Username</h4>
			</div>

			<form>
				<div className="form_inputs mb-3">
					<div className="form-row">
						<div className="form-group col-md-6">
							<label for="serviceName" className="font-weight-bold">
								Service Name
							</label>
							<input
								type="text"
								className="form-control"
								id="serviceName"
								placeholder="Service Name"
							/>
						</div>

						<div className="form-group col-md-6">
							<label for="icon" className="font-weight-bold">
								Icon
							</label>
							<input type="file" className="form-control " id="icon" />
						</div>
					</div>

					<div className="form-group">
						<label for="description" className="font-weight-bold">
							Description
						</label>
						<textarea
							id="description"
							placeholder="Description"
							className="form-control"
							rows="5"
							cols="50"
						/>
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
