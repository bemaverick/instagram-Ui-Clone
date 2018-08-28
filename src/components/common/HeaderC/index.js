/**
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Image, Text, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

import styles from './styles';
const logoURL = "https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-text-black-png.png"

type Props = {};
export default class HeaderC extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftBlock}>
          <View style={styles.iconWrap}>
            <MaterialIcon
              name="photo-camera"
              color="black"
              size={26}
            />
          </View>
          <Image
            source={{uri: logoURL}}
            style={styles.logoStyles}
          />
        </View>
        <View style={styles.rightBlock}>
          <View style={styles.iconWrap}>
            <MaterialIcon
              name="live-tv"
              color="black"
              size={25}
            />
          </View>
          <View style={[styles.iconWrap, styles.pH10]}>
            <SimpleLineIcon
              name="paper-plane"
              color="black"
              size={20}
            />
          </View>
        </View>
      </View>
    );
  }
}

