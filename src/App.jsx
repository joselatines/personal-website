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

export const App = () => {
	const socialMedia = [
		{
			name: 'Linkedin',
			icon: <ion-icon name='logo-linkedin'></ion-icon>,
			link: 'https://www.linkedin.com/in/jose-latines/',
		},
		{
			name: 'Github',
			icon: <ion-icon name='logo-github'></ion-icon>,
			link: 'https://github.com/joselatines',
		},
		{
			name: 'Twitter',
			icon: <ion-icon name='logo-twitter'></ion-icon>,
			link: 'https://twitter.com/ggreg33',
		},
	];

	const navLinks = [
		{ name: 'Home', id: '#home' },
		{ name: 'Portfolio', id: '#portfolio' },
		{ name: 'Skills', id: '#skills' },
		{ name: 'Services', id: '#services' },
		{ name: 'Clients', id: '#clients' },
		{ name: 'About Me', id: '#aboutMe' },
	];

	return (
		<BrowserRouter>
			<Navigation navLinks={navLinks} />
			<Header />
			<Portfolio />
			<Skills />
			<Services />
			<Clients />
			<AboutMe />
			<Contact socialMedia={socialMedia} />
			<Footer socialMedia={socialMedia} />
			<GlobalStyles />
		</BrowserRouter>
	);
};
