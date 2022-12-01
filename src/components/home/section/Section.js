import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Comment from './Comment';
import InteractionIcon from './InteractionIcon';
import Media from './Media';
import TitleHeader from './TitleHeader';
function Section({name, uriLogo, uriMedia, likes, content,datePost}) {
  return (
    <View style={styles.section}>
      {/* Start Card*/}
      <View style={styles.card}>
        {/*Title Card*/}
        <TitleHeader name={name} uriLogo={uriLogo} />
        {/*Img Card*/}

        <Media uriMedia={uriMedia} />
        <InteractionIcon />
        {/*Comment Card */}
        <Comment
          likes={likes}
          name={name}
          content={content}
          uriLogo={uriLogo}
          datePost={datePost}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  section: {
    flex: 1,
  },
  card: {
    flex: 1,
  },
});

export default Section;
