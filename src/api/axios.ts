import axios from 'axios';

// axios 를 직접 custom
export default axios.create({
  // baseURL: 'http://localhost:3500',
  baseURL: 'https://jsonplaceholder.typicode.com',
});
