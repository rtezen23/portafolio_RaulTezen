import React from 'react';
import CV from '../../assets/CV - RAUL TEZEN.pdf';
import { FormattedMessage } from 'react-intl';

const CTA = () => {
	return (
		<div className='cta'>
			<a href={CV} download className='btn'>
				<FormattedMessage id='CTA.cv' defaultMessage='Download CV' />
			</a>
			<a href='#contact' className='btn btn-primary'>
				<FormattedMessage id='CTA.talk' defaultMessage="Let's Talk" />
			</a>
		</div>
	);
};

export default CTA;
