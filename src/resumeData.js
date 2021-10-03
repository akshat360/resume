/** @format */

const data = {
	main: {
		name: 'Akshat Aggarwal',
		logo: 'akshat_logo.png',
		description: 'Skill Coder | MERN Developer | Web Developer | Curious Mind',
		iama: [
			'Problem Solver',
			'Software Developer',
			'Web Developer',
			'App Developer',
			'UI Enthusiast',
		],
		image: 'profilepic.png',
		bio: "I'm a Software Developer at CredFlow in Delhi, India. I have passion for Software Development, UI effects, animations and creating intuitive, dynamic user experiences. I have hands-on experience on the technologies like ReactJs, NextJs, NodeJs, Express, Flask, Flutter & Angular(2+).",
		contactmessage:
			'Here is where you should write your message to readers to have them get in contact with you.',
		email: 'akshataggarwal360@gmail.com',
		phone: '+919716540682',
		github: 'https://github.com/akshat360',
		project: 'https://github.com/akshat360',
		linkedin: 'https://www.linkedin.com/in/akshat360/',
		address: {
			street: 'Shahdara',
			city: '',
			state: 'Delhi',
			zip: '110053',
			country: 'India',
		},
		website: 'https://github.com/akshat360',
		resumedownload: 'http://timbakerdev.com',
		social: [
			{
				name: 'LinkedIn',
				icon: 'fa fa-linkedin',
				url: 'https://www.linkedin.com/in/akshat360/',
				className: 'icon-facebook',
			},
			{
				name: 'Github',
				icon: 'fa fa-github',
				url: 'https://github.com/akshat360',
				className: 'icon-github',
			},
			{
				name: 'Instagram',
				icon: 'fa fa-instagram',
				url: 'https://www.instagram.com/akshattaggarwal/',
				className: 'icon-instagram',
			},
		],
	},
	resume: {
		education: [
			{
				school: 'Maharaja Surajmal Institute Of Technology',
				degree: 'B.Tech in Information Technology',
				graduated: '2018 - 2022',
				marks: '8.7/10',

				//     description:
				//       'Describe your experience at school, what you learned, what useful skills you have acquired etc.',
			},
			{
				school: 'Bhai Parmanand Vidya Mandir',
				degree: 'Senior Secondary School',
				graduated: '2016 - 2018',
				marks: '90.4 /100%',
				// description:
				//   'Describe your experience at school, what you learned, what useful skills you have acquired etc.',
			},
			{
				school: 'Nav Jeevan Adarsh Public School',
				degree: 'Secondary School',
				graduated: 'April 2016',
				marks: '8.6/10',
				// description:
				//   'Describe your experience at school, what you learned, what useful skills you have acquired etc.',
			},
		],
		work: [
			{
				company: 'CredFlow',
				logo: 'images/work/credflow.jpeg',
				title: 'SDE1 ',
				weblink: 'https://credflow.in/',
				years: 'October 2021- Present',
				description: `• Credflow: Automated collection engine for Tally Users.\n
				• Refactoring Frontend Codebase.
				• Reduced unused Js, gave modularity to the code, and optimized the Frontend. 
				Tech stack: ReactJs, Express.`,
			},
			{
				company: 'Solera Life Science',
				logo: 'images/work/docplus.png',
				title: 'SDE Intern ',
				weblink: 'https://docplus.online/',
				years: 'January 2021- June 2021',
				description: `• DocPlus: A platform to connect to professional Doctors & can book online or offline appointments.\n
				• Handling Authentication, UI for the user.
				• Reduced unused Js, gave modularity to the code, and optimized the homepage.
				• Increased Google PageSpeed score from 13 to 51( out of 100).
				• Basic Seo of the Homepage and doctors listing Page. 
				Tech stack: NextJs, ReactJs, Express`,
			},
			{
				company: 'ITMTB',
				logo: 'images/work/prospareto.png',
				title: 'Full stack Intern',
				weblink: 'https://prospareto.com/',
				years: 'October 2020 – December 2020',
				description: `• Prospareto: A stock recommender & community brand.
				• Developed the customer-side UI of the website.
				• Created Invoices API for tracking invoices & cash flows.
				Tech stack: ReactJs, MySql, Flask`,
			},
		],
		skillmessage:
			'These are the relevant technologies I am currently working on with the level of expertise',
		skills: [
			{
				name: 'ReactJs',
				level: '80%',
			},
			{
				name: 'NodeJS/ Express',
				level: '75%',
			},
			{
				name: 'Angular',
				level: '65%',
			},
			{
				name: 'HTML',
				level: '90%',
			},
			{
				name: 'Javascript',
				level: '75%',
			},
			{
				name: 'CSS',
				level: '90%',
			},
			{
				name: 'Flutter',
				level: '70%',
			},
			{
				name: 'Flask',
				level: '40%',
			},
			{
				name: 'MongoDb',
				level: '70%',
			},
			{
				name: 'MySql',
				level: '50%',
			},
		],
		allSkillmessage: 'These are the technologies I have hands on experience.',
	},
	portfolio: {
		projects: [
			{
				title: 'MissValentine',
				category: 'MissValentine is a real-world women’s innerwear brand. ',
				image: 'missvalentine.png',
				url: 'https://missvalentineinnerwear.com/',
			},
			{
				title: 'Prospareto',
				category:
					'A realtime based web application for SEBI registered experts to guide users in stock market.',
				image: 'prospareto.png',
				url: 'https://prospareto.com/',
				under: 'ITMTB',
			},

			{
				title: 'DocPlus',
				category: 'A platform for patient and doctor to connect.',
				image: 'docplus.png',
				url: 'https://docplus.online/',
				under: 'Solera',
			},
			{
				title: 'Bolt-fasting',
				category: 'To Track Intermittent Fasting',
				image: 'boltfasting.png',
				url: 'https://boltfasting.netlify.app/',
			},
			{
				title: 'Covid-19 Tracker',
				category: 'A mobile application to track covid19 patients',
				image: 'covidtracker.png',
				url: 'https://github.com/akshat360/covid19-tracker-flutter',
			},
		],
	},
};

export default data;
