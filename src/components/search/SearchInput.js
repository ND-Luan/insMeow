import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {View, StyleSheet, TextInput} from 'react-native';
import FastImage from 'react-native-fast-image';

function SearchInput() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput label="Password" style={styles.input} />
        <FontAwesomeIcon style={styles.iconInput} icon={faSearch} />
        <FontAwesomeIcon icon={faSearch} />
      </View>
      <View>
        <FastImage />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column'},
  input: {
    borderWidth: 1,
    width: 250,
    height: 40,
  },
  iconInput: {
    position: 'absolute',
    top: 15,
  },
});
export default SearchInput;
