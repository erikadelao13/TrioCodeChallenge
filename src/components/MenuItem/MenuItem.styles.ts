import { StyleSheet } from 'react-native';
import { moderateScale } from '@utils/scale';

export const styles = StyleSheet.create({
  menuItemContainer: {
    width: moderateScale(160),
    height: moderateScale(160),
    flex: 1,
    paddingHorizontal: moderateScale(6),
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(20),
    marginHorizontal: moderateScale(8),
  },
  imgStyle: {
    flex: 1,
    height: moderateScale(130),
    width: moderateScale(130),
  },
  paragraphStyle: {
    marginTop: moderateScale(21),
    textAlign: 'center',
  },
});
