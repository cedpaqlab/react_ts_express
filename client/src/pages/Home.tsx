import React from 'react';

interface HomeProps {
    t: (key: string) => string;
}

const Home: React.FC<HomeProps> = ({ t }) => {
    return (
        <div className="Home">
            <h1>{t('header.welcome')}</h1>
            <p>{t('header.description')}</p>
        </div>
    );
};

export default Home;
