/**
 * @flow
 */

import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';

import styles from './styles';

type Props = {};
export default HeaderSearch = (props) => (
  <TouchableOpacity
    style={styles.container}
    onPress={props.makeAction}
  >
    <View style={styles.leftBlock}>
      <View style={styles.iconWrap}>
        <EvilIconsIcon
          name="search"
          size={32}
          color="#000"
        />
      </View>
      <Text style={styles.title}>Найти</Text>
    </View>
  </TouchableOpacity>
)
