import {ScrollView, StyleSheet, View} from 'react-native';
import Circle from './Circle';
function Story() {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
export default Story;
