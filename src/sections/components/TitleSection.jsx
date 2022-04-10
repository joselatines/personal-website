import styled from 'styled-components';
import { motion } from 'framer-motion';
import { variables } from '../../shared/GlobalStyles';
import { stagger } from '../../shared/Animations';

export const TitleSection = ({ title, subtitle }) => {
	const titleVar = {
		hidden: { x: 100, opacity: 0 },
		show: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				ease: variables.transitions.ease,
			},
		},
	};
	const subtitleVar = {
		hidden: { y: 5, opacity: 0 },
		show: {
			y: 0,
			opacity: 1,

			transition: {
				duration: 1,
				ease: variables.transitions.ease,
			},
		},
	};

	return (
		<Container
			variants={stagger}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
			<Title variants={titleVar}>{title}</Title>
			<Subtitle variants={subtitleVar}>{subtitle}</Subtitle>
		</Container>
	);
};

const Container = styled(motion.div)`
	margin-bottom: 2rem;
`;
const Title = styled(motion.span)`
	font-weight: ${variables.font.bold};
	font-family: ${variables.font.titles};
	font-size: clamp(0.8rem, 8.5vw, 4rem);
	letter-spacing: 1px;
	display: block;
`;
const Subtitle = styled(motion.p)`
	color: ${variables.colors.gray};
	font-weight: ${variables.font.light};
	font-size: 1.3rem;
	letter-spacing: 0.15em;
`;
