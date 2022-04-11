import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Form } from './components/contactForm/Form';

import { fromTop, scaleUp, stagger } from '../shared/Animations';
import { MinTitle, variables } from '../shared/GlobalStyles';
import { TitleSection } from './components/TitleSection';

export const Contact = ({ socialMedia }) => {
	return (
		<Container id='contact' className='section'>
			<div>
				<TitleSection title='Lets connect!' subtitle='Hire me' />
				<motion.div
					variants={stagger}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='flex'
				>
					<motion.p variants={fromTop}>
						If you are interested in collaboratiing on a project, hire me or
						just want to say hello, write me a message via this contact form or
						email me at joselatines33@gmail.com
					</motion.p>
					<SocialMedia as={motion.div} variants={fromTop}>
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
				</motion.div>
			</div>
			<motion.div
				variants={scaleUp}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
				className='formContainer'
			>
				<Form />
			</motion.div>
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
	font-size: 2rem;
	gap: 0.5rem;
	a {
		color: ${variables.colors.secondary};

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
