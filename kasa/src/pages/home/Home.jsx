import React from 'react';
import Banner from '../../components/Banner/Banner';

import homeBackgroundImage from '../../assets/homeBackground.jpg';

export default function Home() {
    return (
        <main>
            <Banner type="home" title="Chez vous, partout et ailleurs" backgroundImage={homeBackgroundImage} />
            {/* Autres contenus de la page d'accueil */}
        </main>
    );
}