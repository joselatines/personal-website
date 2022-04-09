import styled from 'styled-components';
import { CardServices } from './components/CardServices';

import { TitleSection } from './components/TitleSection';

export const Services = () => {
	const services = [
		{
			title: 'Website building',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, magna eu rutrum fringilla, nisi sapien efficitur risus, a blandit est tortor ut urna.',
			icon: <ion-icon name='hammer'></ion-icon>,
			link: 'sdsdsdsdsd',
		},
		{
			title: 'Landing pagee',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, magna eu rutrum fringilla, nisi sapien efficitur risus, a blandit est tortor ut urna.',
			icon: <ion-icon name='hammer'></ion-icon>,
			link: 'sdsdsdsdsd',
		},
		{
			title: 'Landing page',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, magna eu rutrum fringilla, nisi sapien efficitur risus, a blandit est tortor ut urna.',
			icon: <ion-icon name='hammer'></ion-icon>,
			link: 'sdsdsdsdsd',
		},
	];

	return (
		<Container id='services' className='section'>
			<TitleSection title='Services' subtitle='What I am currently doing' />
			<div className='flex'>
				{services.map(({ title, content, icon, link }) => (
					<CardServices
						key={title}
						title={title}
						content={content}
						icon={icon}
						link={link}
					/>
				))}
			</div>
		</Container>
	);
};

const Container = styled.section`
	.flex {
		gap: 2.8rem;
	}
`;
