import axios from 'axios';

const API_KEY = '8911adabe6e11e8853e04f5dee3426ed'; // Tu clave de API de API-Sports

export const footballApi = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers: {
    'x-apisports-key': API_KEY,
  },
});

// Función para obtener los equipos de LaLiga (ID de la liga: 140)
export const getTeams = async () => {
  try {
    const response = await footballApi.get('/teams', { params: { league: 140, season: 2023 } });
    return response.data.response; // Devuelve los equipos
  } catch (error) {
    console.error('Error obteniendo equipos:', error);
    return [];
  }
};

// Función para obtener jugadores por equipo
export const getPlayers = async (teamId) => {
  try {
    const response = await footballApi.get('/players', { params: { team: teamId, season: 2023 } });
    return response.data.response; // Devuelve los jugadores del equipo
  } catch (error) {
    console.error('Error obteniendo jugadores:', error);
    return [];
  }
};
