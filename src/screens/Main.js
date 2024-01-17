import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Featured from '../tabs/Featured';
import Search from '../tabs/Search';
import MyLearning from '../tabs/MyLearning';
import Wishlist from '../tabs/Wishlist';
import User from '../tabs/User';

const Main = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={{flex: 1}}>
      {selectedTab == 0 ? (
        <Featured />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <MyLearning />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <User />
      )}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#fff',
          height: 60,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={
              selectedTab == 0
                ? require('../images/feature_fill.png')
                : require('../images/feature.png')
            }
            style={{width: 24, height: 24}}
          />
          <Text>Featured</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={
              selectedTab == 1
                ? require('../images/search_fill.png')
                : require('../images/search.png')
            }
            style={{width: 24, height: 24}}
          />
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={
              selectedTab == 2
                ? require('../images/play_fill.png')
                : require('../images/play.png')
            }
            style={{width: 24, height: 24}}
          />
          <Text>My learning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={
              selectedTab == 3
                ? require('../images/like_fill.png')
                : require('../images/love.png')
            }
            style={{width: 24, height: 24}}
          />
          <Text>Wishlisht</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={
              selectedTab == 4
                ? require('../images/user_fill.png')
                : require('../images/user.png')
            }
            style={{width: 24, height: 24}}
          />
          <Text>User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main;
