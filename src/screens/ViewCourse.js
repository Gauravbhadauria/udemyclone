import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Viewport} from '@skele/components';
import {AirbnbRating, Rating} from 'react-native-ratings';
const ViewportAwareImage = Viewport.Aware(TouchableOpacity);
const ViewCourse = () => {
  const route = useRoute();
  const [footerVisible, setFooterVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Viewport.Tracker>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={{flex: 1, backgroundColor: '#fff'}}>
            <View
              style={{
                width: '100%',
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Image
                source={{uri: route.params.data.image}}
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  height: 200,

                  borderRadius: 10,
                }}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  width: '90%',
                  height: '100%',
                  top: 0,
                  backgroundColor: 'rgba(0,0,0,.5)',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  navigation.navigate('VideoScreen');
                }}>
                <Image
                  source={require('../images/play_fill.png')}
                  style={{width: 50, height: 50, tintColor: '#fff'}}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '400',
                marginTop: 10,
                marginLeft: 20,
                color: '#000',
              }}>
              {route.params.data.title}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',

                marginLeft: 20,
              }}>
              {
                'hey i will teach you in this course step by step to creating projetc.'
              }
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text style={{marginLeft: 20, fontWeight: '800', color: '#000'}}>
                4.4
              </Text>
              <AirbnbRating
                showRating={false}
                defaultRating={3.5}
                size={13}
                ratingContainerStyle={{marginLeft: 10}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Text style={{marginLeft: 20, color: '#000', fontSize: 12}}>
                {'(15,53 ratings) 17,907 students'}
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={{marginLeft: 20}}>posted by</Text>
              <Text style={{fontWeight: 'bold', color: 'purple'}}>
                {' ' + route.params.data.tutor}
              </Text>
            </View>
            <View style={{marginTop: 15}}>
              <FlatList
                data={[
                  {
                    title: 'Last updated 20 aug 2022',
                    icon: require('../images/info.png'),
                  },
                  {
                    title: 'English',
                    icon: require('../images/language.png'),
                  },
                  {
                    title: 'English',
                    icon: require('../images/caption.png'),
                  },
                ]}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 5,
                      }}>
                      <Image
                        source={item.icon}
                        style={{
                          width: 16,
                          height: 16,
                          marginLeft: 15,
                          tintColor: '#8e8e8e',
                        }}
                      />
                      <Text style={{marginLeft: 10, fontSize: 12}}>
                        {item.title}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 15,
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Image
                source={require('../images/rupee.png')}
                style={{width: 18, height: 20}}
              />
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '800',

                  color: '#000',
                }}>
                {'389.00'}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'purple',
                width: '90%',
                height: 50,
                alignSelf: 'center',
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff', fontWeight: '600', fontSize: 18}}>
                Buy Now
              </Text>
            </TouchableOpacity>
            <ViewportAwareImage
              onViewportEnter={() => setFooterVisible(false)}
              onViewportLeave={() => setFooterVisible(true)}
              style={{
                borderWidth: 1,
                width: '90%',
                height: 50,
                alignSelf: 'center',
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#000', fontWeight: '600', fontSize: 18}}>
                Add To cart
              </Text>
            </ViewportAwareImage>
            <Text
              style={{
                color: '#000',
                fontSize: 24,
                fontWeight: '600',
                marginLeft: 15,
                marginTop: 20,
              }}>
              Curriculum
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 0,
                marginLeft: 15,
              }}>
              <Text>{'10 sections,64 leatures ,9 hours'}</Text>
            </View>
            <View style={{marginTop: 20}}>
              <FlatList
                data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        height: 70,
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{marginLeft: 30, fontSize: 18}}>
                          {index + 1}
                        </Text>
                        <View style={{marginLeft: 20}}>
                          <Text style={{fontSize: 20}}>
                            {'Video ' + (index + 1)}
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Text>{'Video ' + (index + 1) + ' min'}</Text>
                            <Image
                              source={require('../images/caption.png')}
                              style={{width: 16, height: 16, marginLeft: 10}}
                            />
                          </View>
                        </View>
                      </View>
                      <Image
                        source={require('../images/play.png')}
                        style={{
                          width: 18,
                          height: 18,
                          marginRight: 20,
                          tintColor: 'purple',
                        }}
                      />
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </Viewport.Tracker>
      {footerVisible ? (
        <TouchableOpacity
          style={{
            width: '100%',
            height: 70,
            backgroundColor: 'white',

            position: 'absolute',
            bottom: 0,
            elevation: 20,
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 15,
                alignItems: 'center',
              }}>
              <Image
                source={require('../images/rupee.png')}
                style={{width: 18, height: 20}}
              />
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '800',

                  color: '#000',
                }}>
                {'389.00'}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: '60%',
                height: 50,
                backgroundColor: 'purple',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff'}}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default ViewCourse;
