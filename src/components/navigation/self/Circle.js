import {StyleSheet, View} from 'react-native';

function Circle({media}) {
  return <View style={styles.circle}>{media}</View>;
}
const styles = StyleSheet.create({
  circle: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Circle;
