import React from "react";
import "./Services.css";

const Services = () => {
	return (
		<div className="services mb-5">
			<h2 className="text-center">
				Provide Awesome <span className="green">Services</span>
			</h2>
			<div className="row d-flex align-items-center mt-5">
				<div className="col-md-3 col-sm-6 col-12 text-center box">
					<img src="https://i.ibb.co/qBTyprn/service1.png" />
					<h5 className="font-weight-bold">Web Design & Mobile Design</h5>
					<p className="text-muted">
						We provide stunning and amazing web ui using a well drafted ux to
						fit your project.
					</p>
				</div>
				<div className="col-md-3 col-sm-6 col-12 offset-md-1 text-center box">
					<img src="https://i.ibb.co/Xy8jZxY/service2.png" />
					<h5 className="font-weight-bold">Graphic Design</h5>
					<p className="text-muted">
						Amazing flyers, social media posts and brand representations that
						would make your brand stand out.
					</p>
				</div>
				<div className="col-md-3 col-sm-6 col-12 offset-md-1 text-center box">
					<img src="https://i.ibb.co/khgwyyL/service3.png" />
					<h5 className="font-weight-bold">Web Development</h5>
					<p className="text-muted">
						With well written code we build amazing app for all platforms,mobile
						and web app is general.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
