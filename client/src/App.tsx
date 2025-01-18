import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';
import logo from './assets/logo.svg';
import en from './locales/en.json';
import fr from './locales/fr.json';
import Home from './pages/Home';
import Configurator from './pages/Configurator';

const translations = { en, fr };

function App() {
    const [locale, setLocale] = useState<'en' | 'fr'>('en'); // Langue par défaut : anglais

    const t = (key: string) => key.split('.').reduce((o, i) => (o as any)[i], translations[locale]);

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="Company Logo"/>
                    <div>
                        {locale === 'en' ? (
                            <button onClick={() => setLocale('fr')}>Français</button>
                        ) : (
                            <button onClick={() => setLocale('en')}>English</button>
                        )}
                    </div>
                    <nav>
                        <Link to="/">{t('header.home')}</Link> | <Link to="/configurator">{t('main.configure')}</Link>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Home t={t}/>}/>
                    <Route path="/configurator" element={<Configurator t={t}/>}/>
                </Routes>
                <footer className="App-footer">
                    <p>{t('footer.copyright')}</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
