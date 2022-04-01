import { useState } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { variables } from './GlobalStyles';
import { Button } from './Button';

export const Navigation = () => {
	const [showNav, setShowNav] = useState(false);

	const list = ['Portfolio', 'Skills', 'Services', 'Clients', 'About Me'];

	const variants = {
		visible: {
			opacity: 1,
			height: showNav ? '350px' : '65px',
			transition: { duration: 0.5 },
		},
	};

	return (
		<Container
			// Styled components props only receives strings
			show={showNav.toString()}
			variants={variants}
			initial='hidden'
			animate='visible'
		>
			<Logo className='Logo'>Jose Latines</Logo>
			<LinksContainer className='LinksContainer'>
				<Ul className='Ul'>
					{list.map(el => (
						<Li key={el}>{el}</Li>
					))}
				</Ul>
			</LinksContainer>
			<div className='Right'>
				<Button content='Contact' />
			</div>
			<Hamburger
				onClick={() => setShowNav(prevState => !prevState)}
				className='Hamburger'
			>
				<Bar show={showNav} />
				<Bar show={showNav} />
				<Bar show={showNav} />
			</Hamburger>
		</Container>
	);
};

const Container = styled(motion.nav)`
	display: ${props => (props.hide === 'true' ? 'none' : 'grid')};
	justify-content: center;
	align-items: center;
	grid-template-columns: auto 1fr auto;
	grid-template-rows: 1fr;
	grid-template-areas: 'Logo Links Right';
	gap: 1rem;

	position: fixed;
	top: 15px;
	left: 50%;
	z-index: 100;
	transform: translateX(-50%);
	width: 90%;

	padding: 1rem 1.5rem;
	font-size: 1rem;
	font-family: ${variables.font.titles};
	font-weight: ${variables.font.semiBold};
	border-radius: 30px;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);

	@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
		grid-template-rows: auto auto;
		grid-template-areas:
			'Logo . Right'
			'Links Links Links';
		overflow: hidden;
		.Hamburger {
			@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
				display: block;
			}
		}
		.LinksContainer,
		.Ul {
			flex-direction: column;
			width: 100%;
			margin-top: 3px;
		}
	}
	.Right {
		grid-area: Right;
	}
`;
const Logo = styled.h2`
	font-size: clamp(.8rem, 2.5vw, 3rem);
	grid-area: Logo;
`;
const LinksContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
	grid-area: Links;
`;

const Ul = styled.ul`
	list-style-type: none;
	display: flex;
	gap: 1.5rem;
`;
const Li = styled.li`
	color: ${variables.colors.gray};
	cursor: pointer;
	transition: ${variables.transitions.short};
	&:hover {
		color: ${variables.colors.font_default};
	}
	&.active {
		border-bottom: solid 1px ${variables.colors.primary};
		color: ${variables.colors.font_default};
	}
`;

const Hamburger = styled.div`
	cursor: pointer;
	display: none;
`;
const Bar = styled.span`
	display: block;
	width: 25px;
	height: 3px;
	margin: 5px auto;
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	background-color: ${variables.colors.font_default};
	// Effect
	${props =>
		props.show &&
		css`
			&:nth-child(2) {
				opacity: 0;
			}
			&:nth-child(1) {
				transform: translateY(8px) rotate(45deg);
			}
			&:nth-child(3) {
				transform: translateY(-8px) rotate(-45deg);
			}
		`}
`;
