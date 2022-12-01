import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
function Media({uriMedia}) {
  return (
    <FastImage
      style={styles.img}
      source={uriMedia}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
}
const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 500,
    marginVertical: 10,
  },
});
export default Media;
