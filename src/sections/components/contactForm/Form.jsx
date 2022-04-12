import styled from 'styled-components';
import { useState } from 'react';

import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import { MinTitle, variables } from '../../../shared/GlobalStyles';
import { Button } from '../../../shared/Button';
import toast, { Toaster } from 'react-hot-toast';
import { FormInput } from './FormInput';
import { SendButton } from '../../../shared/SendButton';
export const Form = () => {
	const form = useRef();

	const [values, setValues] = useState({
		username: '',
		email: '',
		message: '',
	});

	const emailData = {
		to_name: 'Jose Latines',
		from_name: values.email,
		name: values.name,
		message: values.message,
		reply_to: values.email,
	};
	const inputs = [
		{
			name: 'username',
			type: 'text',
			placeholder: 'Name',
			inputValue: values.username, // Dynamically shows the current state value
			errorMessage: 'The name must not be empty',
			label: 'Username',
			required: true,
		},
		{
			name: 'email',
			type: 'email',
			placeholder: 'Email',
			inputValue: values.email,
			errorMessage: 'It must be a valid email address!',
			label: 'Email',
			required: true,
		},
		{
			name: 'message',
			type: 'textarea',
			placeholder: 'Message',
			inputValue: values.message,
			errorMessage: 'The message must be at least 5 characters long',
			label: 'Message',
			required: true,
		},
	];

	const handleChange = e =>
		// Selects the current state and changes it
		setValues(prevValues => ({
			...prevValues,
			[e.target.name]: e.target.value,
		}));

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.send(
				'service_8gpefgi',
				'template_khtx0b7',
				emailData,
				'ogEwGhU5Q3FsEJvf0'
			)
			.then(
				result => {
					setValues({
						username: '',
						email: '',
						message: '',
					});
				},
				error => {
					console.log(error.text);
				}
			);

		toast.success('Email sended!');
		form.current.reset();
	};

	return (
		<Container ref={form} onSubmit={sendEmail}>
			<Toaster />
			<MinTitle>Send me a message</MinTitle>
			{inputs.map(input => (
				<FormInput key={input.name} {...input} handleChange={handleChange} />
			))}

			<Bottom>
				<SendButton content='Send'>
					<input type='submit' />
				</SendButton>
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
