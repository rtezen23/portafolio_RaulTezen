import React, { useContext } from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/normal fondo.jpg';
import ES from '../../assets/spain.png';
import EN from '../../assets/usa.png';

import HeaderSocials from './HeaderSocials';
import ReactSwitch from 'react-switch';

import { langContext } from '../../context/langContext';

import { FormattedMessage } from 'react-intl';

const Header = ({ lightMode, handleLightMode }) => {
	const language = useContext(langContext);

	return (
		<header>
			<div className='container header__container'>
				<div className='header__container-options'>
					<ReactSwitch onChange={handleLightMode} checked={lightMode} />
					<div className='header__container-countries'>
						<img
							src={ES}
							alt='es'
							onClick={() => language.setLanguage('es-MX')}
						/>
						<img
							src={EN}
							alt='en'
							onClick={() => language.setLanguage('en-US')}
						/>
					</div>
				</div>
				{/* <h5 className='header__container-h5'>Hello I'm</h5> */}
				<h5 className='header__container-h5'>
					<FormattedMessage id='header.welcome' defaultMessage="Hi, I'm" />
				</h5>
				<h1 className='header__container-h1'>Raul Tezen</h1>
				<h5 className='text-light header__container-h5'>
					<FormattedMessage
						id='header.role'
						defaultMessage='Front-End Developer'
					/>
				</h5>
				<CTA />
				<HeaderSocials />

				<div className='me'>
					<img src={ME} alt='me' />
				</div>

				<a href='#contact' className='scroll__down'>
					<FormattedMessage id='header.scroll' defaultMessage='Scroll Down' />
				</a>
			</div>
		</header>
	);
};

export default Header;
