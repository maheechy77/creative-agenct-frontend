import React from "react";
import "./Order.css";

const Order = () => {
	return (
		<div className="order col-md-9 col-sm-9 px-5">
			<div className="order_username_title mt-3 d-flex justify-content-between">
				<h2>Order</h2>
				<h4>Username</h4>
			</div>

			<form>
				<div className="form-group">
					<input
						type="email"
						className="form-control"
						placeholder="Your Email address"
					/>
				</div>
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
						placeholder="Service Taken"
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
				<div className="form-row">
					<div className="form-group col-md-6">
						<input
							type="text"
							className="form-control"
							placeholder="Price"
							id="exampleInputName1"
						/>
					</div>

					<div className="form-group col-md-6">
						<input type="file" className="form-control " />
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
