import React from "react";
import "./Banner.css";

const Banner = () => {
	return (
		<div className="row mt-5">
			<div className="col-md-5 col-sm-12 mb-5">
				<h1 className="banner_title">
					Let's Grow Your Brand To The Next Level
				</h1>
				<p className="primary-ptag">
					Dignissimos rerum minima perspiciatis debitis.Lorem ipsum dolor sit
					amet consectetur, adipisicing elit. Dignissimos rerum minima
					perspiciatis debitis.
				</p>
				<button className="btn primary-button my-2 my-sm-0 px-5" type="submit">
					Hire Us
				</button>
			</div>
			<div className="col-md-7 col-sm-12 mb-5">
				<img
					style={{ height: "400px" }}
					src="https://i.ibb.co/8KRtd5k/Frame.png"
				/>
			</div>
			<div className="banner_logos row d-flex justify-content-around align-items-center">
				<img
					className="col-md-2 col-sm-4 col-6"
					src="https://i.ibb.co/Vt45phB/netflix.png"
				/>
				<img
					className="col-md-2 col-sm-4 col-6"
					src="https://i.ibb.co/ryB0mMv/slack.png"
				/>
				<img
					className="col-md-2 col-sm-4 col-6"
					src="https://i.ibb.co/1Mxr9Dk/uber.png"
				/>
				<img
					className="col-md-2 col-sm-4 col-6"
					src="https://i.ibb.co/zbfVXWz/airbnb.png"
				/>
				<img
					className="col-md-2 col-sm-4 col-6"
					src="https://i.ibb.co/D7jzvB2/google.png"
				/>
			</div>
		</div>
	);
};

export default Banner;
