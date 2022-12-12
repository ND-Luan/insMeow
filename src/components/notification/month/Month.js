import {StyleSheet, Text, View} from 'react-native';
import ItemList from '../ItemList';
function Month() {
  return (
    <View>
      <Text style={styles.title}>Tháng này</Text>
      <ItemList />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
export default Month;
