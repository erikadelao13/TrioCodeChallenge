import { McDonaldsApi } from './api';
import { urls } from '../constants/urls.constants';

export const getMenuItems = () => McDonaldsApi.get(urls.menu);
