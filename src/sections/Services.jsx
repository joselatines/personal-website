import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CardServices } from './components/CardServices';
import { TitleSection } from './components/TitleSection';
import { fromTop, stagger } from '../shared/Animations';

export const Services = ({ services }) => {
	return (
		<Container id='services' className='section'>
			<TitleSection title='Services' subtitle='What I am currently working on' />
			<motion.div
				className='flex'
				variants={stagger}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				{services.map(({ title, content, icon, link }) => (
					<motion.div key={title} variants={fromTop}>
						<CardServices
							title={title}
							content={content}
							icon={icon}
							link={link}
						/>
					</motion.div>
				))}
			</motion.div>
		</Container>
	);
};

const Container = styled.section`
	.flex {
		gap: 2.8rem;
	}
`;
