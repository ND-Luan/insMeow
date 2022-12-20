import {View, StyleSheet} from 'react-native';

function Line() {
  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
});
export default Line;
