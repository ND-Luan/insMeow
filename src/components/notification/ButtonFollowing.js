import {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function ButtonFollowing() {
  const [btn, setBtn] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.btn, {backgroundColor: btn ? '#d3d3d3' : '#ADD8E6'}]}
      onPress={() => {
        setBtn(!btn);
      }}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFollowing: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
  },
  textUnfollowing: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
  },
});
export default ButtonFollowing;
