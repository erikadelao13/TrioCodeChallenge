import React from 'react';
import { View, Image } from 'react-native';
import { Typography } from '../../components/Typography';
import { CurvedRectangle } from '../../components/CurvedRectangle';
import { styles } from './ItemDetail.styles';
import { TItemDetailProps } from './ItemDetail.types';

export const ItemDetailView: React.FC<TItemDetailProps> = ({
  menuItemPrice,
  menuItemImage,
  menuItemName,
  menuItemDescription,
}) => (
  <View style={styles.container}>
    <Image
      source={{
        uri: menuItemImage,
      }}
      style={styles.imgStyle}
      resizeMode='contain'
    />
    <Typography style={styles.h2Style} variant='H2'>
      {menuItemName}
    </Typography>
    <CurvedRectangle text={`$${menuItemPrice}`} />
    <Typography style={styles.h3Style} variant='H3'>
      {menuItemDescription}
    </Typography>
  </View>
);
