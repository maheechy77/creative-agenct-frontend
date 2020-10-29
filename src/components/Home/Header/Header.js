import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { selectUser } from "../../../features/userSlice";
import { auth } from "../../../firebase";

const Header = () => {
	const user = useSelector(selectUser);

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between ">
				<a className="navbar-brand" href="#">
					<img
						style={{ height: "70px" }}
						src="https://i.ibb.co/rcNwXR3/logo.png"
					/>
				</a>

				<div className="" id="navbarNav">
					<ul className="navbar-nav ml-auto d-flex flex-row align-items-center">
						<li className="nav-item active">
							<a className="nav-link primary-ptag mx-2" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item mx-2">
							<a className="nav-link primary-ptag" href="#">
								Our Portfolio
							</a>
						</li>
						<li className="nav-item mx-2">
							<a className="nav-link primary-ptag" href="#">
								Our Team
							</a>
						</li>
						<li className="nav-item mx-2">
							<a className="nav-link primary-ptag" href="#">
								Contact-Us
							</a>
						</li>
						<li className="nav-item flex-start mx-2">
							{user ? (
								<>
									<Link to={`/dashboard/`}>
										<h4>{user.displayName}</h4>
									</Link>
								</>
							) : (
								<>
									<Link to="/login">
										<button className="btn primary-button">Login</button>
									</Link>
								</>
							)}
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Header;
