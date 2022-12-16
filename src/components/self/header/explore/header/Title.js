import {StyleSheet, Text, View} from 'react-native';

function Title() {
  return (
    <View style={styles.container}>
      <Text>Khám phá mọi người</Text>
      <Text style={{color:"blue"}}>Xem tất cả</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Title;
