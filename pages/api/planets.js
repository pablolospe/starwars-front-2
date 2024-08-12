import fs from 'fs';
import path from 'path';

export function getPlanets() {
  const filePath = path.join(process.cwd(), 'data', 'planets.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}
const planets = getPlanets()

export default function handler(req, res) {
  res.status(200).json(planets)
}
