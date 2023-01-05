/* eslint-disable prettier/prettier */
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {styles} from '../AddNotes/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AddNotes: React.FC = props => {
  const createButtonAlert = () =>
    Alert.alert('Saved', 'Successfully Saved!!', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.arrowbtn}>
            <MaterialIcons name={'arrow-back-ios'} size={30} color={'white'} />
          </Text>
        </TouchableOpacity>

        <Text style={styles.menu}> Main Menu</Text>
      </View>
      <Text style={styles.header}>Notes:</Text>
      <TextInput
        placeholder="Title"
        style={{
          marginLeft: '3%',
          marginRight: '3%',
          fontSize: 30,
          borderBottomColor: '#000',
          borderBottomWidth: 2,
          fontFamily: 'sans-serif-medium',
          fontWeight: 'bold',
        }}
      />
      <View style={styles.container1}>
        <TextInput
          placeholder="AddTextHere"
          style={{
            marginLeft: '3%',
            fontSize: 18,
            fontFamily: 'sans-serif',
          }}
          multiline={true}
        />
        <Text style={styles.savebtn}>
          <TouchableOpacity onPress={createButtonAlert}>
            <MaterialIcons name={'save'} size={32} color={'white'} />
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};
export default AddNotes;
