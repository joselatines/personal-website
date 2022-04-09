import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { variables } from './GlobalStyles';
import { Button } from './Button';
import { useEffect } from 'react';
import { useScrollListener } from '../hooks/useScrollListener';

export const Navigation = ({ navLinks }) => {
	const [toggleNav, setToggleNav] = useState(false);
	const scroll = useScrollListener();

	const variants = {
		hidden: { opacity: 0, height: '80px' },
		visible: {
			opacity: 1,
			height: toggleNav ? '360px' : '80px',
			y: scroll.y > 30 && scroll.y - scroll.lastY > 0 ? -500 : 0,
			transition: { duration: 0.5 },
		},
	};

	return (
		<Container
			// Styled components props only receives strings
			togglenav={toggleNav.toString()}
			variants={variants}
			initial='hidden'
			animate='visible'
		>
			<Logo className='Logo'>
				<HashLink smooth to='#home'>
					Jose Latines
				</HashLink>
			</Logo>
			<LinksContainer className='LinksContainer'>
				<Ul className='Ul'>
					{navLinks.map(({ name, id }) => (
						<Li key={name}>
							<HashLink smooth to={id}>
								{name}
							</HashLink>
						</Li>
					))}
				</Ul>
			</LinksContainer>
			<div className='Right'>
				<HashLink smooth to='#contact'>
					<Button content='Contact' />
				</HashLink>
			</div>
			<Hamburger onClick={() => setToggleNav(!toggleNav)} className='Hamburger'>
				<Bar togglenav={toggleNav} />
				<Bar togglenav={toggleNav} />
				<Bar togglenav={toggleNav} />
			</Hamburger>
		</Container>
	);
};

Navigation.defaultProps = {
	navLinks: [
		{ name: 'Item1', id: '#item1' },
		{ name: 'Item2', id: '#item2' },
		{ name: 'Item3', id: '#item3' },
		{ name: 'Item4', id: '#item4' },
		{ name: 'Item5', id: '#item5' },
		{ name: 'Item6', id: '#item6' },
	],
};

Navigation.propTypes = {
	navLinks: PropTypes.array.isRequired,
};

const Container = styled(motion.nav)`
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template-columns: auto 1fr auto;
	grid-template-rows: 1fr;
	grid-template-areas: 'Logo Links Right';

	gap: 1rem;
	padding: 1rem 2rem;
	font-size: 1rem;
	font-family: ${variables.font.titles};
	font-weight: ${variables.font.semiBold};
	border-radius: 30px;
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);

	position: fixed;
	top: 15px;
	z-index: 100;
	width: 100%;

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
const Logo = styled.div`
	font-size: clamp(0.8rem, 2.5vw, 3rem);
	grid-area: Logo;
	cursor: pointer;
`;
const LinksContainer = styled.div`
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
	transition: ${variables.transitions.short};
	a:hover {
		color: red;
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
		props.togglenav &&
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
