/* eslint-disable prettier/prettier */
import {
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
  Pressable,
  Text,
  ImageBackground,
} from 'react-native';
interface HomeScreenStyle {
  container: ViewStyle;
  container1: ViewStyle;
  header: TextStyle;
  header1: TextStyle;
  shadowProp: ViewStyle;
  card: ViewStyle;
  quote: TextStyle;
  button: ViewStyle;
  text: TextStyle;
  text1: TextStyle;
  text2: TextStyle;
  image: ImageStyle;
  button2: ViewStyle;
  button1: ViewStyle;
  downloadbtn: ViewStyle;
  progressContainter: ViewStyle;
  progressLabelContainer: ViewStyle;
  progressLabelText: ViewStyle;
  progressLabelText1: ViewStyle;
  pausebtn: ViewStyle;
}
export const styles = StyleSheet.create<HomeScreenStyle>({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container1: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: '-20%',
    fontSize: 26,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#fff',
  },
  header1: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    marginTop: '10%',
    marginLeft: '3%',
    fontWeight: 'bold',
    color: '#fff',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -3, height: 5},
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: '2%',
    padding: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    elevation: 10,
    marginBottom: '10%',
    paddingLeft: '5%',
    shadowColor: '#F57C00',
  },
  quote: {
    fontSize: 17,
    fontFamily: 'serif',
    marginTop: '2%',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: '#F57C00',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  text1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  text2: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 12,
    // paddingHorizontal: 32,
    borderRadius: 70,
    padding: 13,
    elevation: 3,
    marginTop: '25%',
    marginLeft: '75%',
    marginRight: '10%',
    backgroundColor: '#F57C00',
    marginBottom: 10,
    color: '#fff',
  },
  button1: {
    marginLeft: '70%',
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
    //backgroundColor: 'orange',
    marginRight: '24.5%',
    justifyContent: 'space-evenly',
  },
  downloadbtn: {
    marginLeft: '78%',
    marginTop: '-6%',
    marginRight: '16%',
  },
  progressContainter: {
    width: '100%',
    height: 40,
    marginLeft: '8%',
    marginTop: '-13%',
    flexDirection: 'row',
  },
  progressLabelContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: '10%',
    marginTop: '-8%',
  },
  progressLabelText: {
    color: '#fff',
    marginLeft: '10%',
  },
  progressLabelText1: {
    color: '#FFF',
    marginLeft: '40%',
  },
  pausebtn: {
    // backgroundColor: 'yellow',
    marginTop: '-9.4%',
    marginRight: '83%',
    marginLeft: '12%',
  },
});
