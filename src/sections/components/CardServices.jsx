import styled from 'styled-components';
import { motion } from 'framer-motion';

import { MinTitle, variables } from '../../shared/GlobalStyles';
import { Button } from '../../shared/Button';

export const CardServices = ({ title, icon, content, link }) => {
	const cardVar = {
		hidden: { scale: 0 },
		show: {
			scale: 1,
			transition: { duration: 0.5, ease: variables.transitions.ease },
		},
	};
	return (
		<Container>
			<Icon>{icon}</Icon>
			<MinTitle>{title}</MinTitle>
			<Content>{content}</Content>
			<a href={link} target='_blank' rel='noopener noreferrer'>
				<Button content='Contract this service' />
			</a>
		</Container>
	);
};

const Container = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: flex-start;
	gap: 0.5rem;
	width: 20rem;
	padding: 2rem;
	border-radius: 30px;

	background: ${variables.colors.dark_gray};
	background: -moz-linear-gradient(
		90deg,
		rgba(26, 26, 37, 1) 0%,
		rgba(26, 26, 37, 1) 100%
	);
	background: -webkit-linear-gradient(
		90deg,
		rgba(26, 26, 37, 1) 0%,
		rgba(26, 26, 37, 1) 100%
	);
	background: linear-gradient(
		90deg,
		rgba(26, 26, 37, 1) 0%,
		rgba(26, 26, 37, 1) 100%
	);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1a1a25",endColorstr="#1a1a25",GradientType=1);

	.flex {
		gap: 1rem;
	}
`;
const Icon = styled(motion.div)`
	font-size: 3rem;
	color: ${variables.colors.secondary};
`;

const Content = styled.article`
	color: ${variables.colors.gray};
	margin-bottom: 1rem;
`;
