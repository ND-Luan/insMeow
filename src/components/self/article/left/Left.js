import {Text, View, StyleSheet} from 'react-native';
import Line from '../Line';

function Left() {
  return (
    <View style={styles.container}>
      <Text>Left</Text>
      <Line />
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
export default Left;
