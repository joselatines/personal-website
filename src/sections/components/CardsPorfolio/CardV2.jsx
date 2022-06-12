import { useState } from 'react';
import styled from 'styled-components';
import { variables } from '../../../shared/GlobalStyles';

export default function CardV2({ title, img, preview, content, type, tools }) {
	const [showMore, setShowMore] = useState(false);

	return (
		<Container>
			<Type type={type}>Personal</Type>
			<a href={preview} target='_blank' rel='noopener noreferrer'>
				<img src={img} alt={title} />
			</a>
			<Content>
				<Title href={preview} target='_blank' rel='noopener noreferrer'>
					{title}
				</Title>
				<Description>
					{showMore ? content : `${content.substring(0, 110)}`}

					{content.length > 110 && (
						<span onClick={() => setShowMore(prev => !prev)}>
							{' '}
							{showMore ? 'Show less' : '...Show more'}
						</span>
					)}
				</Description>
				<Tags>
					{tools.map(el => (
						<Tag>{el}</Tag>
					))}
				</Tags>
			</Content>
		</Container>
	);
}

const Container = styled.div`
	a {
		all: unset;
	}
`;

const Type = styled.span`
	font-size: 0.7em;
	text-align: center;
	position: absolute;
	background-color: ${({ type }) =>
		type === 'Personal'
			? variables.colors.primary
			: variables.colors.secondary};
	padding: 0.2em 1em;
	border-radius: 0 0px 15px 0;
`;
const Tags = styled.div`
	display: flex;
	gap: 0.5em;
	margin-top: 0.5em;
	font-size: 0.8em;
	flex-wrap: wrap;
`;
const Tag = styled(Type)`
	position: relative;
	border-radius: 20px;
	background-color: ${variables.colors.contrast};
`;
const Content = styled.div`
	display: grid;
	gap: 0.3em;
	grid-template-columns: auto;
	margin-top: 0.5em;
`;
const Description = styled.p`
	font-size: 0.8em;
	font-size: smaller;
	color: ${variables.colors.gray};
	span {
		color: ${variables.colors.font_default};
	}
`;
const Title = styled.a`
	font-size: larger;
	font-weight: bolder;
`;
