import styled from 'styled-components';
import { motion } from 'framer-motion';

import { CardClients } from './components/CardClients';
import { TitleSection } from './components/TitleSection';
import { variables } from '../shared/GlobalStyles';
import { fromRight, stagger } from '../shared/Animations';

export const Clients = ({ clients }) => {
	return (
		<Container id='clients' className='section'>
			<TitleSection title='Clients' subtitle='Who I have worked with' />
			<motion.div
				className='flex'
				variants={stagger}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				{clients.map(clients => (
					<motion.div variants={fromRight} key={clients.name}>
						<CardClients {...clients} />
					</motion.div>
				))}
			</motion.div>
		</Container>
	);
};

const Container = styled.section`
	.flex {
		gap: 6em; // Space left by img absolute + 20px
		flex-wrap: nowrap;
		align-items: flex-start;
		@media screen and (max-width: ${variables.mediaQueries.tablet}) {
			flex-wrap: wrap;
			margin-top: 5rem; // Fix space left byt IMG absolute from CardClients
		}
	}
`;
