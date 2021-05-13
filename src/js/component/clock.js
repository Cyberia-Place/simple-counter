import React from "react";
import PropTypes from "prop-types";

export const Clock = ({ segundos }) => {
	const allNumbers = [
		segundos,
		segundos / 1000,
		segundos / 1000,
		segundos / 1000,
		segundos / 1000,
		segundos / 1000
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

Clock.propTypes = {
	segundos: PropTypes.number
};
