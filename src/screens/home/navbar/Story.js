import React from 'react';
import {View, Text} from 'react-native';

import homeStyle from '@styles/home/homeStyle';
function Story() {
  return (
    <View style={homeStyle.story}>
      <View style={homeStyle.imgCircleStory}></View>
      <View style={homeStyle.imgCircleStory}></View>

    </View>
  );
}

export default Story;
