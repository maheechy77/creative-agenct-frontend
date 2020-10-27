import React from "react";
import Banner from "../Banner/Banner";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Works from "../Works/Works";
import "./Home.css";

const Home = () => {
	return (
		<div className="header_background">
			<div className="container">
				<Header></Header>
				<Banner />
				<Services />
				<Works />
				<Feedback />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
