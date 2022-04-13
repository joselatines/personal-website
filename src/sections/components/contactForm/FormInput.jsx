import { variables } from '../../../shared/GlobalStyles';
import styled from 'styled-components';

export const FormInput = ({
	label,
	errorMessage,
	handleChange,
	type,
	inputValue,
	...inputProps
}) => {
	return (
		<Container>
			<InputContainer>
				<InputField
					as={type === 'textarea' && 'textarea'}
					className={type === 'textarea' && 'textarea'}
					onChange={handleChange}
					value={inputValue}
					{...inputProps}
				/>
				<span className='underline'></span>
			</InputContainer>
		</Container>
	);
};

const InputField = styled.input``;
const Error = styled.span`
	display: none;
	color: ${variables.colors.danger};
	font-size: 0.8em;
	transition: ${variables.transitions.short};
	position: absolute;
`;
const InputContainer = styled.div`
	position: relative;

	input,
	textarea {
		all: unset;
		word-wrap: break-word;
		border-bottom: solid 1px ${variables.colors.gray};
		width: 100%;
		height: 100%;
		z-index: 2;
		&:focus ~ .underline {
			width: 100%;
		}
		&:invalid ~ ${Error} {
			display: block;
		}
	}

	textarea {
		display: block; // Fix issue with the underline
	}

	.underline {
		position: absolute;

		border-bottom: 1px solid ${variables.colors.primary};
		height: 100%;
		width: 0%;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		transition: ${variables.transitions.short};
	}
`;

const Container = styled.div`
	font-size: 0.7rem;
`;
