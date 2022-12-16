import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function Btn() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{color: 'white', fontSize: 12}}>Theo dõi</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#add8e6',
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5
  },
});
export default Btn;
