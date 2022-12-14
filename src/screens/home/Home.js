import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

//Component
import Story from '@components/home/story/Story';
import Section from '@components/home/section/Section';

import IMGSECTION from '@constants/imgSection';
function Home() {

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Story />
      <Section
        name="Cat_1"
        uriLogo={IMGSECTION.img1.logo}
        uriMedia={IMGSECTION.img1.media}
        likes="200"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        datePost="2"
      />
      <Section
        name="Cat_2"
        uriLogo={IMGSECTION.img2.logo}
        uriMedia={IMGSECTION.img2.media}
        likes="6996"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        datePost="10"
        isVideo
      />
      <Section
        name="Cat_3"
        uriLogo={IMGSECTION.img3.logo}
        uriMedia={IMGSECTION.img3.media}
        likes="123"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        datePost="1"
        
      />
      <Section
        name="Cat_4"
        uriLogo={IMGSECTION.img4.logo}
        uriMedia={IMGSECTION.img4.media}
        likes="456"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        datePost="11"
    
      />
      <Section
        name="Cat_5"
        uriLogo={IMGSECTION.img5.logo}
        uriMedia={IMGSECTION.img5.media}
        likes="98"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        datePost="3"
        isVideo
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
