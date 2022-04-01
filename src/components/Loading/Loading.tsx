import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './Loading.styles';

export const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator color='#FAB910' size='small' />
  </View>
);
