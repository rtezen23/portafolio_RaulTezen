import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/entregable05.JPG';
import IMG2 from '../../assets/entregable06.JPG';
import IMG3 from '../../assets/entregable04.JPG';
import IMG4 from '../../assets/entregable03.JPG';
import IMG5 from '../../assets/entregable02.JPG';
import IMG6 from '../../assets/entregable01.JPG';

import { FormattedMessage } from 'react-intl';

const data = [
	{
		id: 1,
		image: IMG1,
		title: 'Poke API',
		github: 'https://github.com/rtezen23/entregable05_React',
		demo: 'https://entregable-react-005.netlify.app/',
	},
	{
		id: 2,
		image: IMG2,
		title: 'Ecommerce App',
		github: 'https://github.com/rtezen23/React_proyectoFinal',
		demo: 'https://entregable-react-006.netlify.app/',
	},
	{
		id: 3,
		image: IMG3,
		title: "User's CRUD",
		github: 'https://github.com/rtezen23/entregable04_React',
		demo: 'https://entregable-react-004.netlify.app/',
	},
	{
		id: 4,
		image: IMG4,
		title: 'Rick and Morty API',
		github: 'https://github.com/rtezen23/entregable03_React',
		demo: 'https://entregable-react-003.netlify.app/',
	},
	{
		id: 5,
		image: IMG5,
		title: 'Weather App',
		github: 'https://github.com/rtezen23/entregable02_React',
		demo: 'https://entregable-react-002.netlify.app/',
	},
	{
		id: 6,
		image: IMG6,
		title: 'Quotes Generator',
		github: 'https://github.com/rtezen23/entregable1_React',
		demo: 'https://entregable-react-001.netlify.app/',
	},
];

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>
				<FormattedMessage
					id='portfolio.subtitle'
					defaultMessage='My recent work'
				/>
			</h5>
			<h2>
				<FormattedMessage id='portfolio.title' defaultMessage='Portfolio' />
			</h2>

			<div className='container portfolio__container'>
				{data.map(({ id, image, title, github, demo }) => (
					<article key={id} className='portfolio__item'>
						<div className='portfolio__item-image'>
							<img src={image} alt={title} className='portfolio__img' />
						</div>
						<h3>{title}</h3>
						<div className='portfolio__item-cta'>
							<a href={github} className='btn' target='_blank' rel='noreferrer'>
								Github
							</a>
							<a
								href={demo}
								className='btn btn-primary'
								target='_blank'
								rel='noreferrer'
							>
								<FormattedMessage
									id='portfolio.demo'
									defaultMessage='Live Demo'
								/>
							</a>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
