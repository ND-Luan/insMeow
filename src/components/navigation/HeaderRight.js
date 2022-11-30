import {View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAdd, faMessage} from '@fortawesome/free-solid-svg-icons';
function HeaderRight() {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faAdd} size={25} style={styles.margin}/>
      <FontAwesomeIcon icon={faMessage} size={25} style={styles.margin}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    
  },
  margin:{
    margin:5
  }
});
export default HeaderRight;
