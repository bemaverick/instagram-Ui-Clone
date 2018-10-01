/**
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, ScrollView, Text, View, Image} from 'react-native';
import { HeaderC, Post } from './../../../components/index';

import styles from './styles';

type Props = {};
export default class Home extends Component<Props> {

  state = {
    items: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        items: true
      })
    }, 3000)

  }

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
            images={Images}
            show={this.state.items}
          />
          <Post
            avatar_url="https://randomuser.me/api/portraits/med/women/65.jpg"
            title="Tim Bresnan"
            subTitle="Kiev"
            images={Images1}
          />
          <Post
            avatar_url="https://randomuser.me/api/portraits/med/women/65.jpg"
            title="Jimm Kerry"
            subTitle="Ukraine"
            images={Images2}
          />
          <Post
            avatar_url="https://randomuser.me/api/portraits/med/women/65.jpg"
            title="Tim Coock"
            subTitle="Paris"
            images={Images3}
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

];


const Images = [
  {
    image_url: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/87c24f56674869.59b81257c5e47.jpg'
  },
  {
    image_url: 'https://cdn.hiconsumption.com/wp-content/uploads/2018/06/Whats-The-Difference-Muscle-Car-Versus-Pony-Car-00.jpg'

  },
  {
    image_url: 'https://dy98q4zwk7hnp.cloudfront.net/1969-Chevrolet-Camaro-Muscle%20&%20Pony%20Cars--Car-100743153-1362f51fb1d839c47813033ff9087895.jpg'

  }
]

const Images1 = [

  {
    image_url: 'https://cdn.hiconsumption.com/wp-content/uploads/2018/06/Whats-The-Difference-Muscle-Car-Versus-Pony-Car-00.jpg'

  },
  {
    image_url: 'https://dy98q4zwk7hnp.cloudfront.net/1969-Chevrolet-Camaro-Muscle%20&%20Pony%20Cars--Car-100743153-1362f51fb1d839c47813033ff9087895.jpg'

  }
];
const Images2 = [
  {
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9DW6otedwwkNUWWYS2wNhNV9JE-upPOOAGOeDe1YtE8km4bP'
  },
  {
    image_url: 'https://stmed.net/sites/default/files/weapon-wallpapers-29164-7976165.jpg'

  },
  {
    image_url: 'https://i.pinimg.com/originals/f2/3f/dc/f23fdc26ad82a74172fc21d9d153ff4c.jpg'

  },
  {
    image_url: 'https://www.peninsulaguns.com/blog/content/images/2016/08/purchasing-requirements-1.jpg'
  }
]

const Images3 = [
  {
    image_url: 'https://media.wired.com/photos/5a970eb4927dc94e67685b0e/master/pass/matterhorn-802950172.jpg'
  },
  {
    image_url: 'https://vignette.wikia.nocookie.net/risingdawn/images/a/a9/Quimrdage_Peaks.jpg/revision/latest?cb=20140104202622'

  },
  {
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1piLttH5quHc2lvvIZp6ix15oOPtFhp3llVvyVfv4Z9nqmn0t'

  }
]
