import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import { MinTitle, variables } from '../../shared/GlobalStyles';
import { Button } from '../../shared/Button';
export const ContactForm = () => {
	const form = useRef();

	const sendEmailFake = e => {
		e.preventDefault();
		alert('Sended', e);
	};

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_8gpefgi',
				'template_khtx0b7',
				form.current,
				'ogEwGhU5Q3FsEJvf0'
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
	};

	return (
		<Container ref={form} onSubmit={sendEmailFake}>
			<MinTitle>Send me a message</MinTitle>

			<InputContainer>
				<Input type='text' name='name' required />
				<Placeholder htmlFor='name'>Name</Placeholder>
				<span className='underline'></span>
			</InputContainer>
			<InputContainer>
				<Input type='email' name='email' required />
				<Placeholder htmlFor='email'>Email</Placeholder>
				<span className='underline'></span>
			</InputContainer>
			<InputContainer className='textarea'>
				<Input as='textarea' name='message' required />
				<span className='underline'></span>
				<Placeholder htmlFor='message'>Message</Placeholder>
			</InputContainer>

			<Bottom>
				<Button content='Send Message'>
					<input type='submit' />
				</Button>
			</Bottom>
		</Container>
	);
};

const Container = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 3rem;
	border-radius: 20px;
	width: 100%;
	max-width: 35rem;

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
`;

const Placeholder = styled.label`
	position: absolute;
	left: 0;
	bottom: 5px;
	z-index: 1;
	color: ${variables.colors.gray};
	pointer-events: none;
	transition: ${variables.transitions.short};
`;

const Input = styled.input`
	all: unset;
	word-wrap: break-word;
	border-bottom: solid 1px ${variables.colors.gray};
	width: 100%;
	height: 100%;
	z-index: 2;

	&:focus ~ ${Placeholder} {
		bottom: 100%;
		font-size: 0.6rem;
		color: ${variables.colors.primary};
	}
	&:focus ~ .underline {
		width: 100%;
	}
`;
const Bottom = styled.div`
	margin-top: 1rem;
`;
const InputContainer = styled.div`
	position: relative;
	.underline {
		position: absolute;
		height: 1px;
		width: 0%;
		background-color: ${variables.colors.primary};
		bottom: -1px;
		left: 50%;
		transform: translateX(-50%);
		transition: ${variables.transitions.short};
	}
	height: 2rem;
	&.textarea {
		height: 4rem;
	}
`;
