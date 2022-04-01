import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Typography } from '../Typography';
import { styles } from './MenuItem.styles';
import { TMenuItemProps } from './MenuItem.types';

export const MenuItem: React.FC<TMenuItemProps> = ({
  itemImage,
  itemName,
  firstElementStyle,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress}>
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
  </TouchableOpacity>
);
