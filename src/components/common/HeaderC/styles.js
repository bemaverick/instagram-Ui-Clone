import {Platform, StyleSheet, Text, View} from 'react-native';

export default  StyleSheet.create({
  container: {
    height: 44,
    flex: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  leftBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightBlock: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  iconWrap: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pH10: {
    paddingHorizontal: 10
  },
  logoStyles: {
    height: 22,
    width: 80,
    marginTop: 4,
    resizeMode: 'contain'
  },

});
