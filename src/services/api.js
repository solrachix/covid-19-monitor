import axios from 'axios';

const api = axios.create({
  baseURL: 'https://corona.lmao.ninja'
});

export default api;
