//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { SecondsCounter } from "./component/home.js";

let seconds = 0;

setInterval(() => {
	seconds++;
}, 1000);

//render your react application
ReactDOM.render(
	<SecondsCounter seconds={seconds} />,
	document.querySelector("#app")
);
