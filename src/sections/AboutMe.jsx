import styled from 'styled-components';
import { motion } from 'framer-motion';

import { TitleSection } from './components/TitleSection';
import { MinTitle, variables } from '../shared/GlobalStyles';
import { stagger, fromTop, fromLeft } from '../shared/Animations';
import { CardInterest } from './components/CardInterest';
import img from './assets/profile.png';

export const AboutMe = ({ interests }) => {
	return (
		<Container id='aboutMe' className='section'>
			<TitleSection title='About Me' subtitle='Who I am' />
			<div className='grid'>
				<Img
					as={motion.div}
					variants={fromLeft}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					<img src={img} alt='jose latines' />
				</Img>
				<div>
					<motion.div
						variants={stagger}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
					>
						<motion.p variants={fromTop}>
							Hi! I am <strong>Jose Latines</strong> AKA DoctorDraxter a very
							hardworking <strong>Frontend Developer</strong> from 🇻🇪 who wants
							to become into <strong>Full Stack. </strong>
						</motion.p>
						<motion.p variants={fromTop}>
							Why I code? I love coding because I can bring into reality my
							crazy and fancy ideas, also make life easier.
						</motion.p>
					</motion.div>

					<InterestContainer>
						<MinTitle>Interest</MinTitle>
						<div className='flex'>
							{interests.map(({ name, d, viewBox }) => (
								<CardInterest key={name} name={name} d={d} viewBox={viewBox} />
							))}
						</div>
					</InterestContainer>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.section`
	.grid {
		align-items: flex-start;
		justify-content: flex-end;
		grid-template-columns: 0.6fr 1.4fr;
		gap: 5rem;
		p {
			margin-bottom: 0.5rem;
		}

		.bottom {
		}
		@media screen and (max-width: ${variables.mediaQueries.mobile_xl}) {
			grid-template-columns: 1fr;
			grid-template-rows: auto auto;
		}
	}
	.flex {
		justify-content: unset;
		align-items: baseline;
		gap: 2rem;
	}
`;
const Img = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		border-radius: 20px;
	}
`;
const InterestContainer = styled.div`
	margin-top: 1.5rem;
	${MinTitle} {
		margin-bottom: 1rem;
	}
`;
