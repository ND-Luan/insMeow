import {View, StyleSheet, TouchableOpacity} from 'react-native';

function Btn() {
  return (
    <TouchableOpacity style={styles.cirlce}>
      <View style={styles.smallCircle}></View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  cirlce: {
    height: 30,
    width: 30,

    borderRadius: 30 / 2,
    backgroundColor: '#add8e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallCircle: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: 'white',
  },
});
export default Btn;
