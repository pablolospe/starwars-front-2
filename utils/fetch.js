import { URL } from '@/config';

export const getFilms = async () => {
  return fetch(`${URL}/api/films`).then((res) =>
    res.json()
  );
};

export const getCharacters = async () => {
  return fetch(`${URL}/api/characters`).then((res) =>
    res.json()
  );
};