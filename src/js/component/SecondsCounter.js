import React, { useEffect } from "react";
import PropTypes from "prop-types";

let allNumbers = Array(6).fill(0);
let allResults = Array(6).fill(0);
//create your first component
export const SecondsCounter = ({ seconds }) => {
	allNumbers = [
		Math.floor(seconds / 100000).toString(),
		Math.floor(seconds / 10000).toString(),
		Math.floor(seconds / 1000).toString(),
		Math.floor(seconds / 100).toString(),
		Math.floor(seconds / 10).toString(),
		Math.floor(seconds / 1).toString()
	];

	for (let i = 0; i < 6; i++) {
		allResults[i] = allNumbers[i][allNumbers[i].length - 1];
	}

	const horario = allResults.map((number, index) => {
		return (
			<div className="mediumdiv mx-3" key={index}>
				<div className="card">
					<div className="card-body text-center display-1">
						{number}
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className="bigdiv px-4 py-3 d-flex justify-content-center">
			<div className="mediumdiv mx-3" style={{ width: "10rem" }}>
				<div className="card">
					<div className="card-body text-center display-1">
						<i className="far fa-clock text-white align-self-center"></i>
					</div>
				</div>
			</div>
			{horario}
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};
