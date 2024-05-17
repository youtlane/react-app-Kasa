
import data from '../data/db.json';

// Fonction pour récupérer toutes les propriétés
export const getAllProperties = () => {
  return data.properties; 
};

// Fonction pour récupérer une propriété par ID
export const getPropertyById = (id) => {
  return data.properties.find(property => property.id === id); 
};

// Fonction pour récupérer toutes les pages "About"
export const getAboutPageData = () => {
  return data.aboutPage; 
};

