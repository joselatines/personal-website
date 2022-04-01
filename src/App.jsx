import { AboutMe } from './sections/AboutMe';
import { Clients } from './sections/Clients';
import { Header } from './sections/Header';
import { Portfolio } from './sections/Portfolio';
import { Services } from './sections/Services';
import { Skills } from './sections/Skills';
import { GlobalStyles } from './shared/GlobalStyles';
import { Navigation } from './shared/Navigation';

export const App = () => {
	return (
		<div>
			<Navigation />
			<Header />
			<Portfolio />
			<Skills />
			<Services />
			<Clients />
			<AboutMe />
			<GlobalStyles />
		</div>
	);
};
