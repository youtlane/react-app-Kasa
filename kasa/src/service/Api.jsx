

// Importer le fichier db.json
import data from '../data/db.json';

// Fonction pour récupérer toutes les propriétés
export const getAllProperties = () => {
  return data.properties; // Retourne toutes les propriétés du fichier db.json
};

// Fonction pour récupérer une propriété par ID
export const getPropertyById = (id) => {
  return data.properties.find(property => property.id === id); // Retourne la propriété correspondant à l'ID donné
};

// Fonction pour récupérer toutes les pages "About"
export const getAboutPageData = () => {
  return data.aboutPage; // Retourne toutes les pages "About" du fichier db.json
};

// Ajoutez d'autres fonctions API ici au besoin
