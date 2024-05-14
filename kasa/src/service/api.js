import axios from 'axios';

const BASE_URL = 'http://localhost:9000'; // URL de base de notre serveur JSON


// Fonction pour récupérer toutes les propriétés
export const getAllProperties = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/properties`);
        return response.data;
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error);
        return [];
    }
};

// Fonction pour récupérer les données de la page About
export const getAboutPageData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/aboutPage`);
        return response.data;
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error);
        return [];
    }
};