/* eslint-disable prettier/prettier */
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface DataScreen1Style {
  container: ViewStyle;
  quote: TextStyle;
  aurther: TextStyle;
  listen: TextStyle;
  listenbtn: TextStyle;
  playbtn: TextStyle;
  header1: TextStyle;
  arrowbtn: TextStyle;
  menu: TextStyle;
  edit: TextStyle;
  savebtn: TextStyle;
}
export const styles = StyleSheet.create<DataScreen1Style>({
  container: {
    flex: 1,
  },
  arrowbtn: {
    marginTop: '2%',
    marginLeft: '3%',
  },
  menu: {
    color: 'orange',
    marginTop: '-7.2%',
    marginLeft: '6%',
    fontSize: 20,
  },
  header1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: '4%',
  },
  quote: {
    color: 'black',
    marginTop: '2%',
    marginLeft: '10%',
    marginRight: '10%',
    fontSize: 20,
    fontFamily: 'Roman',
  },
  aurther: {
    color: '#000',
    marginTop: '2%',
    marginLeft: '65%',
    marginRight: '1%',
    fontSize: 15,
  },
  listen: {
    color: '#000',
    fontSize: 20,
    marginLeft: '8%',
    marginTop: '5%',
  },
  listenbtn: {
    marginLeft: '10%',
    marginTop: '2%',
    backgroundColor: 'orange',
    marginRight: '10%',
    height: '9%',
    padding: 3,
  },
  playbtn: {
    marginLeft: '18%',
    marginTop: '-6.3%',
    padding: 1,
  },
  edit: {
    marginLeft: '87%',
    marginTop: '-7%',
  },

  savebtn: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 12,
    // paddingHorizontal: 32,
    borderRadius: 70,
    padding: 15,
    elevation: 3,
    marginTop: '70%',
    marginLeft: '80%',
    marginRight: '4%',
    backgroundColor: '#F57C00',
    marginBottom: 10,
    color: '#fff',
  },
});
