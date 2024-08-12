import fs from 'fs';
import path from 'path';

export function getFilms() {
  const filePath = path.join(process.cwd(), 'data', 'films.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}
const films = getFilms()

export default function handler(req, res) {
  res.status(200).json(films)
}
