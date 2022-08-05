import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/normal fondo.jpg';

import HeaderSocials from './HeaderSocials';
import ReactSwitch from 'react-switch';

const Header = ({ lightMode, handleLightMode }) => {
	return (
		<header>
			<div className='container header__container'>
				<div className='header__container-switch'>
					<ReactSwitch onChange={handleLightMode} checked={lightMode} />
				</div>
				<h5 className='header__container-h5'>Hello I'm</h5>
				<h1 className='header__container-h1'>Raul Tezen</h1>
				<h5 className='text-light header__container-h5'>Front-End Developer</h5>
				<CTA />
				<HeaderSocials />

				<div className='me'>
					<img src={ME} alt='me' />
				</div>

				<a href='#contact' className='scroll__down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
