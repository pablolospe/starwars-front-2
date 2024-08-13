import { URL } from '@/config';

export const getFilms = async () => {
  try {
    const response = await fetch(`${URL}/api/films`);
    
    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching films:', error);
    // Puedes manejar el error aquí, por ejemplo, devolver un valor por defecto
    throw error;
  }
};

export const getCharacters = async () => {
  try {
    const response = await fetch(`${URL}/api/characters`);
    
    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    // Puedes manejar el error aquí, por ejemplo, devolver un valor por defecto
    throw error;
  }
};
