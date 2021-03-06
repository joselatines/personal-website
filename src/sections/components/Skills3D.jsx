import styled from 'styled-components';
import { motion } from 'framer-motion';

import { variables } from '../../shared/GlobalStyles';
export const Skills3D = ({ mouseX, mouseY }) => {
	const skills = [
		{
			name: 'React',
			type: 'main',
			posX: 25,
			posY: 25,
			gridArea: 'c3',
		},
		{
			name: 'Javascript',
			type: 'main',
			posX: 25,
			posY: 25,
			gridArea: 'b4',
		},
		{
			name: 'Typescript',
			type: 'main',
			priority: 3,
			posX: 25,
			posY: 25,
			gridArea: 'd4',
		},
		{
			name: 'Jest',
			type: 'medium',
			gridArea: 'c4',
		},
		{
			name: 'Redux toolkit',
			type: 'medium',
			gridArea: 'b3',
			posX: 85,
			posY: 85,
		},
		{
			name: 'Git',
			type: 'medium',
			gridArea: 'b5',
		},
		{
			name: 'HTML',
			type: 'little',
			gridArea: 'd2',
		},
		{
			name: 'Node Js',
			type: 'little',
			gridArea: 'd3',
			posX: 85,
			posY: 85,
		},
		{
			name: 'Adobe XD',
			type: 'little',
			priority: 3,
			gridArea: 'c2',
			posX: 85,
			posY: 85,
		},
		{
			name: 'Next Js',
			type: 'little',
			priority: 4,
			gridArea: 'c5',
			posX: 85,
			posY: 85,
		},
		{
			name: 'Sass',
			type: 'little',
			priority: 4,
			gridArea: 'd5',
			posX: 85,
			posY: 85,
		},
	];

	const parallaxEffect = (X = 50, Y = 50) =>
		`translate(${mouseX / -X}px, ${mouseY / -Y}px)`;

	return (
		<Container>
			{skills.map(({ name, type, posX, posY, gridArea }) => (
				<motion.h4
					animate={{ transform: parallaxEffect(posX, posY) }}
					transition={{ ease: 'linear' }}
					style={{ gridArea: gridArea }}
					key={name}
					className={type}
				>
					{name}
				</motion.h4>
			))}
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	font-family: ${variables.font.titles};

	display: grid;
	grid-template-columns: 1fr 1fr auto;
	grid-template-rows: repeat(4, 1fr);

	gap: 1rem;
	grid-template-areas:
		'b2 c2 d2'
		'b3 c3 d3'
		'b4 c4 d4'
		'b5 c5 d5';

	padding-top: 3rem; // Fixes wrong position

	h4 {
		color: ${variables.colors.secondary};
		font-weight: ${variables.font.semiBold};
		cursor: default;
		text-shadow: 0 0 20px ${variables.colors.secondary},
			2px 2px 2px rgba(206, 89, 55, 0);
		&:hover {
			text-shadow: 0 0 20px ${variables.colors.secondary},
				20px 20px 20px rgba(206, 89, 55, 0);
		}
	}
	.main {
		font-size: clamp(1rem, 2vw, 5rem);
	}
	.medium {
		font-size: clamp(.9rem, 0.8vw, 4.5rem);
		opacity: 0.7;
	}
	.little {
		font-size: clamp(.8rem, 0.5vw, 4rem);
		opacity: 0.5;
	}
`;
