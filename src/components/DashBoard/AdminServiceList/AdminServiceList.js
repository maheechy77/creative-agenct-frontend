import React from "react";
import "./AdminServiceList.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const AdminServiceList = () => {
	return (
		<div className="sdminServiceList  col-md-9 col-sm-9 px-5">
			<div className="sdminServiceList_username_title mt-3 d-flex justify-content-between">
				<h2>Service List</h2>
				<h4>Username</h4>
			</div>
			<div className="serviceList_table">
				<table class="table table-borderless px-2">
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
							<th scope="row">Mark</th>
							<td>mark@mark.com</td>
							<td>Graphic Design</td>
							<td>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Numquam a molestiae quisquam quasi quis id inventore.
							</td>
							<td>
								<p className="text-danger">
									Pending <ExpandMoreIcon />
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AdminServiceList;
