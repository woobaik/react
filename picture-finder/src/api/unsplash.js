import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
    'Client-ID 8525e3c123cdc5072887b640ef000f8077610996ef8eeea3d2708f22e298af51'
  }
});
