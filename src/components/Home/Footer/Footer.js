import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer ">
			<div className="footer_background">
				<div className="footer_contact d-flex justify-content-between row">
					<div className="footer_contactInfo col-md-5 com-sm-12">
						<h2>Let us Handle your project, professionally</h2>
						<p>
							With well written code we build amazing app for all
							platforms,mobile and web app is general.
						</p>
					</div>
					<div className="footer_form col-md-5 com-sm-12">
						<form>
							<div class="form-group">
								<label for="exampleInputEmail1">Your Email address</label>
								<input
									type="email"
									class="form-control"
									id="exampleInputEmail1"
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputName1">Your Name/Company Name</label>
								<input
									type="text"
									class="form-control"
									id="exampleInputName1"
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputTextarea1">Your Message</label>
								<textarea
									id="exampleInputTextarea1"
									class="form-control"
									rows="10"
									cols="50"
								/>
							</div>

							<button type="submit" class="btn primary-button px-4">
								Submit
							</button>
						</form>
					</div>
				</div>
				<p className="text-center mt-5">Copyright Orange Lab @2020</p>
			</div>
		</div>
	);
};

export default Footer;
