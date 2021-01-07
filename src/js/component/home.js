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
				src="https://v.ftcdn.net/03/25/20/43/700_F_325204332_DYwZk3cVEuwVBiwaEn4mKVS9g0ipoHys_ST.mp4">
				Your browser does not support the video tag{" "}
			</video>
			<img className="city" src={city} />

			<div className="firstBuilding">
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="firstBuilding">
				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="firstBuilding">
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="firstBuilding">
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="firstBuilding">
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="firstBuilding">
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>

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
			<div className="squareBuilding">
				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="squareBuilding">
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="squareBuilding">
				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="squareBuilding">
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="squareBuilding">
				<Lights />

				<Lights />
				<Lights />
			</div>
			<div className="squareBuilding">
				<Lights />

				<Lights />
				<Lights />
			</div>
			<div className="squareBuilding">
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

			<div className="buildingRight">
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="buildingRight">
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="buildingRight">
				<Lights />

				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="buildingRight">
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="buildingRight">
				<Lights />
				<Lights />

				<Lights />
				<Lights />
			</div>
			<div className="buildingRight">
				<Lights />
				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="buildingRight">
				<Lights />
				<Lights />

				<Lights />
				<Lights />
				<Lights />
				<Lights />
			</div>

			<div className="buildingLast">
				<Lights />
				<Lights />

				<Lights />
			</div>
			<div className="buildingLast">
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="buildingLast">
				<Lights />
				<Lights />
			</div>
			<div className="buildingLast">
				<Lights />
				<Lights />
				<Lights />
			</div>
			<div className="buildingLast">
				<Lights />
				<Lights />
			</div>
			<div className="buildingLast">
				<Lights />
				<Lights />
				<Lights />
			</div>
		</div>
	);
}
