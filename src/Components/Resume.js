/** @format */

import React, { Component } from 'react';
import Slide from 'react-reveal';

class Resume extends Component {
	getRandomColor() {
		let letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	render() {
		if (!this.props.data) return null;

		const skillmessage = this.props.data.skillmessage;
		const education = this.props.data.education.map(function (education) {
			return (
				<Slide cascade left duration={1300}>
					<div key={education.school}>
						<h3>{education.school}</h3>
						<p className='info'>
							{education.degree} <span>&bull;</span>
							<span className='date'>{education.graduated}</span>
							<span>&bull;</span>
							<em className='info'>{education.marks}</em>
						</p>
						<p>{education.description}</p>
					</div>
				</Slide>
			);
		});

		const work = this.props.data.work.map(function (work) {
			return (
				<Slide cascade left duration={1300}>
					<div className='c-work-row' key={work.company}>
						<div className='c-work-row__head'>
							<div>
								<img width='60px' height='60px' src={work.logo} alt='Logog' />
							</div>
							<div>
								<a href={work.weblink} target='_blank' rel='noreferrer'>
									<h3>{work.company}</h3>
								</a>
								<p className='info'>
									{work.title}
									<span>&bull;</span> <em className='date'>{work.years}</em>
								</p>
							</div>
						</div>

						<p>{work.description}</p>
					</div>
				</Slide>
			);
		});

		return (
			<section id='resume'>
				<div className='row education'>
					<div className='three columns header-col'>
						<h1>
							<span>Education</span>
						</h1>
					</div>

					<div className='nine columns main-col'>
						<div className='row item'>
							<div className='twelve columns'>{education}</div>
						</div>
					</div>
				</div>

				<div className='row work'>
					<div className='three columns header-col'>
						<h1>
							<span>Work Experience</span>
						</h1>
					</div>

					<div className='nine columns main-col'>{work}</div>
				</div>

				<div className='row skill'>
					<div className='three columns header-col'>
						<h1>
							<span>Skills</span>
						</h1>
					</div>

					<div className='nine columns main-col'>
						<p>{skillmessage}</p>
					</div>
					<div className='bars '>
						<div className='skills '>
							{this.props.data.skills.map((skills, i, self) => {
								const backgroundColor = this.getRandomColor();
								const width = skills.level;

								return (
									<div key={skills.name} className='skill'>
										<em>{skills.name}</em>
										<div className='bar-expand-wrapper'>
											{/* <Slide cascade left> */}
											<div className='bar-expand' style={{ width }}>
												<div
													className='bar-expand--animate'
													style={{ backgroundColor }}></div>
											</div>
											{/* </Slide> */}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Resume;
