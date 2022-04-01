import React from 'react';
import { View, Image } from 'react-native';
import { Typography } from '../Typography';
import { styles } from './MenuItem.styles';
import { TMenuItemProps } from './MenuItem.types';

export const MenuItem: React.FC<TMenuItemProps> = ({
  itemImage,
  itemName,
  firstElementStyle,
}) => (
  <View style={[styles.menuItemContainer, firstElementStyle]}>
    <Image
      resizeMode='contain'
      style={styles.imgStyle}
      source={{
        uri: itemImage,
      }}
    />
    <Typography style={styles.paragraphStyle} variant='P'>
      {itemName}
    </Typography>
  </View>
);
