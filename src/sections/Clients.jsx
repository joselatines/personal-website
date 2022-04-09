import styled from 'styled-components';
import { CardClients } from './components/CardClients';
import { TitleSection } from './components/TitleSection';
import { variables } from '../shared/GlobalStyles';

export const Clients = () => {
	const clients = [
		{
			name: 'Costumer 01',
			review:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, magna eu rutrum fringilla, nisi sapien efficitur risus, a blandit est tortor ut urna.',
			img: 'https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
			link: 'sdsdsd',
			stars: '5',
		},
		{
			name: 'Costumer 02',
			review:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, magna eu rutrum fringilla, nisi sapien efficitur risus, a blandit est tortor ut urna.',
			img: 'https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
			link: 'sdsdsd',
			stars: '5',
		},
	];

	return (
		<Container id='clients' className='section'>
			<TitleSection title='Clients' subtitle='Who I worked' />
			<div className='flex'>
				{clients.map(({ name, img, review }) => (
					<CardClients key={name} name={name} img={img} review={review} />
				))}
			</div>
		</Container>
	);
};

const Container = styled.section`
	.flex {
		gap: 90px; // Space left by img absolute + 20px
	}
	@media screen and (max-width: ${variables.mediaQueries.mobile_l}) {
		.flex {
			margin-top: 5rem; // Fix space left byt IMG absolute from CardClients
		}
	}
`;
