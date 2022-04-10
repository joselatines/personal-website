import styled from 'styled-components';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import CV from './assets/CV.pdf';
import { Button } from '../shared/Button';
import { ScrollDown } from './components/ScrollDown';
import { Title, variables } from '../shared/GlobalStyles';
import { containerVar } from '../shared/Animations';
import { matrixEffect } from './components/matrixEffect';

export const Header = () => {
	const matrixRef = useRef();

	useEffect(() => {
		matrixEffect(matrixRef, variables.colors.primary);
	}, []);

	const subtitleVar = {
		hidden: { opacity: 0, x: 200 },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: variables.transitions.duration,
				ease: variables.transitions.ease,
			},
		},
	};

	const titleVar = {
		hidden: { opacity: 0, x: -200 },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: variables.transitions.duration,
				ease: variables.transitions.ease,
			},
		},
	};
	const btnVar = {
		hidden: { y: 100, opacity: 0 },
		show: {
			y: 0,
			opacity: 1,
			transition: {
				duration: variables.transitions.duration,
				ease: variables.transitions.ease,
			},
		},
	};

	return (
		<Container id='home' className='section'>
			<motion.div variants={titleVar} initial='hidden' animate='show'>
				<Title as='h1'>Frontend Web Developer</Title>
			</motion.div>
			<Name
				variants={containerVar}
				initial='hidden'
				animate='show'
				className='flex'
			>
				<motion.span variants={subtitleVar}>Jose Latines</motion.span>
				<motion.span variants={subtitleVar} className='AKA'>
					AKA DoctorDraxter
				</motion.span>
			</Name>
			<Btns className='flex' variants={btnVar} initial='hidden' animate='show'>
				<a
					href={CV}
					target='_blank'
					download='Frontend-Developer-Jose-Latines.pdf'
				>
					<Button content='Download CV' type='outline' />
				</a>
				<Button content='Projects' />
			</Btns>
			<ScrollDownContainer>
				<ScrollDown />
			</ScrollDownContainer>
			<canvas ref={matrixRef} id='Matrix'></canvas>
		</Container>
	);
};
const Container = styled.header`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;
	#Matrix {
		position: absolute;
		z-index: -1;
		height: 100%;
		width: 100%;
	}
`;
const Name = styled(motion.div)`
	gap: 0.5rem;
	font-size: 1.8rem;
	font-weight: ${variables.font.semiBold};
	.AKA {
		color: ${variables.colors.gray};
	}
`;
const Btns = styled(motion.div)`
	margin: 1rem 0;
	font-size: 126px;
	gap: 2rem;
`;
const ScrollDownContainer = styled.div`
	position: absolute;
	bottom: 30px;
`;
