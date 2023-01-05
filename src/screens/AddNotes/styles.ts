/* eslint-disable prettier/prettier */
import {View, Text, ViewStyle, StyleSheet, TextStyle} from 'react-native';
import React from 'react';

interface AddNotesStyle {
  container: ViewStyle;
  header: TextStyle;
  container1: ViewStyle;
  arrowbtn: TextStyle;
  menu: TextStyle;
  savebtn: ViewStyle;
}

export const styles = StyleSheet.create<AddNotesStyle>({
  container: {
    flex: 1,
    backgroundColor: '#FB8C00',
    marginLeft: '2.4%',
    marginRight: '2.3%',
    marginTop: '2%',
  },
  container1: {
    flex: 1,
    marginTop: '5%',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 30,
    fontFamily: 'sans-serif',
    marginTop: '3%',
    marginLeft: '3%',
    fontWeight: 'bold',
    color: '#fff',
  },
  arrowbtn: {
    marginTop: '2%',
  },
  menu: {
    color: 'white',
    marginTop: '-7.2%',
    marginLeft: '4%',
    fontSize: 20,
  },
  savebtn: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 12,
    // paddingHorizontal: 32,
    borderRadius: 70,
    padding: 15,
    elevation: 3,
    marginTop: '80%',
    marginLeft: '80%',
    marginRight: '4%',
    backgroundColor: '#F57C00',
    marginBottom: 10,
    color: '#fff',
  },
});
