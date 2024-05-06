import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import { getAllProperties } from '../../service/api';
import { Link } from "react-router-dom";
import Card from '../../components/cards/Cards';


import homeBackgroundImage from '../../assets/homeBackground.jpg';

export default function Home() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          const propertiesData = await getAllProperties();
          setProperties(propertiesData);
      };
      fetchData();
  }, []);

    return (
        <main>
            <Banner type="home" title="Chez vous, partout et ailleurs" backgroundImage={homeBackgroundImage} />
            {/* Autres contenus de la page d'accueil */}

            <article className="cards-container">
              <div className="cards">
                  {properties.map(property => (
                      <Card key={property.id} title={property.title} cover={property.cover} />
                  ))}
              </div>
            </article>
        </main>
    );
}