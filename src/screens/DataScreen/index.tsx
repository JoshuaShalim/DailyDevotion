/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
const DataScreen: React.FC = props => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Archive')}>
          <Text style={styles.arrowbtn}>
            <MaterialIcons name={'arrow-back-ios'} size={30} color={'orange'} />
          </Text>
        </TouchableOpacity>

        <Text style={styles.menu}> Archived</Text>
        <Text style={styles.edit}>
          <TouchableOpacity>
            <MaterialIcons name={'edit'} size={30} color={'orange'} />
          </TouchableOpacity>
        </Text>
      </View>
      <View>
        <Text style={styles.header1}>Verse 1</Text>
        <Text style={styles.quote}>
          "Do not conform to the pattern of this world, but be transformed by
          the renewing of your mind. Then you will be able to test and approve
          what God’s will is—his good, pleasing and perfect will."
        </Text>
        <Text style={styles.aurther}>-Romans 12:2</Text>
        <Text style={styles.listen}>Listen verse audio below:</Text>
        <Text style={styles.listenbtn}>
          <FontAwesome5 name={'headphones'} size={20} color={'white'} />
        </Text>
        <TouchableOpacity>
          <Text style={styles.playbtn}>
            <FontAwesome5 name={'play'} size={13} color={'white'} />
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.savebtn}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Archive')}>
          <MaterialIcons name={'save'} size={32} color={'white'} />
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default DataScreen;
