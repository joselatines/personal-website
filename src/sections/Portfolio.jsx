import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Button } from '../shared/Button';
import { TitleSection } from './components/TitleSection';
import { CardProject } from './components/CardProject';
import { fromTop, stagger } from '../shared/Animations';

export const Portfolio = ({ projects }) => {
	return (
		<Container id='portfolio' className='section'>
			<TitleSection title='Portfolio' subtitle='What I worked' />
			<motion.div
				className='flex'
				variants={stagger}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				{projects.map(({ title, img, preview, code, content }) => (
					<motion.div key={title} variants={fromTop}>
						<CardProject
							title={title}
							img={img}
							code={code}
							preview={preview}
							content={content}
						/>
					</motion.div>
				))}
			</motion.div>
			<div className='more'>
				<a
					href='https://www.behance.net/joselatines'
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
		width: fit-content;
		right: 3rem;
		margin-top: 2rem;
	}
`;
