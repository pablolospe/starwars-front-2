// import characters from "@/data/characters.json"

// export default function handler(req, res) {
//   res.status(200).json(characters)
// }

import fs from 'fs';
import path from 'path';

export function getUsuarios() {
  const filePath = path.join(process.cwd(), 'data', 'characters.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}
const characters = getUsuarios()

export default function handler(req, res) {
  res.status(200).json(characters)
}
// export function getOrdenes() {
//   const filePath = path.join(process.cwd(), 'data', 'ordenes.json');
//   const jsonData = fs.readFileSync(filePath, 'utf-8');
//   return JSON.parse(jsonData);
// }
