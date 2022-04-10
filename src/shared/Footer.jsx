import styled from 'styled-components';
import { motion } from 'framer-motion';

import { variables } from './GlobalStyles';
import { HashLink } from 'react-router-hash-link';

export const Footer = ({ socialMedia }) => {
	return (
		<Container>
			<Row>
				<Column>
					<a
						href='https://linktr.ee/joselatines'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Title as='h2'>Jose Latines</Title>
						<Subtitle>Frontend Web Developer</Subtitle>
					</a>
				</Column>

				<Column>
					<Title>Useful Links</Title>
					<Ul>
						<Li>
							<a href='http://' target='_blank' rel='noopener noreferrer'>
								How do I made this?
							</a>
						</Li>
						<Li>
							<a
								href='https://github.com/joselatines'
								target='_blank'
								rel='noopener noreferrer'
							>
								Full Portfolio
							</a>
						</Li>
					</Ul>
				</Column>

				<Column>
					<Title>Social Media</Title>
					<SocialMedia>
						<div className='icons'>
							{socialMedia.map(({ name, icon, link }) => (
								<a
									key={name}
									href={link}
									target='_blank'
									rel='noopener noreferrer'
								>
									{icon}
								</a>
							))}
						</div>
					</SocialMedia>
				</Column>
			</Row>
			<HashLink smooth to='#home'>
				<ToTop
					initial={{ y: 100, scale: 0 }}
					whileInView={{
						y: 0,
						scale: 1,
						transition: { duration: .2},
					}}
				>
					<ion-icon name='arrow-up-outline'></ion-icon>
				</ToTop>
			</HashLink>
		</Container>
	);
};

const Container = styled.footer`
	font-size: 13px;

	display: flex;
	align-items: center;
	gap: 1em;
	position: relative;

	background-color: ${variables.colors.primary};
	color: ${variables.colors.font_default};
	padding: 3em;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 2em;
	width: 100%;
`;

const Column = styled.div``;
const Title = styled.span`
	font-size: 2em;
	font-weight: ${variables.font.semiBold};
`;
const Subtitle = styled.h1`
	font-size: 1.3em;
	font-weight: ${variables.font.light};
`;
const Ul = styled.ul`
	list-style-type: none;
`;
const Li = styled.li`
	font-size: 1.1em;
	transition: ${variables.transitions.short};
	&:hover {
		transform: translateX(5px);
	}
`;

const ToTop = styled(motion.div)`
	position: absolute;
	top: -120px;
	right: 0;

	display: flex;
	align-items: center;
	justify-content: center;

	background: linear-gradient(
		180deg,
		${variables.colors.primary} 0%,
		#4924c2 100%
	);
	-webkit-box-shadow: 5px 5px 15px 5px rgba(99, 51, 255, 0.19);
	padding: 0.6em 0.8em;
	border-radius: 15px 0 00 15px;
	cursor: pointer;

	ion-icon {
		transition: ${variables.transitions.short};
		&:hover {
			transform: translateY(-3px);
		}
	}
`;

const SocialMedia = styled.div`
	display: grid;
	gap: 0.5em;
	a {
		color: ${variables.colors.font_default};
		font-size: 2em;
		transition: ${variables.transitions.short};
		&:hover {
			color: ${variables.colors.secondary};
		}
	}
	.icons {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
	}
`;
