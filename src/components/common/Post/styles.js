import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';

export default  StyleSheet.create({
  headerContainer: {
    flex: 0,
    height: 44,
    paddingLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee'
  },
  leftBlock: {
    flex: 1,
    flexDirection: 'row',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8
  },
  title: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: "700"
  },
  subTitle: {
    fontSize: 9,
  },
  rightBlock: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },


  slide: {
    width: Dimensions.get('window').width,
    backgroundColor: 'green'
  //  height: Dimensions.get('window').width
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    resizeMode: 'cover'
  },

  containerControl: {
    flex: 1,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  socialIconsBlock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  paginationBlock: {
    flex: 1,
    alignItems: 'center'

  },
  favoritesBlock: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 12
  }


});
