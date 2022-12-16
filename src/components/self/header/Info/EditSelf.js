import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';
function EditSelf() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{color: 'black', fontWeight: '500'}}>lvie</Text>
        <Text>5826</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btnLeft}>
          <Text style={styles.text}>Chỉnh sửa trang cá nhân</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRight}>
          <FontAwesomeIcon icon={faUserPlus} style={styles.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10
  },
  btnLeft: {
    width: '90%',
    height: 40,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 4,
  },
  btnRight: {
    width: '10%',
    height: 40,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontWeight: '500',
  },
});
export default EditSelf;
