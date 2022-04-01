import { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type typographyType = 'H1' | 'H2' | 'H3' | 'P';

export type TTypographyProps = {
  color?: string;
  variant: typographyType;
  style?: StyleProp<ViewStyle> & StyleProp<TextStyle>;
  children: ReactNode;
};
