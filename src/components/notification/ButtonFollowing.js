import {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function ButtonFollowing() {
  const [btn, setBtn] = useState(false);
  return (
    <TouchableOpacity style={styles.btn} onPress={() => setBtn(!btn)}>
      {btn ? (
        <Text style={styles.textFollowing}>Đang theo dõi</Text>
      ) : (
        <Text style={styles.textUnfollowing}>Theo dõi</Text>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,

    borderRadius: 3,
    height: 30,
    width: 90,
  },
  textFollowing: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#d3d3d3',
  },
  textUnfollowing: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
  },
});
export default ButtonFollowing;
