import { variables } from '../../../shared/GlobalStyles';
import styled from 'styled-components';

export const FormInput = ({
	label,
	errorMessage,
	onChange,
	type,
	...inputProps
}) => {
	console.log(inputProps);
	return (
		<Container>
			<Input
				as={type === 'textarea' && 'textarea'}
				className={type === 'textarea' && 'textarea'}
				{...inputProps}
			/>
			<span className='underline'></span>
		</Container>
	);
};

const Input = styled.input``;

const Container = styled.div`
	position: relative;
	font-size: 0.7rem;

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
	}
	textarea {
		display: block; // Fix underline effect
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
