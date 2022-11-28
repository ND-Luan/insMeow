import React from 'react';
import {View, Text} from 'react-native';
import homeStyle from '@styles/home/homeStyle';
import Story from './Story';
function Navbar() {
  return (
    <View style={homeStyle.header}>
      <View style={homeStyle.navbar}>
        <View style={homeStyle.row}>
          <Text>Logo</Text>
          <Text>icon</Text>
        </View>
        <View>
          <Text> Message</Text>
        </View>
      </View>

      <Story />
    </View>
  );
}

export default Navbar;
