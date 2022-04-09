import styled from 'styled-components';
import { ContactForm } from './components/ContactForm';

import { MinTitle, variables } from '../shared/GlobalStyles';
import { TitleSection } from './components/TitleSection';

export const Contact = ({socialMedia}) => {
	

	return (
		<Container id='contact' className='section'>
			<div>
				<TitleSection title='Lets connect!' subtitle='Hire me' />
				<div className='flex'>
					<p>
						If you are interested in collaboratiing on a project, hire me or
						just want to say hello, write me a message via this contact form or
						email me at joselatines33@gmail.com
					</p>
					<SocialMedia>
						<MinTitle>Social Media</MinTitle>
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
				</div>
			</div>
			<div className='formContainer'>
				<ContactForm />
			</div>
		</Container>
	);
};

const Container = styled.section`
	display: grid;
	grid-template-columns: 1.2fr 0.8fr;
	justify-content: space-between;
	align-content: start;
	gap: 5rem;
	.flex {
		gap: 2.8rem;
		flex-direction: column;
		align-items: flex-start;
	}

	p {
		color: ${variables.colors.gray};
		font-size: 1.2rem;
	}
	.formContainer {
		display: grid;
		align-items: center;
		justify-content: center;
	}
	@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
		justify-content: center;
		align-content: center;
		gap: 1rem;

		.flex {
			align-items: center;
		}
	}
`;

const SocialMedia = styled.div`
	display: grid;
	gap: 0.5rem;
	a {
		color: ${variables.colors.secondary};
		font-size: 3rem;
		transition: ${variables.transitions.short};
		&:hover {
			transform: scale(1.1);
		}
	}
	.icons {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
`;
