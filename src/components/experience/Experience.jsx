import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

import { FormattedMessage } from 'react-intl';

const Experience = () => {
	return (
		<section id='experience'>
			<h5>
				<FormattedMessage
					id='experience.subtitle'
					defaultMessage='What Skills I have'
				/>
			</h5>
			<h2>
				<FormattedMessage
					id='experience.title'
					defaultMessage='My experience'
				/>
			</h2>

			<div className='container experience__container'>
				<div className='experience__frontend'>
					<h3>
						<FormattedMessage
							id='experience.frontend'
							defaultMessage='Frontend Development'
						/>
					</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Javascript</h4>
								<small className='text-light'>
									<FormattedMessage
										id='experience.intermediate'
										defaultMessage='Intermediate'
									/>
								</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>CSS</h4>
								<small className='text-light'>
									<FormattedMessage
										id='experience.intermediate'
										defaultMessage='Intermediate'
									/>
								</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>ReactJS</h4>
								<small className='text-light'>
									<FormattedMessage
										id='experience.intermediate'
										defaultMessage='Intermediate'
									/>
								</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Tailwind/Bootstrap</h4>
								<small className='text-light'>
									<FormattedMessage
										id='experience.basic'
										defaultMessage='Basic'
									/>
								</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Typescript</h4>
								<small className='text-light'>
									<FormattedMessage
										id='experience.basic'
										defaultMessage='Basic'
									/>
								</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>GIT</h4>
								<small className='text-light'>
									<FormattedMessage
										id='experience.intermediate'
										defaultMessage='Intermediate'
									/>
								</small>
							</div>
						</article>
					</div>
				</div>

				{/* BACKEND */}
				<div className='experience__backend'>
					<h3>
						<FormattedMessage
							id='experience.backend'
							defaultMessage='Backend Development'
						/>
					</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>NodeJS / Express</h4>
								<small className='text-light'>
									<FormattedMessage
										id='experience.intermediate'
										defaultMessage='Intermediate'
									/>
								</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Sequelize</h4>
								<small className='text-light'>
									<FormattedMessage
										id='experience.intermediate'
										defaultMessage='Intermediate'
									/>
								</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>MongoDB</h4>
								<small className='text-light'>
									<FormattedMessage
										id='experience.basic'
										defaultMessage='Basic'
									/>
								</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Postman</h4>
								<small className='text-light'>
									<FormattedMessage
										id='experience.basic'
										defaultMessage='Basic'
									/>
								</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>SQL</h4>
								<small className='text-light'>
									<FormattedMessage
										id='experience.intermediate'
										defaultMessage='intermediate'
									/>
								</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>PHP</h4>
								<small className='text-light'>
									<FormattedMessage
										id='experience.basic'
										defaultMessage='Basic'
									/>
								</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
