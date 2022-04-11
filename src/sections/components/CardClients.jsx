import styled from 'styled-components';

import { MinTitle, variables } from '../../shared/GlobalStyles';
import quotationMark from './quotationMark.svg';

export const CardClients = ({ name, review, stars, img }) => {
	return (
		<Container>
			<QuotationMark>
				<img src={quotationMark} alt='quotation mark icon' />
			</QuotationMark>

			<MinTitle>{name}</MinTitle>
			<Content>
				<p>{review}</p>
				<Stars>
					<ion-icon name='star'></ion-icon>
					<ion-icon name='star'></ion-icon>
					<ion-icon name='star'></ion-icon>
					<ion-icon name='star'></ion-icon>
					<ion-icon name='star'></ion-icon>
				</Stars>
			</Content>

			<Img>
				<img src={img} alt={name + ' review'} />
			</Img>

			<QuotationMark className='right'>
				<img src={quotationMark} alt='quotation mark icon' />
			</QuotationMark>
		</Container>
	);
};

const Stars = styled.div`
	color: ${variables.colors.secondary};
	display: flex;
	gap: 0.3em;
	margin-top: 1em;
`;

const Img = styled.div`
	width: 12vw;
	min-width: 8em;
	background-color: ${variables.colors.bg_default};
	border: ${variables.colors.bg_default} solid 0.5em;
	position: absolute;
	top: 50%;
	left: -5em;
	transform: translate(0, -50%);
	border-radius: 20px;
	overflow: hidden;
	img {
		border-radius: 20px;
	}
`;
const QuotationMark = styled.div`
	width: 5em;
	&.right {
		align-self: flex-end;
		transform: rotateY(180deg);
	}
`;
const Content = styled.article`
	color: ${variables.colors.gray};
	margin-bottom: 1em;
`;

const Container = styled.article`
	font-size: 0.8rem;
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: flex-start;
	gap: 0.5em;
	padding: 2em;
	padding-left: 80px; // Space left by img absolute + 10px
	border-radius: 30px;
	position: relative;
	max-width: 30vw;
	min-width: 18em;

	@media screen and (max-width: ${variables.mediaQueries.tablet}) {
		padding: 2em;
		padding-left: 2em;
		padding-top: 80px; // Space left by img absolute + 10px
		${Img} {
			top: -65px;
			left: 50%;
			transform: translate(-50%, 0);
		}
	}

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
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1a1a25",endColorstr="#1a1a25",GradientType=1);
`;
