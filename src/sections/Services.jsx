import styled from 'styled-components';
import { CardServices } from './components/CardServices';

import { TitleSection } from './components/TitleSection';

export const Services = () => {
	const services = [
		{
			title: 'Landing page',
			content: 'sdsdsdsd',
			icon: <div></div>,
			link: 'sdsdsdsdsd',
		},
	];

	return (
		<Container className='section'>
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

const Container = styled.section``;
