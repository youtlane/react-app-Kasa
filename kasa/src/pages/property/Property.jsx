import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { getAllProperties } from '../../service/api';
import Carrousel from "../../components/Carrousel/Carrousel";

const Property = () => {
  const [images, setImages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const properties = await getAllProperties();
        const property = properties.find(property => property.id === id); 
        if (property) {
          setImages(property.pictures); 
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des propriétés :', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <main>
      <Carrousel images={images} />
    </main>
  );
};

export default Property;
