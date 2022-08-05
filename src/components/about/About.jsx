import React from 'react';
import './about.css';
// import ME from '../../assets/gorra fondo.jpg';

// import ME from '../../assets/fondo azul.png';
import ME from '../../assets/background azul.png';
// import ME from '../../assets/espacio de trabajo.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import { FormattedMessage } from 'react-intl';

const About = () => {
	return (
		<section id='about'>
			<h5>
				<FormattedMessage id='about.subtitle' defaultMessage='Get to know' />
			</h5>
			<h2>
				<FormattedMessage id='about.title' defaultMessage='About me' />
			</h2>
			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt='About' />
					</div>
				</div>
				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>
								<FormattedMessage
									id='about.responsability'
									defaultMessage='Responsability'
								/>
							</h5>
							<small>
								<FormattedMessage
									id='about.responsability-text'
									defaultMessage='I am concerned about doing the work correctly and in the
								established time'
								/>
							</small>
						</article>
						<article className='about__card'>
							<FiUsers className='about__icon' />
							<h5>
								<FormattedMessage
									id='about.teamwork'
									defaultMessage='Team working'
								/>
							</h5>
							<small>
								<FormattedMessage
									id='about.teamwork-text'
									defaultMessage='I like to work in a group as it is the best way to solve
								problems and grow as programmers'
								/>
							</small>
						</article>
						<article className='about__card'>
							<VscFolderLibrary className='about__icon' />
							<h5>
								<FormattedMessage
									id='about.problemsolving'
									defaultMessage='Problems solving'
								/>
							</h5>
							<small>
								<FormattedMessage
									id='about.problemsolving-text'
									defaultMessage='I like challenges, I do my best to solve problems and if it is
								difficult I investigate until I solve it.'
								/>
							</small>
						</article>
					</div>
					<p>
						<FormattedMessage
							id='about.description'
							defaultMessage="Hi, my name is Raúl Francisco Tezén Flores, I'm a front-end
									developer. I like programming and especially programming to solve
									problems. I hope to become a great professional in the world of web
									development and I work every day to achieve it. I am always willing
									to learn and I give my all to the company where I work, always
									seeking to grow both personally and professionally."
						/>
					</p>
					<a href='#contact' className='btn btn-primary btn-center '>
						<FormattedMessage id='CTA.talk' defaultMessage="Let's Talk" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
