import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { variables } from './GlobalStyles';

export const Button = ({ content, icon, type }) => {
	return (
		<Container type={type}>
			{icon && <Icon>{icon}</Icon>}
			<span>{content}</span>
		</Container>
	);
};

Button.defaultProps = {
	content: 'Button',
};
Button.propTypes = {
	content: PropTypes.string.isRequired,
	type: PropTypes.string,
};

const Container = styled.button`
	all: unset;
	color: #fff;

	font-weight: ${variables.font.main};
	font-size: 0.6em;
	
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5em;

	cursor: pointer;
	transition: ${variables.transitions.short};

	padding: 0.7em 1.5em;
	border-radius: 50px;
	border: 2px solid transparent;
	background: linear-gradient(
		180deg,
		${variables.colors.primary} 0%,
		#4924c2 100%
	);
	-webkit-box-shadow: 5px 5px 15px 5px rgba(99, 51, 255, 0.19);
	box-shadow: 5px 5px 15px 5px rgba(99, 51, 255, 0.19);

	&:hover {
		background-color: ${variables.colors.primary};
		box-shadow: 0px 15px 20px rgba(99, 51, 255, 0.4);
		transform: translateY(-7px);
	}

	&:active {
		transform: translateY(-1px);
	}

	${props =>
		props.type === 'outline' &&
		css`
			border: 2px solid ${variables.colors.primary};
			background: unset;
		`}
	${props =>
		props.type === 'circle' &&
		css`
			width: 2vw;
			height: 2vw;
			padding: .8rem;
			border-radius: 50%;
			position: relative;
			&:before {
				content: '';
				position: absolute;

				width: 100%;
				height: 100%;
				padding: 1em;
				border-radius: 50%;
				background: unset;
				border: 2px dashed ${variables.colors.gray};
				animation: spin 20s linear infinite;
				&:hover {
					animation-play-state: spin paused;
				}
			}

			@keyframes spin {
				100% {
					-webkit-transform: rotate(360deg);
					transform: rotate(360deg);
				}
			}
		`}
`;

const Icon = styled.div``;
