import React from 'react';

interface ConfiguratorProps {
    t: (key: string) => string; // Fonction de traduction
}

const Configurator: React.FC<ConfiguratorProps> = ({ t }) => {
    return (
        <div className="Configurator">
            <h1>{t('configurator.title')}</h1>
            <p>{t('configurator.description')}</p>
            <form>
                <label>
                    {t('configurator.form.apiName')}:
                    <input type="text" placeholder={t('configurator.form.placeholder')} />
                </label>
                <br />
                <button type="submit">{t('configurator.form.submit')}</button>
            </form>
        </div>
    );
};

export default Configurator;
