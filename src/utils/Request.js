const axios = require('axios');
import AuthService from './AuthService';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  headers: { Authorization: `Bearer ${AuthService.getAccessToken()}` }
});

export default instance;
