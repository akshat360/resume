/** @format */

import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import Fade from 'react-reveal';

class Header extends Component {
	render() {
		if (!this.props.data) return null;

		const { name, description, social } = this.props.data;

		return (
			<header id='home'>
				{/* <ParticlesBg type="circle" bg={true} /> */}

				<nav id='nav-wrap'>
					<a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
						Show navigation
					</a>
					<a className='mobile-btn' href='#home' title='Hide navigation'>
						Hide navigation
					</a>

					<ul id='nav' className='nav'>
						<li className='current'>
							<a className='smoothscroll' href='#home'>
								Home
							</a>
						</li>

						<li>
							<a className='smoothscroll' href='#about'>
								About
							</a>
						</li>

						<li>
							<a className='smoothscroll' href='#resume'>
								Resume
							</a>
						</li>

						<li>
							<a className='smoothscroll' href='#portfolio'>
								Works
							</a>
						</li>

						{/* <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li> */}
					</ul>
				</nav>

				<div className='row banner'>
					<div className='banner-text'>
						<h1 className='responsive-headline'>{name}</h1>
						<Fade bottom duration={1200}>
							<h3>{description}.</h3>
						</Fade>
						<hr />
						<Fade bottom duration={2000}>
							<ul className='social'>
								{social.map(item => (
									<a
										href={item.url}
										target='_blank'
										rel='noreferrer'
										className={item.className + ' header-links '}>
										<i className={item.icon}></i>
									</a>
								))}
							</ul>
						</Fade>
					</div>
				</div>

				<p className='scrolldown'>
					<a className='smoothscroll' href='#about'>
						<i className='icon-down-circle'></i>
					</a>
				</p>
			</header>
		);
	}
}

export default Header;
