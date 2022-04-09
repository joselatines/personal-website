import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from '../shared/Button';
import { FlexBox, SubTitle, Title, variables } from '../shared/GlobalStyles';
import { TitleSection } from './components/TitleSection';
import { CardProject } from './components/CardProject';

export const Portfolio = () => {
	const projects = [
		{
			title: 'Website Anime',
			img: 'https://mockuptree.com/wp-content/uploads/edd/2018/12/clean-website-showcase-mockup.jpg',
			code: '',
			preview: '',
			content:
				'De principio a fin De principio a fin De principio a fin De principio a fin  De principio a fin De principio a fin De principio a fin De principio a fin De principio a fin De principio a fin De principio a fin De principio a fin',
		},
		{
			title: 'Website Movies',
			img: 'https://mockuptree.com/wp-content/uploads/edd/2018/12/clean-website-showcase-mockup.jpg',
			code: '',
			preview: '',
			content:
				' a fin De principio a fin De p a fin De principio a fin De p a fin De principio a fin De p a fin De principio a fin De p a fin De principio a fin De p a fin De principio a fin De p',
		},
		{
			title: 'Website Spam',
			img: 'https://mockuptree.com/wp-content/uploads/edd/2018/12/clean-website-showcase-mockup.jpg',
			code: '',
			preview: '',
			content:
				'sdsdsddddddddddddddddddddddddddddddddddddddddddddd a fin De principio a fin De p a fin De principio a fin De p a fin De principio a fin De pddddddddd',
		},
	];

	return (
		<Container id='portfolio' className='section'>
			<TitleSection title='Portfolio' subtitle='What I worked' />
			<div className='flex'>
				{projects.map(({ title, img, preview, code, content }) => (
					<CardProject
						key={title}
						title={title}
						img={img}
						code={code}
						preview={preview}
						content={content}
					/>
				))}
			</div>
			<div className='more'>
				<a
					href='https://www.behance.net/joselatines'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Button content='More' type='circle' />
				</a>
			</div>
		</Container>
	);
};

const Container = styled.section`
	.flex {
		gap: 2.5rem;
	}
	.more {
		position: absolute;
		width: fit-content;
		right: 60px;
		margin-top: 35px;
	}
`;
