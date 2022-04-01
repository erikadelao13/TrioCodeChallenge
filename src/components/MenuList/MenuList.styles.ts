import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scale';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: moderateScale(30),
  },
  titleStyle: {
    marginBottom: moderateScale(21),
    paddingLeft: moderateScale(19),
  },
  firstElementStyle: {
    marginLeft: moderateScale(20),
  },
});
