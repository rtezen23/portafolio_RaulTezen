import React from 'react';
import './footer.css';
// import { FaFacebookF } from 'react-icons/fa';
// import { FiInstagram } from 'react-icons/fi';
// import { IoLogoTwitter } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
	return (
		<footer>
			<a href='/#' className='footer__logo'>
				RAUL TEZEN
			</a>

			<ul className='permalinks'>
				<li>
					<a href='/#'>
						<FormattedMessage id='footer.home' defaultMessage='Home' />
					</a>
				</li>
				<li>
					<a href='#about'>
						<FormattedMessage id='footer.about' defaultMessage='About' />
					</a>
				</li>
				<li>
					<a href='#experience'>
						<FormattedMessage
							id='footer.experience'
							defaultMessage='Experience'
						/>
					</a>
				</li>
				{/* <li>
					<a href='#services'>Services</a>
				</li> */}
				<li>
					<a href='#portfolio'>
						<FormattedMessage
							id='footer.portfolio'
							defaultMessage='Portfolio'
						/>
					</a>
				</li>
				{/* <li>
					<a href='#testimonials'>Testimonials</a>
				</li> */}
				<li>
					<a href='#contact'>
						<FormattedMessage id='footer.contact' defaultMessage='Contact' />
					</a>
				</li>
			</ul>

			<div className='footer__socials'>
				<a href='https://linkedin.com/in/raul-tezén-28b947247' target='_blank' rel='noreferrer'>
					<BsLinkedin />
				</a>
				<a href='https://github.com/rtezen23' target='_blank' rel='noreferrer'>
					<FaGithub />
				</a>
			</div>

			<div className='footer__copyright'>
				<small>
					&copy; Raul Tezen.
					<FormattedMessage
						id='footer.rights'
						defaultMessage='All rights reserved'
					/>
				</small>
			</div>
		</footer>
	);
};

export default Footer;
