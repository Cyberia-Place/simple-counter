import React from "react";

//create your first component
export const SecondsCounter = ({ seconds }) => {
	const allNumbers = [
		Math.floor(seconds / 100000),
		Math.floor(seconds / 10000),
		Math.floor(seconds / 1000),
		Math.floor(seconds / 100),
		Math.floor(seconds / 10),
		Math.floor(seconds)
	];

	const horario = allNumbers.map((number, index) => {
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
