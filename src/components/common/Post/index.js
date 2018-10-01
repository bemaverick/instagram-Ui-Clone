/**
 * @flow
 */

import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

type Props = {};
export default Post = (props) => (
  <View>
    <View style={styles.headerContainer}>
      <View style={styles.leftBlock}>
        <Image
          style={styles.avatar}
          source={{ uri: props.avatar_url }}
        />
        <View>
          <Text
            style={styles.title}
            numberOfLines={1}
          >
            { props.title}
          </Text>
          <Text
            style={styles.subTitle}
            numberOfLines={1}
          >
            { props.subTitle }
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.rightBlock}
      >
        <IonIcon
          name="md-more"
          size={24}
          color="#969696"
        />
      </TouchableOpacity>
    </View>

    <View>
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={props.images}
        renderItem={({item, index}) => (
          <View style={styles.slide}>
            <Image
              source={{uri: item.image_url}}
              style={styles.image}
            />
            {
              props.show && (index != 2) &&  <Text>{index}</Text>
            }
            {
              props.show && (index === 2) && (<View>
                <Text>{index}</Text>

                <Text>{index}</Text>

                <Text>{index}</Text>

                <Text>{index}</Text>

                <Text>{index}</Text>

                <Text>{index}</Text>

                <Text>{index}</Text>

              </View>)
            }

          </View>
        )}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
      />
    </View>

    <View style={styles.containerControl}>
      <View style={styles.socialIconsBlock}>
        <MaterialIcon
          name="favorite-border"
          color="#000"
          size={24}
        />
        <FeatherIcon
          name="message-circle"
          color="#000"
          size={24}
        />
        <FeatherIcon
          name="send"
          color="#000"
          size={24}
        />
      </View>
      <View style={styles.paginationBlock}>
        <IonIcon
          name="ios-more"
          size={24}
          color="#000"
        />
      </View>
      <View style={styles.favoritesBlock}>
        <FontAwesomeIcon
          name="bookmark-o"
          size={24}
          color="#000"
        />
      </View>
    </View>

  </View>
);


