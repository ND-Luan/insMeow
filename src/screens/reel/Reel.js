import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function Reel() {
  return (
    <View style={styles.container}>
      <Text>Reel</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Reel;
