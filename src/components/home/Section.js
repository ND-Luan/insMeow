import homeStyle from '@styles/home/homeStyle';
import React from 'react';
import {View, Text} from 'react-native';
function Section() {
  return (
    <View style={homeStyle.section}>
      {/* Start Card*/}
      <View style={homeStyle.card}>
        {/*Title Card*/}
        <View style={homeStyle.card.row}>
          <View style={homeStyle.card.rowAvatar}>
            <Text>Logo</Text>
            <Text>NameLogo</Text>
          </View>
          <Text>Icon</Text>
        </View>
        {/*Img Card*/}
        <View style={homeStyle.card.img}></View>

        <View style={homeStyle.card.imgIcon}>
          <View style={homeStyle.card.imgIcon.imgIconList}>
            <Text>Icon</Text>
            <Text>Icon</Text>
            <Text>Icon</Text>
          </View>

          <Text>Icon</Text>
        </View>
        {/*Comment Card */}
        <View style={homeStyle.card.comment}>
          <Text>Likes</Text>
          <View style={homeStyle.card.comment.list}>
            <Text>Name: </Text>
            <Text>Content</Text>
          </View>
          <Text>Watch all comment</Text>
          <View style={homeStyle.card.comment.spaceBetween}>
            <View style={homeStyle.card.comment.listInput}>
              <Text>icon</Text>
              <Text>Input</Text>
            </View>

            <View style={homeStyle.card.comment.list}>
              <Text>icon</Text>
              <Text>icon</Text>
              <Text>icon</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Section;
