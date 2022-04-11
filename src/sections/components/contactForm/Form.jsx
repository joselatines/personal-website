import styled from 'styled-components';
import { useState } from 'react';

import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import { MinTitle, variables } from '../../../shared/GlobalStyles';
import { Button } from '../../../shared/Button';
import toast, { Toaster } from 'react-hot-toast';
import { FormInput } from './FormInput';
export const Form = () => {
	const form = useRef();

	const [inputsData, setInputsData] = useState({
		username: '',
		email: '',
		message: '',
	});

	const inputs = [
		{
			name: 'username',
			type: 'text',
			placeholder: 'Username',
			errorMessage:
				"Username should be 3-16 characters and shouldn't include any special character!",
			label: 'Username',
			pattern: '^[A-Za-z0-9]{3,16}$',
			required: true,
		},
		{
			name: 'email',
			type: 'email',
			placeholder: 'Email',
			errorMessage: 'It should be a valid email address!',
			label: 'Email',
			required: true,
		},
		{
			name: 'message',
			type: 'textarea',
			placeholder: 'Message',
			label: 'Message',
		},
	];

	const sendEmailFake = e => {
		e.preventDefault();

		form.current.reset();
		toast.success('Email sended!');
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
		form.current.reset();
		toast.success('Email sended!');
	};

	const onChange = e =>
		setInputsData({ ...inputsData, [e.target.name]: e.target.value });

	return (
		<Container ref={form} onSubmit={sendEmailFake}>
			<Toaster />
			<MinTitle>Send me a message</MinTitle>
			{inputs.map(input => (
				<FormInput key={input.name} {...input} onChange={onChange} />
			))}

			<Bottom>
				<Button content='Send Message'>
					<input type='submit' />
				</Button>
			</Bottom>
		</Container>
	);
};

const Container = styled.form`
	font-size: 1em;
	display: flex;
	flex-direction: column;
	gap: 2em;
	padding: 2em;
	border-radius: 20px;

	max-width: 100%;
	min-width: 17em;

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

const Bottom = styled.div`
	margin-top: 1em;
`;
