import Article from '@components/self/article/Article';
import Header from '@components/self/header/Header';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
function Self() {
  const layout = useWindowDimensions();
  return (
    <ScrollView style={styles.container}>
      <Header />

      <Article />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Self;
