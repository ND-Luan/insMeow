import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

function Circle() {
  return (
    <FastImage
      source={require('../../../../assets/self/avatarDropdownHeader.jpg')}
      style={styles.circle}
    />
  );
}
const styles = StyleSheet.create({
  circle: {
 
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
  },
});
export default Circle;
