import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  faShareNodes,
  faLink,
  faBookmark,
  faAdd,
  faQrcode,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

function CirclePopUp() {
  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.col}>
        <View style={[styles.circle, styles.iconCenter]}>
          <FontAwesomeIcon icon={faShareNodes} size={25} />
        </View>
        <Text style={styles.text}>Chia sẻ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.col}>
        <View style={[styles.circle, styles.iconCenter]}>
          <FontAwesomeIcon icon={faLink} size={25} />
        </View>
        <Text style={styles.text}>Liên kết</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.col}>
        <View style={[styles.circle, styles.iconCenter]}>
          <FontAwesomeIcon icon={faBookmark} size={25} />
        </View>
        <Text style={styles.text}>Lưu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.col}>
        <View style={[styles.circle, styles.iconCenter]}>
          <FontAwesomeIcon icon={faAdd} size={25} />
        </View>
        <Text style={styles.text}>Remix</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.col}>
        <View style={[styles.circle, styles.iconCenter]}>
          <FontAwesomeIcon icon={faQrcode} size={25} />
        </View>
        <Text style={styles.text}>Mã QR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  circle: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    borderWidth: 1,
    margin: 3,
  },
  iconCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  col: {
    flexDirection: 'column',
  },
  text: {
    textAlign: 'center',
  },
});
export default CirclePopUp;
