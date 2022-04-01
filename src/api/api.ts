import axios from 'axios';
import { TRIO_API_URL } from 'react-native-dotenv';

export const McDonaldsApi = axios.create({
  baseURL: TRIO_API_URL,
});
