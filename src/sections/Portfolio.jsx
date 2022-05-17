import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Button } from '../shared/Button';
import { TitleSection } from './components/TitleSection';
import { CardProject } from './components/CardProject';
import { fromTop, stagger } from '../shared/Animations';

export const Portfolio = ({ projects }) => {
	return (
		<Container id='portfolio' className='section'>
			<TitleSection title='Portfolio' subtitle='What I have done' />
			<motion.div
				className='flex'
				variants={stagger}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				{projects.map(({ ...projects }) => (
					<motion.div key={projects.title} variants={fromTop}>
						<CardProject {...projects} />
					</motion.div>
				))}
			</motion.div>
			<div className='more'>
				<a
					href='https://github.com/joselatines'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Button content='More' type='circle' />
				</a>
			</div>
		</Container>
	);
};

const Container = styled.section`
	.flex {
		gap: 2.5rem;
	}
	.more {
		position: absolute;
		width: auto;
		right: 5rem;
		margin-top: 2rem;
	}
`;
