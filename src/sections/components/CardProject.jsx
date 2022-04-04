import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { MinTitle, variables } from '../../shared/GlobalStyles';
import { Button } from '../../shared/Button';

export const CardProject = ({ title, img, preview, code, description }) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<Container>
			<MinTitle style={{ cursor: 'pointer' }}>{title}</MinTitle>
			<Image
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				<motion.p
					animate={{ height: isHover ? '100%' : 0, y: isHover ? 0 : -50 }}
					className='description'
				>
					{description}
				</motion.p>
				<img src={img} alt={title} />
			</Image>
			<div className='flex'>
				<a href={code} target='_blank' rel='noopener noreferrer'>
					<Button content='Code' type='outline' />
				</a>
				<a href={preview} target='_blank' rel='noopener noreferrer'>
					<Button content='View' />
				</a>
			</div>
		</Container>
	);
};

const Container = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	width: 16rem;
	
	.flex {
		gap: 1rem;
	}
`;
const Image = styled(motion.div)`
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
		text-overflow: ellipsis;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
	}
`;
