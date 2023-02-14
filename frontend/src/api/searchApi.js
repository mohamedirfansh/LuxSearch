import axios from 'axios';

export const searchAxios = axios.create({
  baseURL: 'http://127.0.0.1:5000/api/search'
});

export async function getSearchResults() {
  const response = await searchAxios.get('/');
  return response;
}