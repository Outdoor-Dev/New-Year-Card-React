import React, { useEffect, useState } from "react";

export const Lights = () => {
	const [light, setLight] = useState("");
	const [counter, setCounter] = useState(0);
	const randomLight = () => {
		let randomNumber = Math.floor(Math.random() * 2) + 1;
		switch (randomNumber) {
			case 1:
				setLight("red");
				return "red";

			case 2:
				setLight("green");
				return "green";

			default:
				break;
		}
	};

	useEffect(
		() => {
			setTimeout(() => {
				randomLight();
				setCounter(counter + 1);
			}, 20);
		},
		[light, counter]
	);

	return (
		<span style={{ color: light }}>
			<i className="windows fas fa-square" />
		</span>
	);
};
