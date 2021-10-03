/** @format */

import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import AllSkills from './Components/AllSkills';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import resumeData from './resumeData';
import Summary from './Components/Summary';

class App extends Component {
	constructor(props) {
		super(props);

		ReactGA.initialize('UA-110570651-1');
		ReactGA.pageview(window.location.pathname);
	}

	render() {
		return (
			<div className='App'>
				<Header data={resumeData.main} />
				<About data={resumeData.main} />
				<Resume data={resumeData.resume} />
				<Summary />

				<Portfolio data={resumeData.portfolio} />
				{/* <AllSkills data={resumeData.resume} /> */}
				{/* <Contact data={resumeData.main} /> */}
				<Footer data={resumeData.main} />
			</div>
		);
	}
}

export default App;
