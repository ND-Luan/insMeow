import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ImgCircleStory from './ImgCircleStory';

function Story() {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <ImgCircleStory />
        <ImgCircleStory />
        <ImgCircleStory />
        <ImgCircleStory />
        <ImgCircleStory />
        <ImgCircleStory />
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
