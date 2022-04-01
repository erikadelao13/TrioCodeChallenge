import { urls } from '@constants/urls.constants';
import { McDonaldsApi } from './api';

export const getMenuItems = () => McDonaldsApi.get(urls.menu);
