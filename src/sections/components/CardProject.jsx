import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Button } from '../../shared/Button';
import { MinTitle, variables } from '../../shared/GlobalStyles';

export const CardProject = ({ title, img, preview, code, content }) => {
	const [isFlip, setIsFlip] = useState(false); // Delete this if you want to flip on hover

	return (
		<Container>
			<MinTitle>{title}</MinTitle>
			<Card onClick={() => setIsFlip(!isFlip)} isFlip={isFlip} img={img}>
				<div className='front'></div>

				<div className='back'>
					<p>{content}</p>
					<img src={img} alt={title} />
				</div>
			</Card>
			<div className='flex'>
				<a href={code} target='_blank' rel='noopener noreferrer'>
					<Button content='</> Code' type='outline' />
				</a>
				<a href={preview} target='_blank' rel='noopener noreferrer'>
					<Button content='View' />
				</a>
			</div>
		</Container>
	);
};

const Container = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5em;
	font-size: 0.9rem;
	text-align: center;
`;

const Card = styled.div`
	/* THE CARD HOLDS THE FRONT AND BACK FACES */

	border-radius: 20px;
	transform-style: preserve-3d;
	transition: all 0.8s ease;
	cursor: pointer;

	width: 14vw;
	height: 10em;
	min-width: 16em;

	transform: ${({ isFlip }) => isFlip && 'rotateY(180deg)'};
	/* HE PSEUDO CLASS CONTROLS THE FLIP ON MOUSEOVER AND MOUSEOUT 
	&:hover {
		transform: rotateY(180deg);
	} */

	.front,
	.back {
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: hidden;
		backface-visibility: hidden;
		border-radius: 10px;
	}
	/* THE FRONT FACE OF THE CARD, WHICH SHOWS BY DEFAULT */
	.front {
		background-color: ${variables.colors.bg_default};
		background-image: url(${({ img }) => img});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		width: 100%;
		height: 100%;
	}
	/* THE BACK FACE OF THE CARD, WHICH SHOWS ON MOUSEOVER */
	.back {
		background: transparent;
		color: ${variables.colors.font_default};
		transform: rotateY(180deg);
		padding: 1em;
		text-align: center;
		display: grid;
		align-items: center;
		justify-content: center;
		font-size: 0.8em;
		position: relative;

		img {
			position: absolute;
			z-index: -1;
			width: 100%;
			height: 100%;

			filter: blur(3px) brightness(50%);
			-webkit-filter: blur(3px) brightness(50%);
			-moz-filter: blur(3px) brightness(50%);

			// Mirror effect
			-webkit-transform: scaleX(-1);
			transform: scaleX(-1);
		}

		strong {
			color: ${variables.colors.font_default};
		}
	}
`;
