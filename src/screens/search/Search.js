import ListImage from '@components/search/ListImage';
import SearchInput from '@components/search/SearchInput';

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function Search() {
  return (
    <View style={styles.container}>
      <SearchInput />
      <ListImage />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Search;
