/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Searchbar} from 'react-native-paper';

const ArchiveScreen: React.FC = props => {
  const image = {
    uri: 'https://i.pinimg.com/564x/ec/44/92/ec4492ac910ec0083b608f18d7f42c88.jpg',
  };
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container1}>
          <Text style={styles.header}>ARCHIVED</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Text style={styles.arrowbtn}>
              <MaterialIcons
                name={'arrow-back-ios'}
                size={30}
                color={'white'}
              />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchbarbtn}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <ScrollView>
          <View style={styles.card}>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('data1')}>
                <Text style={styles.datebtn}>1) Verse1</Text>
                <Text
                  style={{marginLeft: '9%', fontWeight: '500', color: 'white'}}>
                  (25-May-2022) "Do not comform ..."
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              {/* <Text style={styles.header1}>Verse 1 note</Text> */}
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('data2')}>
                <Text style={styles.datebtn}>2) Verse 2</Text>
                <Text
                  style={{marginLeft: '9%', fontWeight: '500', color: 'white'}}>
                  (30-May-2022) "Do not comform ..."
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('data1')}>
                <Text style={styles.datebtn}>3) Verse3</Text>
                <Text
                  style={{
                    marginLeft: '9%',
                    fontWeight: '500',
                    marginBottom: '3%',
                    color: 'white',
                    justifyContent: 'space-between',
                  }}>
                  (2-June-2022) "Do not comform ..."
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('data1')}>
                <Text style={styles.datebtn}>4) Verse4</Text>
                <Text
                  style={{
                    marginLeft: '9%',
                    fontWeight: '500',
                    marginBottom: '3%',
                    color: 'white',
                  }}>
                  (2-June-2022) "Do not comform ..."
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('data1')}>
                <Text style={styles.datebtn}>5) Verse5</Text>
                <Text
                  style={{
                    marginLeft: '9%',
                    fontWeight: '500',
                    marginBottom: '3%',
                    color: 'white',
                  }}>
                  (2-June-2022) "Do not comform ..."
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('data1')}>
                <Text style={styles.datebtn}>6) Verse6</Text>
                <Text
                  style={{
                    marginLeft: '9%',
                    fontWeight: '500',
                    marginBottom: '3%',
                    color: 'white',
                  }}>
                  (2-June-2022) "Do not comform ..."
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('data1')}>
                <Text style={styles.datebtn}>7) Verse7</Text>
                <Text
                  style={{
                    marginLeft: '9%',
                    fontWeight: '500',
                    marginBottom: '3%',
                    color: 'white',
                  }}>
                  (2-June-2022) "Do not comform ..."
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('data1')}>
                <Text style={styles.datebtn}>8) Verse8</Text>
                <Text
                  style={{
                    marginLeft: '9%',
                    fontWeight: '500',
                    marginBottom: '3%',
                    color: 'white',
                  }}>
                  (2-June-2022) "Do not comform ..."
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('data1')}>
                <Text style={styles.datebtn}>9) Verse9</Text>
                <Text
                  style={{
                    marginLeft: '9%',
                    fontWeight: '500',
                    marginBottom: '3%',
                    color: 'white',
                  }}>
                  (2-June-2022) "Do not comform ..."
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              {/* <Text style={styles.header1}>Verse 2 note</Text> */}
            </View>
          </View>
          {/* <View>
          <Text style={styles.quote}>
            "Trust in the Lord with all your heart, and do not lean on your own
            understanding."
          </Text>
          <Text style={styles.aurther}>- Proverbs 3:5</Text>
          <Text style={styles.listen}>Listen verse audio below:</Text>
          <Text style={styles.listenbtn1}>
            <FontAwesome5 name={'headphones'} size={20} color={'white'} />
          </Text>
          <Text style={styles.playbtn2}>
            <FontAwesome5 name={'play'} size={13} color={'white'} />
          </Text>
        </View> */}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ArchiveScreen;
