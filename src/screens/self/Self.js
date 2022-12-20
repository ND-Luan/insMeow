import Article from '@components/self/article/Article';
import Header from '@components/self/header/Header';
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
function Self() {
  return (
    <View style={styles.container}>
      {/*ScrollView  error*/}
      <Header />
      <Article />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Self;
