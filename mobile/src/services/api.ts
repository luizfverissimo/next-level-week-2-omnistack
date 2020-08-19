import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.8:3333'
})
//url do expo : porta do servidor node

export default api