import React from 'react';
import { FlatList, View, SafeAreaView } from 'react-native';
import { styles } from './Home.styles';
import { MenuList } from '../../components/MenuList';
import { THomeViewProps } from './Home.types';

export const HomeView: React.FC<THomeViewProps> = ({ itemData }) => (
  <SafeAreaView style={styles.safeAreaContainer}>
    <View style={styles.container}>
      <FlatList
        data={itemData}
        keyExtractor={(item) => item.name}
        renderItem={({ item: menuCategory }) => (
          <MenuList
            categoryMenuTitle={menuCategory?.name}
            menuItemData={menuCategory?.items}
          />
        )}
      />
    </View>
  </SafeAreaView>
);
