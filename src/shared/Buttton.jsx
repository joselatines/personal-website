import styled from 'styled-components';
import { variables } from './GlobalStyles';

export const Button = ({ content, icon, type }) => {
	return (
		<Container type={type}>
			<span>{content}</span>
			<span>{icon}</span>
		</Container>
	);
};

const Container = styled.button`
	all: unset;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${variables.font.titles};

	padding: 0.2rem 0.8rem;
	border-radius: 50px;
	border: 2px solid transparent;
	/* 	border-image-source: linear-gradient(180deg, #6333ff 0%, #4924c2 100%); */
	background: linear-gradient(180deg, #6333ff 0%, #4924c2 100%);
	-webkit-box-shadow: 5px 5px 15px 5px rgba(99, 51, 255, 0.19);
	box-shadow: 5px 5px 15px 5px rgba(99, 51, 255, 0.19);
`;
