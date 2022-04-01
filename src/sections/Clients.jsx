import styled from 'styled-components';
import { TitleSection } from './components/TitleSection';

export const Clients = () => {
	const clients = [
		{
			name: 'Landing page',
			link: 'sdsdsdsd',
			img: <div></div>,
			content: 'sdsdsdsdsd',
		},
	];

	return (
		<Container className='section'>
			<TitleSection title='Clients' subtitle='Who I worked' />
			<div className='flex'>
				{clients.map(({ name, img, content }) => (
					<div key={name}></div>
				))}
			</div>
		</Container>
	);
};

const Container = styled.section``;
