import {Platform, StyleSheet, Text, View} from 'react-native';

export default  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  horizontalScrollContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  storiesItem: {
    width: 66,
    alignItems: 'center'
  },
  storiesImageWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: '#d1235a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  isWatched: {
    borderColor: 'transparent',
  },
  storiesImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 0.5,
    borderColor: '#eee',
    resizeMode: 'contain'
  },
  storiesTitle: {
    fontSize: 11,
  },
  separator: {
    width: 4
  },
  plusButton: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderColor: "#fff",
    borderWidth: 1,
    position: 'absolute',
    backgroundColor: '#26bbe0',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    right: 0
  },
  plusText: {
    marginTop: -4,
    fontSize: 16,
    color: '#fff',
  }
});
