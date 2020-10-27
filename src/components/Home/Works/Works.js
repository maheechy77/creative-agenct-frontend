import React from "react";
import "./Works.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Works = () => {
	return (
		<div className="works d-flex flex-column align-items-center">
			<h2 className="text-center mb-5 pt-5 pb-5">
				Here are some of <span className="green">our works</span>
			</h2>
			<div className="text-center">
				<Carousel
					infiniteLoop
					centerMode
					centerSlidePercentage={50}
					showThumbs={false}
					showStatus={false}
					showArrows={false}
					autoplay
					className="custom_carousel"
					width="100%"
				>
					<div className="px-4">
						<img alt="" src="https://i.ibb.co/cvnWRJY/carousel-1.png" />
					</div>
					<div className="px-4">
						<img alt="" src="https://i.ibb.co/WfGXrz3/carousel-2.png" />
					</div>
					<div className="px-4">
						<img
							style={{ height: "365px" }}
							alt=""
							src="https://i.ibb.co/wQTdbfL/carousel-3.png"
						/>
					</div>
					<div className="px-4">
						<img alt="" src="https://i.ibb.co/cvch2Tf/carousel-4.png" />
					</div>
					<div className="px-4">
						<img alt="" src="https://i.ibb.co/VHgynbv/carousel-5.png" />
					</div>
				</Carousel>
			</div>
		</div>
	);
};

export default Works;
