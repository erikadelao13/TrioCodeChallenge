import { StackNavigationProp } from '@react-navigation/stack';
import { TAppStackParamsList } from '../../router/App.stack';

export type TMenuListItemNavigation = StackNavigationProp<
  TAppStackParamsList,
  'ITEMS_DETAIL_SCREEN'
>;

export interface IMenuItem {
  description: string;
  name: string;
  url: string;
  price: number;
}

export type TMenuListItem = {
  categoryMenuTitle: string;
  menuItemData: Array<IMenuItem>;
};
