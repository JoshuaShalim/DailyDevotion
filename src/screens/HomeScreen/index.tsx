/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Pressable,
  ImageBackground,
  Alert,
  FlatList,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {styles} from './styles';
import React, {useEffect, useState} from 'react';
import {DevotionResponse} from './utils';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
//import songs from '../../../model/data';

const HomeScreen: React.FC = props => {
  const [isLoading, setLoading] = useState(true);
  const progress = useProgress();
  //-------FUNCTIONALITY OF API START ---
  const [data, setData] = useState<DevotionResponse>();
  const URL = 'https://jhnerd.com/dailydevotion.php';
  //--------FUNCTIONALITY OF API END -----

  //-----ALRET FUNCTION START ----
  const createButtonAlert = () =>
    Alert.alert('File Download', 'File downloaded successfully!!', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);

  //-----ALRET FUNCTION END ----

  //---  Music Player
  var track = {
    url: data?.devotion_url, // Load media from the network
    title: 'Avaritia',
    artist: 'deadmau5',
    album: 'while(1<2)',
    genre: 'Progressive House, Electro House',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    //artwork: 'http://example.com/cover.png', // Load artwork from the network
    duration: 402, // Duration in seconds
  };
  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();
    // console.log(data?.devotion_url);
    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: data!.devotion_url,
      title: 'Track Title',
      artist: 'Track Artist',

      //artwork: require('track.png')
    });

    // Start playing it
    await TrackPlayer.play();
  };

  // TrackPlayer.updateOptions({
  //   stoppingAppPausesPlayback: false,
  //   capabilities: [Capability.Play, Capability.Pause],
  //   compactCapabilities: [Capability.Play, Capability.Pause],
  // });

  // useEffect(() => {
  //   start();
  // }, []);

  const playBackState = usePlaybackState();
  const togglePlayBack = async (playBackStateProp: any) => {
    // console.log(data?.devotion_url);
    // Add a track to the queue
    await TrackPlayer.add({
      id: data!.id,
      url: data!.devotion_url,
      title: data?.title,
      artist: 'Track Artist',

      //artwork: require('track.png')
    });
    //console.log('hello');
    const currentTrack = await TrackPlayer.getCurrentTrack();
    const duration = await TrackPlayer.getDuration();

    console.log(playBackStateProp);
    if (currentTrack != null) {
      if (playBackStateProp == State.Paused) {
        await TrackPlayer.play();
        console.log('playing playing');
      } else if (playBackStateProp == State.Playing) {
        await TrackPlayer.pause();
      }
      //else if (playBackStateProp == State.None) {
      //   await TrackPlayer.play();
      // } else if (playBackStateProp == State.Paused) {
      //   await TrackPlayer.play();
      // } else {
      //   // await TrackPlayer.reset();
      // }
    }
  };
  //-----BACKGROUND IMAGE URL START ----
  const image = {
    uri: 'https://i.pinimg.com/750x/ce/cb/e8/cecbe8b82fe7d19de276809544dff70a.jpg',
  };
  //-----BACKGROUND IMAGE URL END ----

  //--------API CALLING START----------
  const getDataFromApi = async () => {
    await TrackPlayer.setupPlayer();
    try {
      const response = await fetch(URL);
      // if (response.ok) {
      let jsonRetn = await response.json();
      console.log(response.json());
      // Alert.alert(data);
      //  }
      //  console.log(JSON.parse(json));
      console.log(jsonRetn);
      setData(jsonRetn);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDataFromApi();
  }, []);
  // useEffect(() => {
  //   console.log(progress.duration);
  // }, [progress]);

  //------------------API CALLING END -----------

  // const formatTime = secs => {
  //   let minutes = Math.floor(secs / 60);
  //   let seconds = Math.ceil((secs - minutes) * 60);
  //   if (seconds < 10) seconds = `0${seconds}`;
  //   return `${minutes}: ${seconds}`;
  // };
  // const {position, duration} = useProgress();

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container1}>
          <Text style={styles.header}>Quotidian Spiritual</Text>
        </View>
        <View>
          <Text style={styles.header1}>Today's Quote:</Text>
          <Pressable
            onPress={() => {
              props.navigation.navigate('Archive');
            }}
            style={styles.button1}>
            <FontAwesome5 name={'archive'} size={20} color={'white'} />
          </Pressable>
          <Pressable onPress={createButtonAlert} style={styles.downloadbtn}>
            <MaterialIcons name={'download'} size={25} color={'white'} />
          </Pressable>
        </View>
        <View style={[styles.shadowProp, styles.card]}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'monospace',
              justifyContent: 'center',
              fontWeight: '900',
            }}>
            {data?.title}
          </Text>
          <Text style={styles.quote}>
            {/* "Do not conform to the pattern of this world, but be transformed by
            the renewing of your mind. Then you will be able to test and approve
            what God’s will is—his good, pleasing and perfect will." -Romans
            12:2 */}
            {data?.description}
          </Text>
          {/* <FlatList
            data={data}
            keyExtractor={(item, index) => item.id}
            renderItem={({item}) => <Text>{item.id + item.title}</Text>}
          /> */}
        </View>
        <View>
          <Pressable
            onPress={() => togglePlayBack(playBackState)}
            style={styles.button}>
            <FontAwesome5
              name={playBackState === State.Playing ? 'pause' : 'play'}
              size={22}
              color={'white'}
            />
            <Slider
              style={[styles.progressContainter]}
              value={progress.position}
              minimumValue={0}
              maximumValue={progress.duration}
              thumbTintColor="#fff"
              minimumTrackTintColor="#Fff"
              maximumTrackTintColor="#fff"
              // onSlidingComplete={async value => {
              //   await TrackPlayer.seekTo(value);
              // }}
            />
          </Pressable>

          <View style={styles.progressLabelContainer}>
            <Text style={styles.progressLabelText}>
              {new Date(progress.position * 1000)
                .toLocaleTimeString()
                .substring(3)}
            </Text>
            <Text style={styles.progressLabelText1}>
              {new Date((progress.duration - progress.position) * 1000)
                .toLocaleTimeString()
                .substring(3)}
            </Text>
          </View>
        </View>

        <View>
          <Pressable
            style={styles.button2}
            onPress={() => props.navigation.navigate('AddNotes')}>
            <FontAwesome5 name={'edit'} size={30} color={'white'} />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
