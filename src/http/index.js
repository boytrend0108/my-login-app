import axios from 'axios';

export function createClient() {
  return axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
  });
}
