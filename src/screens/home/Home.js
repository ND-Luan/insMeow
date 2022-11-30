import React from 'react';
import {View, ScrollView} from 'react-native';
//Style
import homeStyle from '@styles/home/homeStyle';
//Component
import Story from '@components/home/Story';
import Section from '@components/home/Section';


function Home() {
  return (
    <ScrollView style={homeStyle.container}>
        <Story/>
        <Section/>
    </ScrollView>
  );
}

export default Home;
