import axios from 'axios';
import config from '../config';

export default axios.create({
  baseURL: config.APP_BASE_URL,
  timeout: 1000,
});