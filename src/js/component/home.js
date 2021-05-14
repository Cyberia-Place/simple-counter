import React, { useState } from "react";
import { Clock } from "./clock.js";

//create your first component
export function Home() {
	let [segundos, setSegundos] = useState(0);
	// console.log(segundos);
	setInterval(() => {
		setSegundos(segundos + 1);
		console.log(segundos);
	}, 1000);
	return (
		<div>
			<Clock segundos={...segundos} />
		</div>
	);
}
