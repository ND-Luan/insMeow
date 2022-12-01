import IMGSTORY from '@constants/imgStory';
import {View, StyleSheet, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
function ImgCircleStory({name, uri}) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF6F91', '#FFC75F']}
        style={styles.imgCircleStory}>
        <FastImage
          style={styles.img}
          source={uri}
          resizeMode={FastImage.resizeMode.contain}
        />
      </LinearGradient>
      <Text style={styles.textName}>{name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  imgCircleStory: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
  },
  img: {
    width: 85,
    height: 85,
    borderRadius: 85 / 2,
    backgroundColor: 'white',
    marginTop: 2,
    alignSelf: 'center',
  },
  textName: {
    marginTop: 5,
    left: 23,
    fontSize: 15,
  },
});
export default ImgCircleStory;
