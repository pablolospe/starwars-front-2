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

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('Received non-JSON response:', text);
      throw new Error('Expected JSON, but received non-JSON response');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

