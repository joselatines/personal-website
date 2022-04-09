import styled from 'styled-components';
import { motion } from 'framer-motion';

import { variables } from '../../shared/GlobalStyles';

export const CardInterest = ({ name, d, viewBox }) => {
	const svgVariants = {
		hidden: {
			fill: variables.colors.bg_default,
		},
		visible: {
			fill: variables.colors.secondary,
			transition: {
				duration: 2,
				delay: 1,
			},
		},
	};

	const pathVariants = {
		hidden: {
			pathLength: 0,
		},
		visible: {
			pathLength: 1,
			transition: {
				duration: 5,
				ease: 'linear',
			},
		},
	};

	return (
		<Container className='flex'>
			<Svg>
				<motion.svg
					variants={svgVariants}
					initial='hidden'
					whileInView='visible'
					viewBox={viewBox}
				>
					<g>
						<motion.path
							variants={pathVariants}
							whileInView='visible'
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
