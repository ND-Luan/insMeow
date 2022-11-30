import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import DropDownTitle from './DropDownTitle';
import {useState} from 'react';

function HeaderTitle() {
  const [show, setShow] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={()=>setShow(!show)}>
      <Text style={styles.textHeader}>InsMeow</Text>
      <FontAwesomeIcon icon={faChevronDown} />

      {show && <DropDownTitle />}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'row',
    alignItems: 'center',
  },

  textHeader: {
    fontSize: 25,
    fontWeight: '600',
    marginRight: 5,
  },
});
export default HeaderTitle;
