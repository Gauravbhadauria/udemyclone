import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const featuredCourses = [
  {
    title: 'Learn python in 30 days easily ',
    image:
      'https://5.imimg.com/data5/QY/TP/MZ/SELLER-10578244/python-training-course-500x500.jpeg',
    tutor: 'Gaurav Bhadauria',
    price: '3999',
    discountPrice: '599',
    rating: '4.1',
    totalRatings: '150',
    isBestSeller: true,
  },
  {
    title: 'React Native Full Course',
    image: 'https://i.ytimg.com/vi/frvXANSaSec/maxresdefault.jpg',
    tutor: 'Free Code Camp',
    price: '3999',
    discountPrice: '999',
    rating: '4.2',
    totalRatings: '200',
    isBestSeller: true,
  },
  {
    title: 'Javascript Full Course',
    image: 'https://i.ytimg.com/vi/q7rnaVD_Wjc/maxresdefault.jpg',
    tutor: 'Simply Learn',
    price: '3999',
    discountPrice: '1999',
    rating: '4.0',
    totalRatings: '333',
    isBestSeller: false,
  },
];
const Featured = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Image
            source={require('../images/banner_featured.jpg')}
            style={{width: '100%', height: 200}}
          />

          <Text
            style={{
              fontSize: 27,
              color: '#000',
              fontWeight: '500',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
            }}>
            {'Learn From\nTheir experiences'}
          </Text>

          <Text style={{marginLeft: 20, marginRight: 20}}>
            {
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum '
            }
          </Text>
          <View
            style={{
              width: '90%',
              marginTop: 20,
              height: 60,
              backgroundColor: '#e6e600',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#000'}}>Learn from Experts </Text>
            <Text style={{color: '#000', fontSize: 12, fontWeight: '800'}}>
              Ends in 1Day{' '}
            </Text>
          </View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              fontSize: 20,
              fontWeight: '700',
              color: '#000',
            }}>
            Featured
          </Text>
          <View style={{width: '100%', marginBottom: 150, marginTop: 10}}>
            <FlatList
              data={featuredCourses}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{width: 300, marginLeft: 10}}
                    onPress={() => {
                      navigation.navigate('ViewCourse', {
                        data: item,
                      });
                    }}>
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                      }}>
                      <Image
                        source={{
                          uri: item.image,
                        }}
                        style={{width: '100%', height: 100}}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          color: '#000',
                          fontWeight: '600',
                          marginLeft: 10,
                          marginTop: 10,
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: '#8e8e8e',
                          fontWeight: '600',
                          marginLeft: 10,
                        }}>
                        {item.tutor}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          width: '100%',
                          alignItems: 'center',
                        }}>
                        <Text style={{marginLeft: 10}}>{item.rating}</Text>
                        <Image
                          source={require('../images/rating.png')}
                          style={{width: 10, height: 10, marginLeft: 10}}
                        />
                        <Image
                          source={require('../images/rating.png')}
                          style={{width: 10, height: 10, marginLeft: 2}}
                        />
                        <Image
                          source={require('../images/rating.png')}
                          style={{width: 10, height: 10, marginLeft: 2}}
                        />
                        <Image
                          source={require('../images/rating.png')}
                          style={{width: 10, height: 10, marginLeft: 2}}
                        />
                        <Image
                          source={require('../images/rating.png')}
                          style={{width: 10, height: 10, marginLeft: 2}}
                        />
                        <Text>{'(' + item.totalRatings + ')'}</Text>
                      </View>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text
                          style={{
                            fontWeight: '700',
                            fontSize: 18,
                            color: '#000',
                            marginLeft: 10,
                            marginTop: 5,
                          }}>
                          {'₹ ' + item.discountPrice}
                        </Text>
                        <Text
                          style={{
                            textDecorationLine: 'line-through',
                            fontSize: 16,

                            marginLeft: 10,
                            marginTop: 5,
                          }}>
                          {'₹ ' + item.price}
                        </Text>
                      </View>
                      {item.isBestSeller ? (
                        <View
                          style={{
                            backgroundColor: '#e6e600',
                            width: 90,
                            height: 25,
                            marginTop: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{color: '#000'}}>Best Seller</Text>
                        </View>
                      ) : null}
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#000',
          position: 'absolute',
          bottom: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff'}}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Featured;
