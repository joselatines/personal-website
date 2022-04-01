import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { MinTitle, variables } from '../../shared/GlobalStyles';
import { Button } from '../../shared/Button';

export const CardServices = ({ title, icon, content, link }) => {
	return (
		<Container>
			<Icon>{icon}</Icon>
			<MinTitle style={{ cursor: 'pointer' }}>{title}</MinTitle>
			<Content className='flex'>{content}</Content>
			<a href={link} target='_blank' rel='noopener noreferrer'>
				<Button content='Fiverr' />
			</a>
		</Container>
	);
};

const Container = styled.article`
	width: 16rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	.flex {
		gap: 1rem;
	}
`;
const Icon = styled(motion.div)`
	border-radius: 20px;
	overflow: hidden;
	width: 100%;
	height: 10rem;
	margin-bottom: 0.5rem;
	position: relative;
	.description {
		position: absolute;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		height: 0px;
		padding: 1rem;
		overflow: hidden;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
	}
`;

const Content = styled.article``;
