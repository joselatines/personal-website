import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Title, variables } from '../../shared/GlobalStyles';

export const TitleSection = ({ title, subtitle }) => {
	return (
		<Container>
			<ThisTitle>{title}</ThisTitle>
			<Subtitle>{subtitle}</Subtitle>
		</Container>
	);
};

const Container = styled.div`
	margin-bottom: 2rem;
`;
const ThisTitle = styled(Title)``;
const Subtitle = styled.span`
	color: ${variables.colors.gray};
	font-weight: ${variables.font.light};
	font-size: 1.3rem;
	letter-spacing: 0.15em;
`;
