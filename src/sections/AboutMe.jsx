import styled from 'styled-components';
import { TitleSection } from './components/TitleSection';

export const AboutMe = () => {

	return (
		<Container className='section'>
			<TitleSection title='About Me' subtitle='Who I am' />
		</Container>
	);
};

const Container = styled.section``;
