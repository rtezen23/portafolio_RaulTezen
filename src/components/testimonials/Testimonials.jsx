import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar.JPG';
import AVTR2 from '../../assets/avatar.JPG';
import AVTR3 from '../../assets/avatar.JPG';
import AVTR4 from '../../assets/avatar.JPG';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
	{
		id: 1,
		avatar: AVTR1,
		name: 'Bell Cranel',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis natus sequi dolores labore ipsam quam ratione nisi maiores unde? Illum, nemo blanditiis? Porro sunt id veritatis quaerat quibusdam corrupti.',
	},
	{
		id: 2,
		avatar: AVTR2,
		name: 'Bell Cranel',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis natus sequi dolores labore ipsam quam ratione nisi maiores unde? Illum, nemo blanditiis? Porro sunt id veritatis quaerat quibusdam corrupti.',
	},
	{
		id: 3,
		avatar: AVTR3,
		name: 'Bell Cranel',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis natus sequi dolores labore ipsam quam ratione nisi maiores unde? Illum, nemo blanditiis? Porro sunt id veritatis quaerat quibusdam corrupti.',
	},
	{
		id: 4,
		avatar: AVTR4,
		name: 'Bell Cranel',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis natus sequi dolores labore ipsam quam ratione nisi maiores unde? Illum, nemo blanditiis? Porro sunt id veritatis quaerat quibusdam corrupti.',
	},
];

const Testimonials = () => {
	return (
		<section id='testimonials'>
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper
				className='container testimonials__container'
				// install Swiper modules
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{data.map(({ id, avatar, name, review }) => (
					<SwiperSlide className='testimonial' key={id}>
						<div className='client__avatar'>
							<img src={avatar} alt={name} />
						</div>
						<h5 className='client__name'>{name}</h5>
						<small className='client__review'>{review}</small>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Testimonials;
