import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './MenuList.styles';
import { Typography } from '../../components/Typography';
import { MenuItem } from '../../components/MenuItem';
import { TMenuListItem } from './MenuList.types';

export const MenuList: React.FC<TMenuListItem> = ({ menuItemData, categoryMenuTitle }) => (
  <View style={styles.container}>
    <Typography style={styles.titleStyle} variant='H1'>
      {categoryMenuTitle}
    </Typography>
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={menuItemData}
      keyExtractor={(item) => item.name}
      renderItem={({ item: menuItem, index }) => (
        <MenuItem
          firstElementStyle={index === 0 ? styles.firstElementStyle : null}
          itemImage={menuItem?.url}
          itemName={menuItem?.name}
        />
      )}
    />
  </View>
);
