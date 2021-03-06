/**
 * @flow
 */

import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';
import { HeaderSearch } from './../../../components/index';
import styles from './styles';

type Props = {};
export default class ExploreMain extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <HeaderSearch makeAction={() => this.props.navigation.navigate('ExploreSearch')} />
        <Text>Explore</Text>
      </View>
    );
  }
}


