// const URL: string = 'https://kamalaya-dev.fl0.io'
// const URL: string = 'https://swapi.dev/api'
// const URL: string = 'http://localhost:8000'
// const URL: string = 'http://localhost:3000'
const URL = process.env.NEXT_PUBLIC_API_URL || 'https://star-wars-ms.vercel.app';

export { URL }