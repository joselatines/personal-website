import styled from 'styled-components';
import { motion } from 'framer-motion';

import { variables } from '../../shared/GlobalStyles';

export const CardInterest = ({ name, d, viewBox }) => {
	const svgVariants = {
		hidden: {
			fill: variables.colors.bg_default,
		},
		show: {
			fill: variables.colors.secondary,
			transition: {
				duration: variables.transitions.duration,
				delay: 1,
			},
		},
	};

	const pathVariants = {
		hidden: {
			pathLength: 0,
		},
		show: {
			pathLength: 1,
			transition: {
				duration: variables.transitions.duration,
				ease: variables.transitions.ease,
			},
		},
	};

	return (
		<Container className='flex'>
			<Svg>
				<motion.svg
					variants={svgVariants}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					viewBox={viewBox}
				>
					<g>
						<motion.path
							variants={pathVariants}
							whileInView='show'
							viewport={{ once: true }}
							d={d}
						/>
					</g>
				</motion.svg>
				<Title>{name}</Title>
			</Svg>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	text-align: center;
`;
const Svg = styled.div`
	width: 5rem;
	stroke: ${variables.colors.secondary};
`;
const Title = styled.span`
	font-size: 0.8rem;
	font-weight: ${variables.font.light};
	margin-top: 0.8rem;
`;
