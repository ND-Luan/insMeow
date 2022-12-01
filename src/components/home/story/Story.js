import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ImgCircleStory from './ImgCircleStory';
import IMGSTORY from '@constants/imgStory';
function Story() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <ImgCircleStory name="Cat_1" uri={IMGSTORY.img1} />
        <ImgCircleStory name="Cat_2" uri={IMGSTORY.img2} />
        <ImgCircleStory name="Cat_3" uri={IMGSTORY.img3} />
        <ImgCircleStory name="Cat_4" uri={IMGSTORY.img4} />
        <ImgCircleStory name="Cat_5" uri={IMGSTORY.img5} />
        <ImgCircleStory name="Cat_6" uri={IMGSTORY.img6} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'row',

    padding: 10,
  },
});
export default Story;
