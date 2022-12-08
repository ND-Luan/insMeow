import {View, StyleSheet, Text, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import IMGSEARCH from '@constants/imgSearch';
function ListImage() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.rowImg}>
          <FastImage
            source={IMGSEARCH.img1}
            style={styles.img}
            resizeMode={FastImage.resizeMode.cover}
          />
          <FastImage
            source={IMGSEARCH.img2}
            style={styles.img}
            resizeMode={FastImage.resizeMode.cover}
          />
          <FastImage
            source={IMGSEARCH.img3}
            style={styles.img}
            resizeMode={FastImage.resizeMode.cover}
          />
          <FastImage
            source={IMGSEARCH.img4}
            style={styles.img}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        <FastImage source={IMGSEARCH.img5} style={styles.imgVertical} />
      </View>
      <View style={styles.row}>
        <FastImage source={IMGSEARCH.img6} style={styles.imgVertical} />
        <View style={styles.rowImg}>
          <FastImage
            source={IMGSEARCH.img7}
            style={styles.img}
            resizeMode={FastImage.resizeMode.cover}
          />
          <FastImage
            source={IMGSEARCH.img8}
            style={styles.img}
            resizeMode={FastImage.resizeMode.cover}
          />
          <FastImage
            source={IMGSEARCH.img9}
            style={styles.img}
            resizeMode={FastImage.resizeMode.cover}
          />
          <FastImage
            source={IMGSEARCH.img10}
            style={styles.img}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },

  img: {
    width: 120,
    height: 125,
    marginHorizontal: 1,
    marginVertical: 1,
  },
  imgVertical: {
    width: 123,

    height: 255,
    marginHorizontal: 1,
    marginVertical: 1,
  },
  rowImg: {
    height: 255,

    width: 200,
    flexWrap: 'wrap',
    backgroundColor: 'red',
  },
});
export default ListImage;
