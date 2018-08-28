import {Platform, StyleSheet, Text, View} from 'react-native';

export default  StyleSheet.create({
  container: {
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
  }


});
