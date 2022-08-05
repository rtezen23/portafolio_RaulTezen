import React, { useState } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
/* import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials'; */

// export const ThemeContext = createContext(null);
// import { langContext } from './context/langContext';
// import { IntlProvider, FormattedMessage } from 'react-intl';

const App = () => {
	const [lightMode, setLightMode] = useState(false);

	// const language = useContext(langContext);

	const handleLightMode = () => {
		setLightMode(prevLightMode => !prevLightMode);
	};

	return (
		// <ThemeContext.Provider value={{ theme }}>
		// <IntlProvider locale='en-US' messages={EnglishMessages}>
		<div className={`${lightMode && 'darktheme containerDark'}`}>
			<Header lightMode={lightMode} handleLightMode={handleLightMode} />
			<Nav />
			<About />
			<Experience />
			{/* <Services /> */}
			<Portfolio />
			{/* <Testimonials /> */}
			<Contact />
			<Footer />
		</div>
		// </IntlProvider>
		/* </ThemeContext.Provider> */
	);
};

export default App;
