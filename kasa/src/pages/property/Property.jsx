import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { getAllProperties } from '../../service/Api';
import Carrousel from "../../components/Carrousel/Carrousel";
import Tags from "../../components/Tags/Tags";
import Collapse from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';


const Property = () => {
  const [property, setProperty] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const properties = await getAllProperties();
        const property = properties.find(property => property.id === id); 
        if (property) {
          setProperty(property);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des propriétés :', error);
      }
    };

    fetchData();
  }, [id]);

  if (!property) {
    return <p>Chargement...</p>; // Afficher un message de chargement pendant que les données sont récupérées
  }

  return (
    <main className="fiche-container">
      <Carrousel images={property.pictures} />
      <section className='fiche'>
        <div className='fiche-content'>
          <div className='fiche-content_title'>
            <h1>{property.title}</h1>
            <p>{property.location}</p>
            <Tags tags={property.tags} />
            
          </div>
          <aside className='fiche-content_profile'>
            <div className='profile-infos'>
              <p>{property.host.name}</p>
              <img src={property.host.picture} alt={property.host.name} />
            </div>
            <Rating rating={property.rating} />
          </aside>
        </div>
        <div className='collapse-fiche-container'>
          <Collapse  title="Description">
              <p className="collapse-text">{property.description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul className='collapse-fiche-list'>
              {property.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
        </Collapse>
        </div>
      </section>
    </main>
  );
};

export default Property;
