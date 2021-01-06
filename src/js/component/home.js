import React from "react";
import { Lights } from "./Lights";
//include images into your bundle

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
			<div className="tallBuilding1">
				<Lights />
				<Lights />
			</div>
			<div className="tallBuilding2">
				<Lights />
				<Lights />
			</div>
			<div className="tallBuilding3">
				<Lights />
				<Lights />
			</div>
			<div className="tallBuilding4">
				<Lights />
				<Lights />
			</div>
			<div className="tallBuilding5">
				<Lights />
				<Lights />
			</div>
			<div className="squareBuilding1">
				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="squareBuilding2">
				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="squareBuilding3">
				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="buildingMiddle1">
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="buildingMiddle2">
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="buildingMiddle3">
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="buildingMiddle4">
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>
		</div>
	);
}
