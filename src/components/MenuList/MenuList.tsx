import React from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { APP_STACK_ROUTER } from '@constants/router.constants';
import { Typography } from '@components/Typography';
import { MenuItem } from '@components/MenuItem';
import { styles } from './MenuList.styles';
import { TMenuListItem } from './MenuList.types';
import { TMenuListItemNavigation } from './MenuList.types';

export const MenuList: React.FC<TMenuListItem> = ({ menuItemData, categoryMenuTitle }) => {
  const navigation = useNavigation<TMenuListItemNavigation>();

  return (
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
            onPress={() =>
              navigation.navigate(APP_STACK_ROUTER.ITEMS_DETAIL_SCREEN, { ...menuItem })
            }
          />
        )}
      />
    </View>
  );
};
