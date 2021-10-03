/** @format */

import React from 'react';

export default function RingContainer({ number, headline }) {
	return (
		<div className='ring-container'>
			<div className='ring'>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className='ring-text'>
				<h2>{number}</h2>
				<h4>{headline}</h4>
			</div>
		</div>
	);
}
