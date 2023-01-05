import {StyleSheet, View, ViewStyle} from 'react-native';
import colors from '../constants/colors';

interface CommonStyle {
  container: ViewStyle;
}
export const commonStyle = StyleSheet.create<CommonStyle>({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});
