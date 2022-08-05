import React from 'react';
import './contact.css';
/* import { MdOutlineEmail } from 'react-icons/md'; */
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
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
			<h5>Get in Touch</h5>
			<h2>Contact Me</h2>

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
							Send a message
						</a>
					</article>
					<article className='contact__option'>
						<RiMessengerLine className='contact__option-icon' />
						<h4>Messenger</h4>
						<h5>raul.tezen</h5>
						<a href='https://m.me/raul.tezen' target='_blank' rel='noreferrer'>
							Send a message
						</a>
					</article>
				</div>
				{/* end of contact options */}
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='Your full name'
						required
					/>
					<input type='email' name='email' placeholder='Your email' required />
					<textarea
						name='message'
						rows='7'
						placeholder='Your message'
						required
					></textarea>
					<button className='btn btn-primary'>Send Message</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
