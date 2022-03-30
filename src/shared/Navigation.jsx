import { useState } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { variables } from './GlobalStyles';
import { Button } from './Buttton';

export const Navigation = () => {
	const [showNav, setShowNav] = useState(false);

	const list = ['Portfolio', 'Skills', 'Services', 'Clients', 'About Me'];

	return (
		<Container
			// Styled components props only receives strings
			show={showNav.toString()}
			transition={{
				duration: 0.5,
			}}
			animate={{
				height: showNav ? '350px' : '60px',
				backgroundColor: showNav ? variables.colors.bg_default : 'red',
			}}
			initial={{ height: '60px', backgroundColor: 'green' }}
		>
			<Logo className='Logo'>Jose Latines</Logo>
			<LinksContainer className='LinksContainer'>
				<Ul className='Ul'>
					{list.map(el => (
						<Li key={el} className='active'>{el}</Li>
					))}
				</Ul>
				<Button content='Contact' />
			</LinksContainer>
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
	display: ${props => (props.hide === 'true' ? 'none' : 'flex')};
	align-items: center;
	justify-content: space-between;
	padding: 1rem 1.5rem;
	font-size: 1rem;
	font-family: ${variables.font.titles};
	font-weight: ${variables.font.semiBold};
	border-radius: 30px;
	/* 	background-color: rgba(255, 23, 23, 0.241); */
	position: fixed;
	top: 15px;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
		align-items: flex-start;
		/* background-color: ${variables.colors.bg_default}; */
		overflow: hidden;
		.Hamburger {
			@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
				display: block;
			}
		}
		.LinksContainer {
			flex-direction: column;
		}
		.Ul {
			flex-direction: column;
			margin-top: 50px;
			width: 100%;
		}
	}
`;
const Logo = styled.h1`
	font-size: 1.3rem;
`;
const LinksContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
`;

const Ul = styled.div`
	list-style-type: none;
	display: flex;
	gap: 1.5rem;
`;
const Li = styled.div`
	color: ${variables.colors.gray};
	&:hover {
		opacity: 1;
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
