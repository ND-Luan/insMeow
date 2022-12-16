import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {faXmarkCircle} from '@fortawesome/free-regular-svg-icons';
function Circle() {
  return (
    <View>
      <View style={styles.circle}></View>
      <TouchableOpacity style={styles.btn}>
        <FontAwesomeIcon icon={faXmarkCircle} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  circle: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    borderWidth: 1,
    alignSelf: 'center',
  },
  btn: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
});
export default Circle;
