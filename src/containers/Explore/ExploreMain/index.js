/**
 * @flow
 */

import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';
import HeaderC from './../../../components/common/HeaderC';

import styles from './styles';

type Props = {};
export default class ExploreMain extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <HeaderC />
        <Text>Explore</Text>
      </View>
    );
  }
}


