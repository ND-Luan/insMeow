import {StyleSheet, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAdd, faBars} from '@fortawesome/free-solid-svg-icons';
function HeaderSelfRight() {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faAdd} size={20} style={{marginHorizontal: 10}} />
      <FontAwesomeIcon icon={faBars} size={20} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingRight: 10,
  },
});
export default HeaderSelfRight;
