import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scale';

export const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Inter_700Bold',
    fontSize: moderateScale(36),
  },
  h2: {
    fontFamily: 'Inter_700Bold',
    fontSize: moderateScale(24),
  },
  h3: {
    fontFamily: 'Inter_400Regular',
    fontSize: moderateScale(16),
  },
  p: {
    fontFamily: 'Inter_400Regular',
    fontSize: moderateScale(12),
  },
});
