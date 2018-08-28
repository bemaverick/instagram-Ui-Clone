/**
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, ScrollView, Text, View, Image} from 'react-native';
import { HeaderC, Post } from './../../../components/index';

import styles from './styles';

type Props = {};
export default class Home extends Component<Props> {

  renderItem = (item, index) => (
    <View style={styles.storiesItem}>
      <View
        style={[
          styles.storiesImageWrap,
          item.watched && styles.isWatched
        ]}>
        <Image
          style={styles.storiesImage}
          source={{uri: item.avatar_url}}
        />
        {
          !index &&
          <View style={styles.plusButton}>
            <Text style={styles.plusText}>+</Text>
          </View>
        }
      </View>
      <Text
        style={styles.storiesTitle}
        numberOfLines={1}
      >
        {item.title}
        </Text>
    </View>

  );
  render() {
    return (
      <View style={styles.container}>
        <HeaderC />
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
        >
          <FlatList
            data={data}
            horizontal
            // extraData={this.state}
            style={styles.flatList}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScrollContainer}
            keyExtractor={(item) => item.avatar_url}
            renderItem={({item, index}) => this.renderItem(item, index)}
            ItemSeparatorComponent={() => (<View style={styles.separator} />)}
          />
          <Post
            avatar_url="https://randomuser.me/api/portraits/med/women/65.jpg"
            title="Volley Voice"
            subTitle="Istanbul"
          />
        </ScrollView>
      </View>
    );
  }
}


const data = [
  {
    avatar_url: 'https://randomuser.me/api/portraits/med/men/65.jpg',
    title: 'Albert Jaba',
    watched: true

  },
  {
    avatar_url: 'https://randomuser.me/api/portraits/med/men/66.jpg',
    title: 'Anwar Jibawi',
    watched: true
  },
  {
    avatar_url: 'https://randomuser.me/api/portraits/med/men/69.jpg',
    title: 'Locky Smith',
    watched: 'false'
  },
  {
    avatar_url: 'https://randomuser.me/api/portraits/med/women/65.jpg',
    title: 'Jesica Karuel',
    watched: 'true'

  },
  {
    avatar_url: 'https://randomuser.me/api/portraits/med/men/22.jpg',
    title: 'Jack Jibawi',
    watched: false
  },
  {
    avatar_url: 'https://randomuser.me/api/portraits/med/women/69.jpg',
    title: 'Chanek Koko',
    watched: false
  }

]

