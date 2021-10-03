/** @format */

import React, { Component } from 'react';
import Fade from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import {
	faHackerrank,
	faMedium,
	faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

class About extends Component {
	render() {
		if (!this.props.data) return null;

		const { name, bio, phone, email, address } = this.props.data;
		const { street, city, state, zip, country } = address;

		const profilepic = 'images/' + this.props.data.image;
		const resumeLink =
			'https://docs.google.com/document/d/1QfDsHY1sVO4wvTEGnlToOuWz1QPBcgOk2uN3KKSfuUM/edit?usp=sharing';

		const profiles = [
			{
				name: 'LeetCode',
				link: 'https://leetcode.com/akshat360/',
				icon: faCode,
			},
			{
				name: 'CodeChef',
				link: 'https://www.codechef.com/users/akshat360',
				icon: faCode,
			},
			{
				name: 'Codeforces',
				link: 'https://codeforces.com/profile/akshat360',
				icon: faCode,
			},
			{
				name: 'StackOverflow',
				link: 'https://stackoverflow.com/users/14601480/akshat-aggarwal',
				icon: faStackOverflow,
			},
			{
				name: 'Medium',
				link: 'https://medium.com/@akshataggarwal360',
				icon: faMedium,
			},
			{
				name: 'Hackerrank',
				link: 'https://www.hackerrank.com/Akshat360',
				icon: faHackerrank,
			},
		];

		return (
			<section id='about'>
				<Fade duration={1000}>
					<div className='row'>
						<div className='three columns'>
							<img
								className='profile-pic'
								src={profilepic}
								alt='Nordic Giant Profile Pic'
							/>
						</div>
						<div className='nine columns main-col'>
							<h2>About Me</h2>

							<p>{bio}</p>
							<div className='row'>
								<div className='columns contact-details'>
									<h2>Contact Details</h2>
									<p className='address'>
										<span>
											<i className='fa fa-user' />
											&nbsp;&nbsp;
											{name}
										</span>
										<br />
										<span>
											🇮🇳&nbsp;
											{city} {state}, {country}
										</span>
										<br />
										<span>
											<a href={`tel:${phone}`}>
												<i className='fa fa-phone' />
												&nbsp;&nbsp;{phone}
											</a>
										</span>
										<br />

										<span>
											<a href={`mailto:${email}`}>
												<i className='fa fa-envelope' />
												&nbsp;&nbsp;{email}
											</a>
										</span>
									</p>
								</div>
								<div className='columns download'>
									<p>
										<a
											// href={'pdf/resume_akshat_aggarwal.pdf'}
											href={resumeLink}
											target='_blank'
											rel='noreferrer'
											className='button'>
											<i className='fa fa-download'></i>Download Resume
										</a>
									</p>
								</div>
							</div>

							<div className='c-profiles'>
								<h2>Profiles</h2>
								{profiles.map(_p => (
									<a href={_p.link} className='c-profiles__profile'>
										<FontAwesomeIcon icon={_p.icon} />
										&nbsp;&nbsp;
										{_p.name}
									</a>
								))}
							</div>
						</div>
					</div>
				</Fade>
			</section>
		);
	}
}

export default About;
