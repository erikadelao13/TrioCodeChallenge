import React from 'react';
import { View } from 'react-native';
import { Typography } from '@components/Typography';
import { styles } from './ErrorComponent.styles';

export const ErrorComponent = () => (
  <View style={styles.container}>
    <Typography variant='H3'>Sorry. Something went wrong.</Typography>
  </View>
);
