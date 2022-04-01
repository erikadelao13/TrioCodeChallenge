import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scale';

export const styles = StyleSheet.create({
  rectangleContainer: {
    width: moderateScale(78),
    height: moderateScale(30),
    paddingHorizontal: moderateScale(6),
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
