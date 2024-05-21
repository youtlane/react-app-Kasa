import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import { getAllProperties } from '../../service/Api';
import Card from '../../components/Cards/Cards';
import homeBackgroundImage from '../../assets/homeBackground.jpg';
import { Link } from 'react-router-dom';


export default function Home() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          const propertiesData = getAllProperties();
          setProperties(propertiesData);
      };
      fetchData();
  },[]);

  return (
    <main>
      <Banner type="home" title="Chez vous, partout et ailleurs" backgroundImage={homeBackgroundImage} />
        <article className="cards-container">
          <div className="cards">
            {properties.map(property => (
              <div className="card" key={property.id}>
              <Link key={property.id} to={`/property/${property.id}`}>
                    <Card title={property.title} cover={property.cover} />
              </Link>
              </div>
            ))}
          </div>
        </article>
    </main>
    );
}