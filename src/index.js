/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './containers/Home/HomeMain';
import ExploreMain from './containers/Explore/ExploreMain';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={{ flex: 1}}>
          <TabNavigator />
      </SafeAreaView>
    );
  }
}


const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  Explore: {
    screen: ExploreMain
  },
  Share: {
    screen: Home
  },
  Favorites: {
    screen: Home
  },
  Profile: {
    screen: Home
  },
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      if (routeName === 'Home') {
        return <MaterialCommunityIcon name={`home${focused ? "" : "-outline"}`} size={28} color={tintColor} />;

      } else if (routeName === 'Explore') {
        const icon = focused ?
          <FontAwesomeIcon name="search" size={25} color={tintColor} />
          :
          <EvilIconsIcon  name="search" size={32} color={tintColor} />
        return icon;
      } else if (routeName === 'Share') {
        return <FontAwesomeIcon name={`plus-square${focused ? "" : "-o"}`}  size={25} color={tintColor} />;
      }
      else if (routeName === 'Favorites') {
        return <FontAwesomeIcon name={`heart${focused ? "" : "-o"}`} size={25} color={tintColor} />;

      }
      return <FontAwesomeIcon name={`user${focused ? "" : "-o"}`} size={25} color={tintColor} />;

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
    },
  }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'black',
      inactiveTintColor: 'black',
      style: {
        borderTopWidth: 0.5,
        backgroundColor: 'white',
      },
  },
});

