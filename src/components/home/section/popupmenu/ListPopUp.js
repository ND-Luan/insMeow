import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar, faUser, faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import {
  faCircleInfo,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
function ListPopUp() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row}>
        <FontAwesomeIcon icon={faStar} size={30} />
        <Text style={styles.text}>Thêm vào mục Yêu thích</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <FontAwesomeIcon icon={faUser} size={30} />
        <Text style={styles.text}>Bỏ theo dõi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <FontAwesomeIcon icon={faCircleInfo} size={30} />
        <Text style={styles.text}>Lý do bạn nhìn thấy bài viết này</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <FontAwesomeIcon icon={faEyeSlash} size={30} />
        <Text style={styles.text}>Ẩn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <FontAwesomeIcon icon={faUser} size={30} />
        <Text style={styles.text}>Giới thiệu về tài khoản này</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <FontAwesomeIcon icon={faExclamationCircle} size={30} />
        <Text style={styles.text}>Báo cáo</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    marginLeft: 10,
  },
});
export default ListPopUp;
