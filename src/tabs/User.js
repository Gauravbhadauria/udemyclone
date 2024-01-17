import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const User = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* header */}
      <View
        style={{
          width: '100%',
          height: 55,
          borderBottomWidth: 0.2,
          borderColor: '#8e8e8e',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#000', fontSize: 16}}>Account</Text>
      </View>
      <Text style={{marginLeft: 15, marginTop: 30, fontSize: 12}}>Support</Text>
      <View>
        <FlatList
          data={[
            {title: 'About Udemy', isIcon: true},
            {title: 'About Udemy Business', isIcon: true},
            {title: 'Help and Support', isIcon: false},
            {title: 'Sahre the  Udemy app', isIcon: false},
          ]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{marginLeft: 15, fontSize: 15, color: '#000'}}>
                    {item.title}
                  </Text>
                  {item.isIcon ? (
                    <Image
                      source={require('../images/next.png')}
                      style={{width: 18, height: 18, marginRight: 20}}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text
        style={{
          alignSelf: 'center',
          color: '#8000ff',

          fontWeight: '700',
          marginTop: 30,
        }}>
        Sign in
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 12,
          color: '#000',
          marginTop: 15,
        }}>
        Udemy v.2337.44
      </Text>
    </View>
  );
};

export default User;
