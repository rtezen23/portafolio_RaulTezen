import React, { useState } from 'react';
import EnglishMessages from '../lang/en-US.json';
import SpanishMessages from '../lang/es-MX.json';
import { IntlProvider } from 'react-intl'

const langContext = React.createContext();

const LangProvider = ({ children }) => {

    const [messages, setMessages] = useState(EnglishMessages);
    const [locale, setLocale] = useState('en-US');

    const setLanguage = language => {
        switch (language) {
            case 'es-MX':
                setMessages(SpanishMessages);
                setLocale('es-MX')
                break;

            case 'en-US':
                setMessages(EnglishMessages);
                setLocale('en-US')
                break;

            default:
                setMessages(EnglishMessages);
                setLocale('en-US')
        }
    }

    return (
        <langContext.Provider value={{ setLanguage: setLanguage, locale: locale }}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    )
}

export { langContext, LangProvider }