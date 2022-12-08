import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMapLocation, faSearch} from '@fortawesome/free-solid-svg-icons';
import {View, StyleSheet, TextInput} from 'react-native';

function SearchInput() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <FontAwesomeIcon style={styles.iconInput} icon={faSearch} size={15} />
        <TextInput
          placeholder="Search"
          style={styles.input}
         
        />

        <FontAwesomeIcon
          icon={faMapLocation}
          style={styles.iconAddress}
          size={25}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flexDirection: 'column'},
  input: {
    borderWidth: 1,
    width: 300,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 40,
  },
  iconInput: {
    padding: 1,
    position: 'absolute',

    left: 27,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'center',
  },
  iconAddress: {
    marginLeft: 10,
  },
});
export default SearchInput;
