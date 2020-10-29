import React, { useState, useEffect } from "react";
import "./AdminServiceList.css";
import axios from "../../../axios";
import { selectUser } from "../../../features/userSlice";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BoxLoading } from "react-loadingg";

const AdminServiceList = () => {
	const [services, setServices] = useState([]);
	const user = useSelector(selectUser);
	const history = useHistory();

	const getUserActivities = async () => {
		await axios.get("/allUserServiceList").then((res) => {
			setServices(res.data);
		});
	};

	const handleChange = async (value, username, title) => {
		await axios
			.patch("/update/servicestatus", {
				value,
				username,
				title,
			})
			.then((res) => history.push("/dashboard"));
	};

	useEffect(() => {
		getUserActivities();
	}, [user]);
	return (
		<div className="sdminServiceList  col-md-9 col-sm-9 px-5">
			<div className="sdminServiceList_username_title mt-3 d-flex justify-content-between">
				<h2>Service List</h2>
				<h4>Username</h4>
			</div>
			{services.length === 0 ? (
				<BoxLoading />
			) : (
				<div className="serviceList_table">
					<table className="table table-borderless px-2">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Email</th>
								<th scope="col">Service</th>
								<th scope="col">Project Details</th>
								<th scope="col">Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								{services.map((service) => (
									<>
										<td scope="row">{service.username}</td>
										<td>{service.email}</td>
										<td>{service.title}</td>
										<td>{service.description}</td>
										<td>
											<select
												onChange={(e) =>
													handleChange(
														e.target.value,
														service.username,
														service.title
													)
												}
												className={` ${
													service.status === "pending"
														? "text-danger"
														: service.status === "ongoing"
														? "text-warning"
														: "text-success"
												} `}
												name="status"
												id="status"
											>
												<option
													value={service.status}
													className={` ${
														service.status === "pending"
															? "text-danger"
															: service.status === "ongoing"
															? "text-warning"
															: "text-success"
													}px-2 `}
												>
													{service.status}
												</option>
												{service.enums[0] !== service.status && (
													<option
														className={` ${
															service.enums[0] === "pending"
																? "text-danger"
																: service.status === "ongoing"
																? "text-warning"
																: "text-success"
														} px-2`}
														value={service.enums[0]}
													>
														{service.enums[0]}
													</option>
												)}
												{service.enums[1] !== service.status && (
													<option
														className={` ${
															service.enums[1] === "pending"
																? "text-danger"
																: service.enums[1] === "ongoing"
																? "text-warning"
																: "text-success"
														} px-2`}
														value={service.enums[1]}
													>
														{service.enums[1]}
													</option>
												)}
												{service.enums[2] !== service.status && (
													<option
														className={` ${
															service.enums[2] === "pending"
																? "text-danger"
																: service.enums[2] === "ongoing"
																? "text-warning"
																: "text-success"
														} px-2`}
														value={service.enums[2]}
													>
														{service.enums[2]}
													</option>
												)}
											</select>
										</td>
									</>
								))}
							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default AdminServiceList;
