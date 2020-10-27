import React from "react";
import "./AddAdmin.css";

const AddAdmin = () => {
	return (
		<div className="addAdmin col-md-9 col-sm-9 col-9 px-5">
			<div className="addAdmin_title_username mt-3 d-flex justify-content-between">
				<h2>Add Admin</h2>
				<h4>Username</h4>
			</div>

			<form>
				<div className="form_inputs mb-3">
					<div className="form-row d-flex  align-items-end">
						<div className="form-group col-md-9 pr-4">
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
