import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from '../shared/Button';
import { ScrollDown } from './components/ScrollDown';
import { SubTitle, Title, variables } from '../shared/GlobalStyles';

export const Header = () => {
	return (
		<Container className='section'>
			<Title>Frontend Web Developer</Title>
			<Name className='flex'>
				<SubTitle>Jose Latines</SubTitle>
				<SubTitle className='AKA'>AKA DoctorDraxter</SubTitle>
			</Name>
			<Btns className='flex'>
				<Button content='Download CV' type='outline' />
				<Button content='Projects' />
			</Btns>
			<ScrollDownContainer>
				<ScrollDown />
			</ScrollDownContainer>
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
`;
const Name = styled.div`
	gap: 0.5rem;

	.AKA {
		color: ${variables.colors.gray};
	}
`;
const Btns = styled.div`
	margin: 1rem 0;
	font-size: 126px;
	gap: 2rem;
`;
const ScrollDownContainer = styled.div`
	position: absolute;
	bottom: 30px;
`;
