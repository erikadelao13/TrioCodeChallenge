import { StyleSheet } from 'react-native';
import { moderateScale } from '@utils/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
  },
  imgStyle: {
    height: moderateScale(213),
    width: moderateScale(387),
    marginVertical: moderateScale(48),
  },
  h2Style: {
    marginBottom: moderateScale(21),
    textAlign: 'center',
  },
  h3Style: {
    marginTop: moderateScale(21),
    textAlign: 'center',
  },
});
