import styled from 'styled-components';
import { Button } from '../shared/Button';
import { TitleSection } from './components/TitleSection';
import PortfolioCarrousel from './components/Carrousels/PortfolioCarrousel';

export const Portfolio = ({ projects }) => {
	return (
		<Container id='portfolio' className='section'>
			<TitleSection title='Portfolio' subtitle='What I have done' />
			<PortfolioCarrousel projects={projects} />

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
	.more {
		position: absolute;
		width: auto;
		right: 5rem;
	}
`;
