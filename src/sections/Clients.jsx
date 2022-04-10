import styled from 'styled-components';
import { motion } from 'framer-motion';

import { CardClients } from './components/CardClients';
import { TitleSection } from './components/TitleSection';
import { variables } from '../shared/GlobalStyles';
import { fromRight, stagger } from '../shared/Animations';

export const Clients = ({ clients }) => {
	return (
		<Container id='clients' className='section'>
			<TitleSection title='Clients' subtitle='Who I worked' />
			<motion.div
				className='flex'
				variants={stagger}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				{clients.map(({ name, img, review }) => (
					<motion.div variants={fromRight} key={name}>
						<CardClients name={name} img={img} review={review} />
					</motion.div>
				))}
			</motion.div>
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
