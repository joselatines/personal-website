import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CardServices } from './components/CardServices';
import { TitleSection } from './components/TitleSection';
import { fromTop, stagger } from '../shared/Animations';

export const Services = ({ services }) => {
	return (
		<Container id='services' className='section'>
			<TitleSection
				title='Services'
				subtitle='What I am currently working on'
			/>
			<motion.div
				className='flex'
				variants={stagger}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				{services.map(({ ...restServices }) => (
					<motion.div key={services.title} variants={fromTop}>
						<CardServices {...restServices} />
					</motion.div>
				))}
			</motion.div>
		</Container>
	);
};

const Container = styled.section`
	.flex {
		gap: 2.8rem;
		align-items: flex-start;
	}
`;
