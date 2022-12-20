import {View, Text, StyleSheet} from 'react-native';
function Middle() {
  return (
    <View style={styles.container}>
      <Text>Middle</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
});
export default Middle;
