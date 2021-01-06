import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import city from "../../img/city.png";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<video
				className="video"
				autoPlay
				loop
				type="video/mp4"
				src="https://v.ftcdn.net/02/76/08/40/700_F_276084056_KLAfY8LhyPAaMa2cip4ljPfaKnr2bU1m_ST.mp4">
				Your browser does not support the video tag{" "}
			</video>
			<img className="city" src={city} />
			<h4 className="wordCarousel">
				<span>Happy New </span>
				<div>
					<ul className="flip3">
						<li>Year</li>
						<li>Chances</li>
						<li>Luck</li>
					</ul>
				</div>
			</h4>
		</div>
	);
}
