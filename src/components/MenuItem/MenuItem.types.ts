import { ViewStyle } from 'react-native';

export type TMenuItemProps = {
  itemImage: string;
  itemName: string;
  firstElementStyle?: ViewStyle;
  onPress: () => void;
};
