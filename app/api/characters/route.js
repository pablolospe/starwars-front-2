import fs from 'fs';
import path from 'path';

export function getCharacters() {
  const filePath = path.join(process.cwd(), 'data', 'planets.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

const characters = getCharacters();

export function GET(request) {
  return new Response(JSON.stringify(characters), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
