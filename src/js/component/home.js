import React, { useState, useEffect } from "react";
import { SecondsCounter } from "./SecondsCounter.js";

//create your first component
export const Clock = () => {
	const [seconds, setSeconds] = useState(0);
	let clear;
	useEffect(() => {
		clear = setInterval(() => {
			setSeconds(seconds + 1);
			clearInterval(clear);
		}, 1000);
	});

	return (
		<div>
			<SecondsCounter seconds={seconds} />
		</div>
	);
};
