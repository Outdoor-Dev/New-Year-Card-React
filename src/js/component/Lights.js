import React, { useEffect, useState } from "react";

export const Lights = () => {
	const [light, setLight] = useState("");
	const [counter, setCounter] = useState(0);
	const randomLight = () => {
		let randomNumber = Math.floor(Math.random() * 2) + 1;
		switch (randomNumber) {
			case 1:
				setLight("rgb(63, 62, 62)");
				return "rgb(63, 62, 62)";

			case 2:
				setLight("white");
				return "white";

			default:
				break;
		}
	};

	useEffect(
		() => {
			setTimeout(() => {
				randomLight();
				setCounter(counter + 1);
			}, 1000);
		},
		[light, counter]
	);

	return (
		<span style={{ color: light }}>
			<i className="windows fas fa-square" />
		</span>
	);
};

/*export const Lights = () => {
	const [counter, setCounter] = useState(0);

	const [color, setColor] = useState("grey");

	return (
		<span style={{ color: color }}>
			<i
				className="windows fas fa-square"
				onClick={() => {
					if (color === "grey") {
						setColor("white");
					} else {
						setColor("grey");
					}
				}}
			/>
		</span>
	);
};*/
