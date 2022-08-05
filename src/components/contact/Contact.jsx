import React from 'react';
import './contact.css';
/* import { MdOutlineEmail } from 'react-icons/md'; */
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

import { useRef, useContext } from 'react';
import emailjs from 'emailjs-com';
import { FormattedMessage } from 'react-intl';
import { langContext } from '../../context/langContext';

const Contact = () => {
	const locale = useContext(langContext);
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_m2va94l',
				'template_cvzn1qv',
				form.current,
				'NUjyKOAqOVZDTSrTK'
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};

	return (
		<section id='contact'>
			<h5>
				<FormattedMessage id='contact.subtitle' defaultMessage='Get in Touch' />
			</h5>
			<h2>
				<FormattedMessage id='contact.title' defaultMessage='Contact Me' />
			</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					{/* this one is not working */}
					{/* <article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>raul_tezen@hotmail</h5>
						<a
							href='mailto:raul_tezen@hotmail.com'
							target='_blank'
							rel='noreferrer'
						>
							Send a message
						</a>
					</article> */}
					<article className='contact__option'>
						<BsWhatsapp className='contact__option-icon' />
						<h4>WhatsApp</h4>
						<h5>+51 987654249</h5>
						<a
							href='https://api.whatsapp.com/send?phone=51987654249'
							target='_blank'
							rel='noreferrer'
						>
							<FormattedMessage
								id='contact.message'
								defaultMessage='Send a message'
							/>
						</a>
					</article>
					<article className='contact__option'>
						<RiMessengerLine className='contact__option-icon' />
						<h4>Messenger</h4>
						<h5>raul.tezen</h5>
						<a href='https://m.me/raul.tezen' target='_blank' rel='noreferrer'>
							<FormattedMessage
								id='contact.message'
								defaultMessage='Send a message'
							/>
						</a>
					</article>
				</div>
				{/* end of contact options */}
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder={
							locale.locale === 'en-US' ? 'Your fullname' : 'Tu nombre'
						}
						required
					/>
					<input
						type='email'
						name='email'
						placeholder={locale.locale === 'en-US' ? 'Your email' : 'Tu correo'}
						required
					/>
					<textarea
						name='message'
						rows='7'
						placeholder={
							locale.locale === 'en-US' ? 'Your message' : 'Tu mensaje'
						}
						required
					></textarea>
					<button className='btn btn-primary'>
						<FormattedMessage
							id='contact.sendmessage'
							defaultMessage='Send Message'
						/>
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
