import styled from 'styled-components';
import { motion } from 'framer-motion';

import { MinTitle, variables } from '../../shared/GlobalStyles';
import { Button } from '../../shared/Button';

export const CardServices = ({ title, icon, content, link }) => {
	return (
		<Container>
			<div>
				<Icon>{icon}</Icon>
				<MinTitle className='title'>{title}</MinTitle>
				<Content>{content}</Content>
			</div>
			<a href={link} target='_blank' rel='noopener noreferrer'>
				<Button content='Contract this service' />
			</a>
		</Container>
	);
};

const Container = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	min-width: 18em;
	max-width: 20vw;
	min-height: 50vh;
	padding: 2em;
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

	.title {
		line-height: 1;
	}

	.flex {
		gap: 1em;
	}
`;
const Icon = styled(motion.div)`
	font-size: clamp(3em, 5vw, 10em);
	color: ${variables.colors.secondary};
`;

const Content = styled.article`
	color: ${variables.colors.gray};
	margin: 1em 0;
`;
