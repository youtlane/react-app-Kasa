import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { getAllProperties } from '../../service/api';
import Carrousel from "../../components/Carrousel/Carrousel";

const Property = () => {
  const [images, setImages] = useState([]);
  const { id } = useParams(); // Récupérez l'identifiant de l'URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const properties = await getAllProperties();
        const property = properties.find(property => property.id === id); // Trouvez la propriété correspondant à l'identifiant
        if (property) {
          setImages(property.pictures); // Stockez les images de la propriété dans l'état local
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des propriétés :', error);
      }
    };

    fetchData();
  }, [id]); // Exécutez l'effet à chaque changement de l'identifiant

  return (
    <main>
      <Carrousel images={images} /> {/* Utilisez les images récupérées dans le Carrousel */}
    </main>
  );
};

export default Property;
