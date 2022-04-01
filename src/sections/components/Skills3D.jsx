import styled from 'styled-components';

import { variables } from '../../shared/GlobalStyles';
export const Skills3D = ({ mouseX, mouseY }) => {
	const skills = [
		{
			name: 'Javascript',
			priority: 1,
			id: 1,
		},
		{
			name: 'Python',
			priority: 2,
			id: 2,
		},
		{
			name: 'Html',
			priority: 3,
			id: 3,
		},
		{
			name: 'CSS',
			priority: 3,
			id: 4,
		},
		{
			name: 'Figma',
			priority: 3,
			id: 5,
		},
	];

	const parallaxEffect = (X = 100, Y = 100) => {
		return {
			transform: 'translate(' + mouseX / -X + 'px,' + mouseY / -Y + 'px)',
		};
	};

	console.log(parallaxEffect());

	return (
		<Container>
			<h4 style={parallaxEffect()} className='main main-1'>
				React Js
			</h4>
			<h4 style={parallaxEffect()} className='main main-2'>
				Javascript
			</h4>
			<h4 style={parallaxEffect()} className='main main-3'>
				Hooks
			</h4>
			<h4 style={parallaxEffect()} className='medium medium-1'>
				HTML
			</h4>
			<h4 style={parallaxEffect()} className='medium medium-2'>
				CSS
			</h4>
			<h4 style={parallaxEffect()} className='medium medium-3'>
				GIT
			</h4>
			<h4 style={parallaxEffect()} className='little little-1'>
				Figma
			</h4>
			<h4 style={parallaxEffect()} className='little little-2'>
				Photoshop
			</h4>
			<h4 style={parallaxEffect()} className='little little-3'>
				Wordpress
			</h4>
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	border: red solid 1px;
	height: 100%;
	font-size: 16px;
	@media screen and (max-width: ${variables.mediaQueries.tablet}) {
		font-size: 12px;
	}
	h4 {
		position: absolute;
		color: ${variables.colors.secondary};
		display: inline-block;
	}
	.main {
		font-size: 2em;
		z-index: 4;
		&.main-1 {
			font-size: 2.5em;
			z-index: 5;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		&.main-2 {
			top: 20%;
		}
		&.main-3 {
			top: 30%;
			right: 0;
		}
	}
	.medium {
		font-size: 1.3em;
		top: 55%;
		&.medium-2 {
			right: 20%;
			top: 65%;
		}
		&.medium-3 {
			top: 80%;
			left: 50%;
		}
	}
	.little {
		font-size: 0.8em;
		&.little-1 {
			top: 10%;
			left: 50%;
		}
		&.little-2 {
			bottom: 20%;
			left: 10%;
		}
		&.little-3 {
			bottom: 5%;
			left: 0;
		}
	}
`;
