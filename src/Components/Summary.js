/** @format */

import React from 'react';
import RingContainer from './RingContainer';

export default function Summary() {
	return (
		<div className='c-summary '>
			<div className='row'>
				<div className='four columns'>
					<RingContainer number='3000Hr+' headline='Coding' />
				</div>
				<div className='four columns'>
					<RingContainer number='10+' headline='Projects' />
				</div>
				<div className='four columns'>
					<RingContainer number='400+' headline='Coffee Cup' />
				</div>
			</div>
		</div>
	);
}
