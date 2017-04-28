const axios = require('axios');
import AuthService from './AuthService';

const instance = axios.create({
  headers: { Authorization: `Bearer ${AuthService.getAccessToken()}` }
});

export default instance;
