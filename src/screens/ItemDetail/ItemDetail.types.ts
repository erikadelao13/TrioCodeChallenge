import { RouteProp } from '@react-navigation/native';
import { TAppStackParamsList } from '../../router/App.stack';

export type TItemDetailRoute = RouteProp<TAppStackParamsList, 'ITEMS_DETAIL_SCREEN'>;
export type TItemDetailProps = {
  menuItemPrice: number;
  menuItemImage: string;
  menuItemName: string;
  menuItemDescription: string;
};
