import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function Circle() {
  return (
    <View style={{marginRight: 10}}>
      <View style={styles.circle}></View>
      <Text style={{textAlign: 'center'}}>Text</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  circle: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    borderWidth: 1,
  },
});
export default Circle;
