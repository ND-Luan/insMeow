import React from 'react';
import {View, ScrollView} from 'react-native';
//Style
import homeStyle from '@styles/home/homeStyle';

//Element Home
import Navbar from './navbar/Navbar';
import Section from './section/Section';

function Home() {
  return (
    <ScrollView style={homeStyle.container}>

        <Navbar />
        <Section />

    </ScrollView>
  );
}

export default Home;
