import React from 'react';
import { Text } from 'react-native';
import { styles } from './Typography.styles';
import { TTypographyProps } from './Typography.types';

export const Typography: React.FC<TTypographyProps> = ({
  color = '#000000',
  variant = 'H1',
  children,
  style,
}) => {
  switch (variant) {
    case 'H1':
      return <Text style={[styles.h1, { color: color }, style]}>{children}</Text>;
    case 'H2':
      return <Text style={[styles.h2, { color: color }, style]}>{children}</Text>;
    case 'H3':
      return <Text style={[styles.h3, { color: color }, style]}>{children}</Text>;
    case 'P':
      return <Text style={[styles.p, { color: color }, style]}>{children}</Text>;
    default:
      break;
  }
};
