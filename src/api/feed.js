import axios from 'axios';
import { config } from '../config';

export function getFeed() {
  return axios.get(`${config.SERVER_ADD}/api/feeds`);
}
