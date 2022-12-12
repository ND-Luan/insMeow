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
        <View style={styles.imgVertical}>
          <FastImage
            source={IMGSEARCH.img5}
            style={{flex: 1}}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
      </View>
      <View style={styles.row}>
      <View style={styles.imgVertical}>
          <FastImage
            source={IMGSEARCH.img6}
            style={{flex: 1}}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
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
  },
  row: {height: 240, flexDirection: 'row'},
  img: {
    width: 118,
    height: 118,
    marginHorizontal: 1,
    marginVertical: 1,

    flexDirection: 'row',
  },
  imgVertical: {
    flex: 2,
    marginHorizontal: 1,
    marginVertical: 1,
  },
  rowImg: {
    flex: 4,
  
    flexWrap: 'wrap',
  },
});
export default ListImage;
