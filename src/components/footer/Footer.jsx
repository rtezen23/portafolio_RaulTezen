import React from 'react';
import './footer.css';
// import { FaFacebookF } from 'react-icons/fa';
// import { FiInstagram } from 'react-icons/fi';
// import { IoLogoTwitter } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer>
			<a href='/#' className='footer__logo'>
				RAUL TEZEN
			</a>

			<ul className='permalinks'>
				<li>
					<a href='/#'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experience'>Experience</a>
				</li>
				{/* <li>
					<a href='#services'>Services</a>
				</li> */}
				<li>
					<a href='#portfolio'>Portfolio</a>
				</li>
				{/* <li>
					<a href='#testimonials'>Testimonials</a>
				</li> */}
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>

			<div className='footer__socials'>
				<a href='https://linkedin.com/in/raul-tezén-28b947247'>
					<BsLinkedin />
				</a>
				<a href='https://github.com/rtezen23'>
					<FaGithub />
				</a>
			</div>

			<div className='footer__copyright'>
				<small>&copy; Raul Tezen. All rights reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
