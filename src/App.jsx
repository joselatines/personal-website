import { BrowserRouter } from 'react-router-dom';

import { AboutMe } from './sections/AboutMe';
import { Clients } from './sections/Clients';
import { Contact } from './sections/Contact';
import { Header } from './sections/Header';
import { Portfolio } from './sections/Portfolio';
import { Services } from './sections/Services';
import { Skills } from './sections/Skills';
import { Footer } from './shared/Footer';
import { GlobalStyles } from './shared/GlobalStyles';
import { Navigation } from './shared/Navigation';

import readme from './img/readme.png';
import sushiRestaurant from './img/sushi-restaurant.png';
import privateRouting from './img/private-routing.jpg';
import hboCLone from './img/hbo-clone.png';
import cloneWebsite from './img/clone-website.png';

const socialMedia = [
	{
		name: 'Linkedin',
		icon: <ion-icon name='logo-linkedin'></ion-icon>,
		link: 'https://www.linkedin.com/in/joselatines/',
	},
	{
		name: 'Github',
		icon: <ion-icon name='logo-github'></ion-icon>,
		link: 'https://github.com/joselatines',
	},
	{
		name: 'Instagram',
		icon: <ion-icon name='logo-instagram'></ion-icon>,
		link: 'https://www.instagram.com/gregg.33/',
	},
	{
		name: 'Twitter',
		icon: <ion-icon name='logo-twitter'></ion-icon>,
		link: 'https://twitter.com/joselatines33',
	},
	{
		name: 'Behance',
		icon: <ion-icon name='logo-behance'></ion-icon>,
		link: 'https://www.behance.net/joselatines',
	},
];

const navLinks = [
	{ name: 'Home', id: '#home' },
	{ name: 'About Me', id: '#aboutMe' },
	{ name: 'Portfolio', id: '#portfolio' },
	{ name: 'Skills', id: '#skills' },
	{ name: 'Services', id: '#services' },
	{ name: 'Clients', id: '#clients' },
];

const services = [
	{
		title: 'Website building',
		content:
			'I create real, high quality websites and landing pages for many clients all over the world using HTML5, CSS3, Vanilla Js and React Js as my main js library.',
		icon: <ion-icon name='hammer'></ion-icon>,
		link: 'https://www.fiverr.com/share/qR2VRp',
	},
	{
		title: 'Set up discord servers',
		content:
			'Using my design skills and my experience using discord bots, I create servers for NFT collections and all kinds of communities.',
		icon: <ion-icon name='logo-discord'></ion-icon>,
		link: 'https://www.fiverr.com/share/9wmqwK',
	},
	{
		title: 'Email templates, psd to html, etc',
		content:
			'I create email and website templates, website bug fixes, psd to html conversions, and anything related to frontend development.',
		icon: <ion-icon name='cog-outline'></ion-icon>,
		link: 'https://www.fiverr.com/share/rrVXpr',
	},
];

const projects = [
	{
		title: 'README generator',
		img: readme,
		code: 'https://github.com/joselatines/readme-project-generator',
		preview: 'https://readme-project-generator.netlify.app/',
		content:
			'Free open source tool, created to speed up the creation time of our readmes files generating markdown template.',
		type: 'Personal',
		tools: ['React Js', 'redux-toolkit', 'Web Tool'],
	},
	{
		title: 'Sushi Restaurant Landing Page',
		img: sushiRestaurant,
		code: 'https://github.com/joselatines/landingpage-restaurant-template',
		preview: 'https://hiromi-sushi.netlify.app/',
		content:
			"Landing page template created for restaurants that don't want to have a big Ecommerce and they prioritize the transactions on Instagram, WhatsApp or inside the restaurant.",
		type: 'Personal',
		tools: ['Typescript', 'React js', 'Landing page template'],
	},
	{
		title: 'HBO Clone Website',
		img: hboCLone,
		code: 'https://github.com/joselatines/hbo-max-clone',
		preview: 'https://hbo-max-clone-tau.vercel.app/',
		content:
			'Clone website made in Next Js where I had to fetch movies/series data using fetch()',
		type: 'Personal',
		tools: ['Next js', 'api fetching'],
	},
	{
		title: 'Private routing',
		img: privateRouting,
		code: 'https://github.com/joselatines/private-routing-nextjs',
		preview: 'https://private-routing-nextjs.vercel.app/',
		content:
			'Project that contains privates routes where only allowed users can access to the dashboard',
		type: 'Personal',
		tools: ['Next js', 'Private routes'],
	},
	{
		title: 'Shiba-Inu Clone Website',
		img: cloneWebsite,
		code: 'https://github.com/joselatines/shiba-inu-clone',
		preview: 'https://joselatines.github.io/shiba-inu-clone/',
		content: 'Clone website using sass and vanilla js',
		type: 'Personal',
		tools: ['Vanilla JavaScript', 'SCSS', 'Clone website', 'Crypto'],
	},
];

const clients = [
	{
		name: 'Justin Mora',
		review:
			'Working with him was very good, very friendly and super efficient, I think I would hire him again in the future. I liked his work.',
		img: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
		link: 'https://www.fiverr.com/doctordraxter/create-your-landing-page-for-nft-colletion?context_referrer=user_page&ref_ctx_id=daec16ff69202024d99e1b70fe817895&pckg_id=1&pos=1&rising_talent=true&imp_id=99c0b4ce-a242-46f7-aa66-98f3a28c03a6',
		stars: '5',
		date: '23/01/2022',
	},
	{
		name: 'Chekili',
		review:
			'I liked working with Jose because he was very friendly and quickly understood what I needed for my website.',
		img: 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/f8ff52caaa0c727aef7bca61dbfb16db-1640911774237/c9b260a3-aa52-47d0-87f1-f7a18d087c74.png',
		link: '',
		stars: '5',
		date: '26/02/2022',
	},
];

const interests = [
	{
		name: 'Blockchain',
		d: 'M34.43 47.86L52.8 37.6V18.31a9.233 9.233 0 01-5.46-3.16L17.91 32.18c.35.98.54 2.03.54 3.13 0 .92-.13 1.8-.38 2.64l16.36 9.91zm11.35-35.38a9.231 9.231 0 01-.59-3.25c0-2.55 1.03-4.86 2.7-6.53S51.87 0 54.42 0c2.55 0 4.86 1.03 6.53 2.7a9.205 9.205 0 012.7 6.53c0 1.12-.2 2.19-.56 3.18l29.57 17.1c.21-.25.42-.5.65-.73a9.205 9.205 0 016.53-2.7c2.55 0 4.86 1.03 6.53 2.7a9.205 9.205 0 012.7 6.53c0 2.55-1.03 4.85-2.7 6.52a9.194 9.194 0 01-5.32 2.62v33.91c2.07.27 3.92 1.22 5.32 2.62 1.67 1.67 2.7 3.98 2.7 6.52a9.222 9.222 0 01-9.23 9.23 9.205 9.205 0 01-7.15-3.39l-29.61 17.12c.36.99.56 2.06.56 3.18 0 2.55-1.03 4.86-2.7 6.53a9.205 9.205 0 01-6.53 2.7c-2.55 0-4.86-1.03-6.53-2.7s-2.7-3.98-2.7-6.53c0-1.14.21-2.24.59-3.25L16.35 93.38a9.205 9.205 0 01-7.13 3.36c-2.55 0-4.86-1.03-6.53-2.7C1.03 92.37 0 90.06 0 87.51s1.03-4.85 2.7-6.52a9.242 9.242 0 015.25-2.62V44.44a9.18 9.18 0 01-5.25-2.62A9.164 9.164 0 010 35.3c0-2.55 1.03-4.86 2.7-6.53a9.205 9.205 0 016.53-2.7 9.205 9.205 0 017.16 3.4l29.39-16.99zm15.76 2.61a9.192 9.192 0 01-5.55 3.23V37.6l18.33 10.62 16.85-9.74c-.37-.99-.56-2.07-.56-3.18 0-1.08.19-2.13.53-3.09l-29.6-17.12zm36.69 29.3a9.159 9.159 0 01-4.92-2.56c-.19-.19-.37-.38-.54-.59l-16.82 9.72v20.78l16.89 9.75c.15-.17.3-.34.46-.5a9.194 9.194 0 014.92-2.56V44.39h.01zm-7.07 46.27c-.36-.98-.55-2.04-.55-3.14 0-1.16.21-2.27.61-3.3l-16.34-9.43-18.89 10.98v18.79a9.192 9.192 0 015.55 3.23l29.62-17.13zm-43.82 17.06a9.233 9.233 0 015.46-3.16V85.68l-18.96-11-16.09 9.29c.45 1.09.71 2.29.71 3.55 0 1.12-.2 2.19-.56 3.18l29.44 17.02zM10.76 78.41c1.93.32 3.66 1.25 4.99 2.58.1.1.19.2.28.3l16.39-9.46V50.36L16.64 40.8c-.27.37-.57.71-.89 1.03a9.255 9.255 0 01-4.99 2.58v34zM9.24 41.34c.04 0 .08-.01.12-.01h.08a6 6 0 004.06-1.76 6.023 6.023 0 001.77-4.27c0-1.67-.68-3.18-1.77-4.27-1.09-1.09-2.6-1.77-4.27-1.77s-3.18.68-4.27 1.77a6.023 6.023 0 00-1.77 4.27c0 1.67.68 3.18 1.77 4.27a6.03 6.03 0 004.28 1.77zm49.44 68.05a6.023 6.023 0 00-4.27-1.77c-1.67 0-3.18.68-4.27 1.77-1.09 1.09-1.77 2.6-1.77 4.27s.68 3.18 1.77 4.27 2.6 1.77 4.27 1.77c1.67 0 3.18-.68 4.27-1.77 1.09-1.09 1.77-2.6 1.77-4.27s-.67-3.18-1.77-4.27zm0-104.43a6.023 6.023 0 00-4.27-1.77c-1.67 0-3.18.68-4.27 1.77s-1.77 2.6-1.77 4.27c0 1.67.68 3.18 1.77 4.27a6.023 6.023 0 004.27 1.77c1.67 0 3.18-.68 4.27-1.77a6.023 6.023 0 001.77-4.27c0-1.67-.67-3.18-1.77-4.27zm45.42 78.29a6.023 6.023 0 00-4.27-1.77c-1.67 0-3.18.68-4.27 1.77a6.023 6.023 0 00-1.77 4.27c0 1.67.68 3.18 1.77 4.27a6.023 6.023 0 004.27 1.77c1.67 0 3.18-.68 4.27-1.77a6.023 6.023 0 001.77-4.27c0-1.67-.67-3.18-1.77-4.27zm-90.6 0c-1.09-1.09-2.6-1.77-4.27-1.77s-3.18.68-4.27 1.77a6.023 6.023 0 00-1.77 4.27c0 1.67.68 3.18 1.77 4.27s2.6 1.77 4.27 1.77 3.18-.68 4.27-1.77a6.023 6.023 0 001.77-4.27 6.065 6.065 0 00-1.77-4.27zm80.95-45.22c.08.08.14.18.2.28.06.1.1.2.14.31.23.34.49.66.77.95a6.023 6.023 0 004.27 1.77c1.67 0 3.18-.68 4.27-1.77a6.023 6.023 0 001.77-4.27c0-1.67-.68-3.18-1.77-4.27a6.023 6.023 0 00-4.27-1.77c-1.67 0-3.18.68-4.27 1.77a6.023 6.023 0 00-1.77 4.27c.01.99.25 1.91.66 2.73zM35.41 71.49a1.687 1.687 0 01.43.88l17.13 10.07V62.56L35.41 52.11v19.38zm37.56-19.11L55.96 62.57v19.89l17.01-10.05V52.38zM54.39 39.99l-16.6 9.93 16.69 10.05 16.21-9.84-16.3-10.14z',
		viewBox: '0 0 109.06 122.88',
	},
	{
		name: 'Technology',
		d: 'M28.89,20.82h65a8.42,8.42,0,0,1,8.39,8.4V94A8.4,8.4,0,0,1,99.8,99.9h0a8.36,8.36,0,0,1-5.92,2.47h-65a8.43,8.43,0,0,1-8.4-8.4V29.22A8.37,8.37,0,0,1,23,23.3h0a8.37,8.37,0,0,1,5.92-2.47ZM45.47,37.51H77.29a8,8,0,0,1,8,8V77.71a8,8,0,0,1-8,8H45.47a8,8,0,0,1-8-8V45.49a8,8,0,0,1,8-8ZM91.88,89.16a2.94,2.94,0,1,1-2.94-2.93,2.94,2.94,0,0,1,2.94,2.93ZM36.75,34a2.94,2.94,0,1,1-2.94-2.93A2.94,2.94,0,0,1,36.75,34ZM88.94,31.1A2.94,2.94,0,1,1,86,34a2.94,2.94,0,0,1,2.93-2.93ZM33.81,86.23a2.94,2.94,0,1,1-2.93,2.93,2.94,2.94,0,0,1,2.93-2.93Zm.7,22.76v13.86H29.34V109Zm11.94,0v13.86H41.28V109Zm11.93,0v13.86H53.21V109Zm11.94,0v13.86H65.15V109Zm11.93,0v13.86H77.08V109Zm11.94,0v13.86H89V109ZM34.51,0V13.86H29.34V0ZM46.45,0V13.86H41.28V0ZM58.38,0V13.86H53.21V0ZM70.32,0V13.86H65.15V0ZM82.25,0V13.86H77.08V0ZM94.19,0V13.86H89V0ZM109,88.81h13.86V94H109V88.81Zm0-11.94h13.86V82H109V76.87Zm0-11.93h13.86v5.17H109V64.94ZM109,53h13.86v5.17H109V53Zm0-11.93h13.86v5.17H109V41.07Zm0-11.94h13.86V34.3H109V29.13ZM0,88.81H13.86V94H0V88.81ZM0,76.87H13.86V82H0V76.87ZM0,64.94H13.86v5.17H0V64.94ZM0,53H13.86v5.17H0V53ZM0,41.07H13.86v5.17H0V41.07ZM0,29.13H13.86V34.3H0V29.13Zm93.87-4.28h-65a4.39,4.39,0,0,0-3.09,1.27h0a4.34,4.34,0,0,0-1.27,3.09V94a4.39,4.39,0,0,0,4.37,4.38h65A4.35,4.35,0,0,0,97,97.07h0A4.35,4.35,0,0,0,98.24,94V29.22a4.39,4.39,0,0,0-4.37-4.37Z',
		viewBox: '0 0 122.88 122.85',
	},
	{
		name: 'Basketball',
		d: 'M0.21,56.33c0-0.2,0.01-0.4,0.05-0.6C1.61,41.05,8.14,27.85,18,18C29.11,6.88,44.47,0,61.44,0c0.65,0,1.3,0.01,1.95,0.03 c0.28-0.03,0.57-0.02,0.86,0.03C80.1,0.78,94.38,7.49,104.88,18c11.12,11.12,18,26.48,18,43.44c0,16.97-6.88,32.33-18,43.44 c-0.53,0.53-1.06,1.05-1.61,1.55c-0.29,0.49-0.71,0.87-1.21,1.09c-10.83,9.55-25.05,15.35-40.63,15.35c-0.41,0-0.82-0.01-1.23-0.01 c-0.19,0.02-0.37,0.01-0.55-0.01c-16.26-0.46-30.93-7.24-41.66-17.97c-0.96-0.96-1.89-1.96-2.79-2.98 c-0.37-0.26-0.66-0.61-0.85-0.99C5.4,90.23,0,76.47,0,61.44C0,59.72,0.07,58.02,0.21,56.33L0.21,56.33z M5.76,54.91 c5.34,3.33,11.06,6,17,8.1c-0.25-10.33-2.27-21.97-6.27-35.06C10.74,35.64,6.93,44.87,5.76,54.91L5.76,54.91z M20.58,23.07 c5.1,15.73,7.51,29.54,7.57,41.67c4.86,1.41,9.84,2.47,14.84,3.2C42.75,64.24,42.7,60.6,42.83,57c0.66-18.43,6.02-35.59,15.9-51.55 c-14.4,0.69-27.38,6.8-36.93,16.35C21.39,22.22,20.98,22.64,20.58,23.07L20.58,23.07z M65.06,5.5 C54.55,21.44,48.85,38.65,48.19,57.19c-0.13,3.75-0.06,7.55,0.22,11.41c4.5,0.45,9,0.66,13.42,0.64c2.15-0.01,4.27-0.07,6.38-0.18 c-0.46-7.15,0.86-14.53,3.66-21.67C76.35,36,84.63,25.17,95.42,16.86C86.89,10.35,76.44,6.23,65.06,5.5L65.06,5.5z M99.62,20.4 c-10.46,7.79-18.48,18.1-22.74,28.96c-2.51,6.41-3.71,12.99-3.3,19.33c18.78-1.72,35.06-7.24,43.49-14.22 c-1.57-12.69-7.39-24.07-15.99-32.66C100.6,21.33,100.11,20.86,99.62,20.4L99.62,20.4z M117.49,60.82 C107.84,67.31,92.08,72.32,74.31,74c0.95,4.39,2.74,8.61,5.49,12.49c4.31,6.09,10.99,11.41,20.44,15.41 c0.28-0.27,0.56-0.54,0.84-0.82c10.14-10.14,16.42-24.16,16.42-39.64C117.49,61.23,117.49,61.03,117.49,60.82L117.49,60.82z M95.74,105.78c-9.16-4.28-15.82-9.85-20.32-16.2c-3.34-4.72-5.47-9.85-6.52-15.18c-2.33,0.13-4.69,0.2-7.07,0.21 c-4.25,0.02-8.57-0.17-12.9-0.57c1.66,13.77,5.9,28.25,12.78,43.45C74.53,117.43,86.33,113.07,95.74,105.78L95.74,105.78z M55.71,117.2c-6.65-15.26-10.71-29.85-12.24-43.79c-5.19-0.71-10.37-1.74-15.45-3.14c-0.64,11.1-3.37,20.71-7.92,29.01 c0.56,0.61,1.13,1.21,1.71,1.79C30.68,109.95,42.52,115.86,55.71,117.2L55.71,117.2z M16.38,94.79c3.74-7.51,5.93-16.16,6.34-26.12 c-6.01-2-11.84-4.55-17.33-7.72c0,0.16,0,0.32,0,0.49C5.39,73.93,9.47,85.47,16.38,94.79L16.38,94.79z',
		viewBox: '0 0 122.88 122.88',
	},
];
const App = () => {
	return (
		<BrowserRouter>
			<Navigation navLinks={navLinks} />
			<Header />
			<AboutMe interests={interests} />
			<Portfolio projects={projects} />
			<Skills />
			<Services services={services} />
			<Clients clients={clients} />
			<Contact socialMedia={socialMedia} />
			<Footer socialMedia={socialMedia} />
			<GlobalStyles />
		</BrowserRouter>
	);
};

export default App;
