import {StyleSheet, View, Text} from 'react-native';

function StatusSelf() {
  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <Text style={styles.textNumber}>24</Text>
        <Text>Bài viết</Text>
      </View>

      <View style={[styles.col, {marginHorizontal: 10}]}>
        <Text style={styles.textNumber}>72</Text>
        <Text>Người theo dõi</Text>
      </View>
      <View style={styles.col}>
        <Text style={styles.textNumber}>58</Text>
        <Text>Đang theo dõi</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    color: 'black',
  },
  col: {
    flexDirection: 'column',
  },
  textNumber: {
    fontWeight: '600',
    textAlign: 'center',
  },
});
export default StatusSelf;
