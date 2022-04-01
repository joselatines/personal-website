import styled from 'styled-components';
import { motion } from 'framer-motion';

import { variables } from '../../shared/GlobalStyles';
export const Skills3D = ({ mouseX, mouseY }) => {
	const skills = [
		{
			name: 'React Js',
			type: 'main',
			priority: 1,
			posX: 20,
			posY: 20,
			gridArea: 'c3',
		},
		{
			name: 'Javascript',
			type: 'main',
			priority: 2,
			posX: 25,
			posY: 25,
			gridArea: 'b4',
		},
		{
			name: 'Bootstrap',
			type: 'main',
			priority: 3,
			posX: 25,
			posY: 25,
			gridArea: 'd4',
		},
		{
			name: 'Framer motion',
			type: 'medium',
			priority: 1,
			gridArea: 'd2',
		},
		{
			name: 'Styled-components',
			type: 'medium',
			priority: 2,
			gridArea: 'c4',
		},
		{
			name: 'Git',
			type: 'medium',
			priority: 2,
			gridArea: 'b5',
		},
		{
			name: 'HTML',
			type: 'little',
			priority: 1,
			gridArea: 'b3',
		},
		{
			name: 'CSS',
			type: 'little',
			priority: 2,
			gridArea: 'd3',
		},
		{
			name: 'Figma',
			type: 'little',
			priority: 3,
			gridArea: 'c2',
		},
		{
			name: 'Photoshop',
			type: 'little',
			priority: 4,
			gridArea: 'c5',
		},
		{
			name: 'Sass',
			type: 'little',
			priority: 4,
			gridArea: 'd5',
		},
	];

	const parallaxEffect = (X = 40, Y = 40) =>
		`translate(${mouseX / 2 / -X}px, ${mouseY / 2 / -Y}px)`;

	console.log(mouseX);

	return (
		<Container>
			{skills.map(({ name, type, priority, posX, posY, gridArea }) => (
				<motion.h4
					animate={{ transform: parallaxEffect(posX, posY) }}
					style={{ gridArea: gridArea }}
					transition={{}}
					key={name}
					className={`${type} ${type}-${priority}`}
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
	font-size: 16px;

	display: grid;
	grid-auto-columns: 1fr;
	grid-template-columns: repeat(5, auto);
	grid-template-rows: repeat(5, auto);
	justify-content: center;
	align-items: center;
	gap: 1rem;
	grid-template-areas:
		'. . . . .'
		'. b2 c2 d2 .'
		'. b3 c3 d3 .'
		'. b4 c4 d4 .'
		'. b5 c5  d5 .';

	padding-top: 3rem; // Fixes wrong position
	@media screen and (max-width: ${variables.mediaQueries.tablet}) {
		font-size: 12px;
	}
	h4 {
		color: ${variables.colors.secondary};
	}
	.main {
		font-size: 2em;
		&.main-1 {
			font-size: 2.5em;
			z-index: 5;
		}
	}
	.medium {
		font-size: 1em;
		opacity: 0.8;
	}
	.little {
		font-size: 0.7em;
		opacity: 0.6;
	}
`;
