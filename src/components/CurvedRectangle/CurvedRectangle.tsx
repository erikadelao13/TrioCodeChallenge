import React from 'react';
import { View } from 'react-native';
import { Typography } from '@components/Typography';
import { styles } from './CurvedRectangle.styles';
import { TCurvedRectangleProps } from './CurvedRectangle.types';

export const CurvedRectangle: React.FC<TCurvedRectangleProps> = ({ text }) => (
  <View style={styles.rectangleContainer}>
    <Typography variant='H3'>{text}</Typography>
  </View>
);
