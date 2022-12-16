import Header from '@components/self/header/Header';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function Self() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Self;
