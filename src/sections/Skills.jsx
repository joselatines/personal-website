import { useState } from 'react';
import styled from 'styled-components';

import { variables } from '../shared/GlobalStyles';
import { TitleSection } from './components/TitleSection';
import { motion } from 'framer-motion';

import { Skills3D } from './components/Skills3D';

export const Skills = () => {
	const [mouseX, setMouseX] = useState(0);
	const [mouseY, setMouseY] = useState(0);

	const skillsVar = {
		hidden: { scale: 0, opacity: 0 },
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 1,
				ease: variables.transitions.ease,
			},
		},
	};
	const paragraphVar = {
		hidden: { x: -100, opacity: 0 },
		show: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				ease: variables.transitions.ease,
			},
		},
	};

	return (
		<Container
			id='skills'
			onMouseMove={e => {
				setMouseX(e.pageX);
				setMouseY(e.pageY);
			}}
			className='section'
		>
			<TitleSection title='Skills' subtitle='What I do, what I know' />
			<motion.div
				variants={paragraphVar}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
				className='grid'
			>
				<div>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
					natus necessitatibus facilis pariatur unde iusto vitae neque
					cupiditate ipsum magnam itaque quos expedita, quas qui quod sed
					consequuntur mollitia similique.
				</div>
				<motion.div
					variants={skillsVar}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='box'
				>
					<Skills3D mouseX={mouseX} mouseY={mouseY} />
				</motion.div>
			</motion.div>
		</Container>
	);
};

const Container = styled.section`
	.grid {
		grid-template-columns: 1fr 1fr;
		@media screen and (max-width: ${variables.mediaQueries.laptop}) {
			grid-template-columns: 1fr;
			grid-template-rows: auto auto;
		}
		.box {
			min-height: 50vh;
			height: 50vh;
		}
	}
`;
