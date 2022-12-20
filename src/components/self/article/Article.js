import {View, Text, StyleSheet} from 'react-native';
import Left from './left/Left';
import Middle from './middle/Middle';
import Right from './right/Right';
function Article() {
  return (
    <View style={styles.container}>
      <Left />
      <Middle />
      <Right />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Article;
