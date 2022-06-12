import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

import styled from 'styled-components';
import CardV2 from '../CardsPorfolio/CardV2';
import { variables } from '../../../shared/GlobalStyles';

export default function PortfolioCarrousel({ projects }) {
	return (
		<Container>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 50,
					stretch: -50,
					depth: 250,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={false}
				modules={[EffectCoverflow, Pagination]}
				className='mySwiper'
			>
				{projects.map(({ ...rest }) => (
					<SwiperSlide>
						<CardV2 {...rest} />
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
}

const Container = styled.div`
margin-bottom: 20px;
	.swiper {
		width: 100%;
		/* 		padding-top: 50px;
		padding-bottom: 50px; */
	}

	.swiper-slide {
		background-position: center;
		background-size: cover;
		width: 500px;
		@media screen and (max-width: ${variables.mediaQueries.mobile_l}) {
			width: 200px;
		}
		/* 		width: 300px; */
		/* 	height: 300px; */
	}

	.swiper-slide img {
		display: block;
		width: 100%;
	}
`;
