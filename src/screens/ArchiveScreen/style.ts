/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import React from 'react';
interface ArchiveScreenStyle {
  container: ViewStyle;
  header: TextStyle;
  date: TextStyle;
  header1: TextStyle;
  image: ImageStyle;
  container1: ViewStyle;
  button: ViewStyle;
  datebtn: TextStyle;
  quote: TextStyle;
  aurther: TextStyle;
  listen: TextStyle;
  listenbtn: TextStyle;
  playbtn: TextStyle;
  playbtn2: TextStyle;
  listenbtn1: TextStyle;
  arrowbtn: TextStyle;
  searchbarbtn: ViewStyle;
  card: ViewStyle;
  cardContent: ViewStyle;
}
export const styles = StyleSheet.create<ArchiveScreenStyle>({
  container: {
    flex: 1,
  },
  searchbarbtn: {
    marginTop: '3%',
    marginLeft: '7%',
    marginRight: '5%',
  },

  header: {
    fontSize: 34,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#fff',
    marginTop: '2%',
  },
  header1: {
    marginLeft: '12%',
    marginRight: '3%',
    fontSize: 30,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
  },

  container1: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: '3%',
    padding: 3,
    marginLeft: '3%',
    color: '#fff',
  },
  datebtn: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'serif',
  },
  quote: {
    color: '#FFF',
    marginTop: '2%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  date: {
    color: '#fff',
  },
  aurther: {
    color: '#FFF',
    marginTop: '2%',
    marginLeft: '65%',
    marginRight: '1%',
  },
  listen: {
    color: '#fff',
    fontSize: 20,
    marginLeft: '8%',
    marginTop: '5%',
  },
  listenbtn: {
    marginLeft: '10%',
    marginTop: '2%',
    backgroundColor: 'orange',
    marginRight: '10%',
    height: '11%',
    padding: 3,
  },
  playbtn: {
    marginLeft: '18%',
    marginTop: '-5%',
  },
  playbtn2: {
    marginLeft: '18%',
    marginTop: '-5%',
  },
  listenbtn1: {
    marginLeft: '10%',
    marginTop: '2%',
    backgroundColor: 'orange',
    marginRight: '10%',
    height: '12.3%',
    padding: 3,
  },
  arrowbtn: {
    marginTop: '-10%',
    marginLeft: '2%',
  },
  card: {
    marginTop: '8%',
    borderRadius: 6,
    elevation: 6,
    borderStartColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowColor: 'transparent',
    // shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
