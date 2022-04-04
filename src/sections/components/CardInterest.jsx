import styled from 'styled-components';
import { motion } from 'framer-motion';

import { variables } from '../../shared/GlobalStyles';

export const CardInterest = ({ interest, svg }) => {
	const pathVariants = {
		hidden: {
			opacity: 0,
			pathLength: 0,
		},
		visible: {
			opacity: 1,
			pathLength: 1,
			transition: {
				duration: 2,
				ease: 'easeInOut',
			},
		},
	};
	return (
		<Container>
			<Svg>{svg}</Svg>
			<Title>{interest}</Title>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Svg = styled.div`
	width: 5rem;
	fill: #fff;

	/* 	stroke-dasharray: 1000;
	stroke-dashoffset: 1000;
	animation: dash 10s linear forwards;
	stroke: ${variables.colors.secondary};
	@keyframes dash {
		to {
			stroke-dashoffset: 0;
		}
	} */
`;
const Title = styled.span`
	font-size: 0.8rem;
	font-weight: ${variables.font.semiBold};
`;
