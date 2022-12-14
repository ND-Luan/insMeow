import {View, StyleSheet} from 'react-native';
function CircleAvatar({avatar}) {
  console.log(avatar);
  return (
    <View style={styles.circle}>
      <View style={styles.icon}>{avatar}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 60 / 2,
  },
  icon: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CircleAvatar;
