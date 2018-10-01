/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, TouchableOpacity, Easing, Animated, Text, View, SafeAreaView} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import Home from './containers/Home/HomeMain';
import ExploreMain from './containers/Explore/ExploreMain';
import ExploreSearch from './containers/Explore/ExploreSearch';
import { HeaderSearch } from './components/index'


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
const SearchTopBar = createMaterialTopTabNavigator({
  Best: {
    screen: Home,
    navigationOptions: {
      title: "Лучшие"
    }
  },
  People: {
    screen: ExploreSearch,
    navigationOptions: {
      title: "Люди"
    }
  },
  Labels: {
    screen: ExploreMain,
    navigationOptions: {
      title: "Метки"
    }
  },
  Places: {
    screen: ExploreMain,
    navigationOptions: {
      title: "Места"
    }
  }
},{
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: "gray",
    indicatorStyle: {
      backgroundColor: '#000'
    },
    style: {
      backgroundColor: '#fff',
      height: 40
    }
  }
})

const ExploreStack = createStackNavigator({
  Explore: {
    screen: ExploreMain,
    navigationOptions:{
      header: null

    }
  },
  ExploreSearch: {
    screen: SearchTopBar,
    navigationOptions:{
      header:null
    }
  }
},{
  transitionConfig : () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0,
    },
  }),
});




const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  Explore: {
    screen: ExploreStack
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

