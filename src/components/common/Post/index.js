/**
 * @flow
 */

import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

type Props = {};
export default Post = (props) => (
  <View style={styles.container}>
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
);


