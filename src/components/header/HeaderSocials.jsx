import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a
				href='https://linkedin.com/in/raul-tezén-28b947247'
				target='_blank'
				rel='noreferrer'
			>
				<BsLinkedin className='header__socials-logo' />
			</a>
			<a href='https://github.com/rtezen23' target='_blank' rel='noreferrer'>
				<FaGithub className='header__socials-logo' />
			</a>
		</div>
	);
};

export default HeaderSocials;
