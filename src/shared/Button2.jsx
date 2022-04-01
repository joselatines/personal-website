import styled, { css } from 'styled-components';
import { variables } from './GlobalStyles';

export const Button2 = ({ content, icon, type }) => {
	return (
		<Container>
			<div>
				<span>
					<p>Hover Me</p>
					{/* <p>:)</p> */}
				</span>
			</div>
			<div>
				<span>
					<p>Thanks</p>
					<p>:D</p>
				</span>
			</div>
		</Container>
	);
};

const Container = styled.button`
	outline: 0;
	border: 0;

	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 140px;
	height: 50px;
	border-radius: 50px;
	box-shadow: 0 0.625em 1em 0 rgba(30, 143, 255, 0.35);
	overflow: hidden;

	transition: .8s cubic-bezier(0.16, 1, 0.3, 1);
	&:active {
		transform: scale(0.95);
	}
	&:hover {
		box-shadow: 0 0.625em 1em 0 rgba(33, 220, 98, 0.35);
		div {
			transform: translateY(-50px);
		}
	}
	div {
		transform: translateY(0px);
		width: 100%;
		transition: .8s cubic-bezier(0.16, 1, 0.3, 1);
		&:nth-child(1) {
			background: linear-gradient(
				180deg,
				${variables.colors.primary} 0%,
				#4924c2 100%
			);
		}
		&:nth-child(2) {
			background-color: ${variables.colors.secondary};
		}
		span {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 50px;
			padding: 0.75em 1.125em;
		}
	}
	p {
		font-family: ${variables.font.titles};
		font-weight: ${variables.font.semiBold};
		font-size: 17px;
		color: #ffffff;
	}
`;
