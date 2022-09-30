import axios from 'axios';

const client = axios.create({
  // withCredentials: true,
  crossDomain: true,
});

export default client;
