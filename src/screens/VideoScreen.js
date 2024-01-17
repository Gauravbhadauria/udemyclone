import {View, Text, TouchableOpacity, Image, Slider} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
const VideoScreen = () => {
  const [isVideoClicked, setIsVideoClicked] = useState(false);
  const [paused, setPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalVideoTime, setTotalVideoTime] = useState(0);
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <TouchableOpacity
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setIsVideoClicked(!isVideoClicked);
        }}>
        <Video
          paused={paused}
          onEnd={() => {
            setPaused(true);
            // setCurrentTime(0);
            // setTotalVideoTime(0);
          }}
          onProgress={data => {
            setCurrentTime(data.currentTime);
            setTotalVideoTime(data.playableDuration);
            console.log(data);
          }}
          source={require('../images/video.mp4')} // Can be a URL or a local file.
          onBuffer={() => {}} // Callback when remote video is buffering
          onError={() => {}} // Callback when video cannot be loaded
          style={{width: '100%', height: 200}}
        />
      </TouchableOpacity>
      {isVideoClicked === true ? (
        <TouchableOpacity
          style={{
            flex: 1,
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,.5)',
          }}
          onPress={() => {
            setIsVideoClicked(!isVideoClicked);
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{marginRight: 50}} onPress={() => {}}>
                <Image
                  source={require('../images/backward.png')}
                  style={{width: 30, height: 30, tintColor: '#fff'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPaused(!paused);
                }}>
                {paused === true ? (
                  <Image
                    source={require('../images/play-buttton.png')}
                    style={{width: 30, height: 30, tintColor: '#fff'}}
                  />
                ) : (
                  <Image
                    source={require('../images/pause.png')}
                    style={{width: 30, height: 30, tintColor: '#fff'}}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: 50}} onPress={() => {}}>
                <Image
                  source={require('../images/forward.png')}
                  style={{width: 30, height: 30, tintColor: '#fff'}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                height: 60,
                position: 'absolute',
                bottom: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff', marginLeft: 20}}>{currentTime}</Text>
              <Slider
                style={{width: '70%'}}
                maximumValue={totalVideoTime}
                value={currentTime}
              />
              <Text style={{color: '#fff', marginRight: 20}}>
                {totalVideoTime}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default VideoScreen;
