import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
function Media({media}) {
  return <FastImage source={media} style={styles.square} />;
}
const styles = StyleSheet.create({
  square: {
    paddingLeft: 5,
    height: 50,
    width: 50,
  },
});
export default Media;
